import React, { useState } from "react";
import "./App.css";
import AlertMsg from "./components/AlertMsg";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState();
  const showAlert = (message, typeMsg) => {
    setAlert({
      msg: message,
      typeMsg: typeMsg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light"); // whether dark mode is enable is not.
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <AlertMsg alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutUs />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter your text to analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
