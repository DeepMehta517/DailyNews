import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  //------------------------------------------- propstypes-------------------------------------------------------------------------------

  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
    document.title = this.capitalizeFirstLetter(`${this.props.category} - DailyNewz `);
    
  }
  // -------------------------------------To Handle Next Button=---------------------------------------------------------------------------------
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      this.setState({ page: this.state.page + 1 });
      this.Update();
    }
  };

  // -------------------------------------To Handle Previous Button=----------------------------------------------------------------------

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.Update();
  };

  // -------------------------------------To Handle DidMount-----------------------------------------------------------------------------
  async Update() {
    this.props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30)
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.setState({ page: this.state.page  });
    document.body.style.backgroundColor = "#212529"
    this.Update();
  }

  // -------------------------------------To Render------------------------------------------------------

  render() {
    return (
      <>
        <div className="container my-5">
          <h1 className="text text-center"  style={{color:'white',marginTop:'100px'}}>
            Daily News - Top {this.capitalizeFirstLetter(this.props.category)}
            {" "} Headings!
          </h1>
          {this.state.loading && <Spinner />}

          <div className="row  my-5 ">
            {!this.state.loading &&
              this.state.article.map((e) => {
                return (
                  <div className="col-md-4 my-3" key={e.url}>
                    <Newsitems
                      title={
                        e.title ? e.title.slice(0, 90) + "...." : " No Headline"
                      }
                      description={
                        e.description
                          ? e.description.slice(0, 150) + "..."
                          : "Click on Read More to see description"
                      }
                      imageUrl={
                        e.urlToImage !== null
                          ? e.urlToImage
                          : "https://c.ndtvimg.com/2022-01/e6mc6p2g_5gtower-genericbloomberg-650_625x300_19_January_22.jpg"
                      }
                      newsUrl={e.url ? e.url : ""}
                      author={e.author ? e.author : "Unknown"}
                      source={e.source.name}
                      releasedate={e.publishedAt ? e.publishedAt.slice(0,10) : "Unknown"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button style={{backgroundColor:'#000000',color:'white'}}
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-light"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button style={{backgroundColor:'#000000',color:'white'}}
            type="button"
            className="btn btn-light"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
