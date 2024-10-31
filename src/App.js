import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_API_KEY; // Make sure this is set correctly in your .env file
  console.log("API Key:", apiKey);

  const [progress, setprogress] = useState(0);
  const [mode, setmode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      console.log("Switched to dark mode");
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

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
