import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <FirebaseState>
        <AlertState>
          <Navbar />
          <div className="container">
            <Alert />
            <Routes>
              <Route path={"/"} exact element={<Home />} />
              <Route path={"/about"} exact element={<About />} />
            </Routes>
          </div>
        </AlertState>
      </FirebaseState>
    </Router>
  );
}

export default App;
