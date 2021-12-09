import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
  };
  state = {
    mode: "light",
  };
  apiKey = process.env.REACT_APP_NEWS_API;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  toggle = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      console.log("hello" + this.state.mode);
      document.body.style.backgroundColor = "#2e363e";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    }
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar toggle={this.toggle} mode={this.state.mode} />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
                mode={this.state.mode}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
