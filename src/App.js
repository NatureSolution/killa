import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./component/Shared/Header/Header";
import Home from "./component/Home/Home/Home";
import About from "./component/Home/About/About";
import Projects from "./component/Home/Projects/Projects";
import Login from "./component/Home/Login/Login";
import Blog from "./component/Home/Blog/Blog";
import RequirAuth from "./component/Home/RequirAuth/RequirAuth";
import Blogs from "./component/Home/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/project"
          element={
            <RequirAuth>
              <Projects />
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <RequirAuth>
              <Blogs />
            </RequirAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
