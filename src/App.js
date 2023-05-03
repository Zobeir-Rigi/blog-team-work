import Home from "./comp/Home";
import Write from "./comp/Write";
import Login from "./comp/Login";
import Register from "./comp/Register";
import Settings from "./comp/Settings";
import Single from "./comp/Single";
import TopBar from "./comp/TopBar";
import Login from "./comp/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter> 
        <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
=======
        {/* <Route path="/write" element={user ? <Write /> : <Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={user ? <Home /> : <Register />} /> */}
        {/* <Route path="/settings" element={user ? <Settings /> : <Register />} /> */}
>>>>>>> 0fcec47104d84180ab84f20f288773d9d3d2eb73
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
