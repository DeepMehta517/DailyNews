import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    let pageSize= 30;
    
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color=''
        progress={this.state.progress}
        
      />
          <Switch>
            <Route exact path="/" > <News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/general" > <News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business" > <News  setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment" > <News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>       
            <Route exact path="/health" > <News  setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science" > <News  setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports" > <News  setProgress={this.setProgress}  apiKey={this.apiKey}  key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology" > <News  setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
          </Switch>
        
      </Router>
      </div>
    );
  }
}

export default App;
