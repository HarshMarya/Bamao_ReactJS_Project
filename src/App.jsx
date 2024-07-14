import React from "react";
import "./App.css";
import UserSignIn from "./pages/UserSignIn";
import UserLogIn from "./pages/UserLogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserSignIn />} />
          <Route path={"/userlogedin"} element={<UserLogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
