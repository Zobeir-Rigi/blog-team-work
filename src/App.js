import Home from "./comp/Home";
import Write from "./comp/Write";
import Login from "./comp/Login";
import Register from "./comp/Register";
import Settings from "./comp/Settings";
import Single from "./comp/Single";
import TopBar from "./comp/TopBar";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/Single" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
