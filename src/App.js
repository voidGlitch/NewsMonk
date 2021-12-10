import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  const [mode, setmode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      console.log("hello" + mode);
      document.body.style.backgroundColor = "#2e363e";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Router>
        <Navbar toggle={toggle} mode={mode} />
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Switch>
          <Route exact path="/">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              mode={mode}
            />
          </Route>
          <Route exact path="/business">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              mode={mode}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              mode={mode}
            />
          </Route>
          <Route exact path="/general">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              mode={mode}
            />
          </Route>
          <Route exact path="/health">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              mode={mode}
            />
          </Route>
          <Route exact path="/science">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              mode={mode}
            />
          </Route>
          <Route exact path="/sports">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              mode={mode}
            />
          </Route>
          <Route exact path="/technology">
            <News
              setprogress={setprogress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
