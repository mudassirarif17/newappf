import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// here I am using React class based components(rcc for)
export default class FileName extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API
  c="mudassir";
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
    <div>
      <LoadingBar
        height={3}
        color='#eb425b'
        progress={this.state.progress}
      />
      {/* This is my first class based Component website {this.c} */}
      <Router>
      <Navbar/>
      {/* <News setProgress={this.setProgress}  pageSize={5} country="in" category="sports"/> */}
      <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route>

        </Switch>
      </Router>
      </div>
  );
}
}


// export default App;
