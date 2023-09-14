import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/Header";
import Profile from "../pages/Profile";
import About from "../pages/About";
import DetailPage from "../pages/DetailPage";
import NewBlog from "../pages/NewBlog";
import DraftBlogs from "../pages/DraftBlogs";
import PrivateRouter from "../pages/PrivateRouter";

const Approuter = () => {
  return (
    <>
       <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route
            path="/new-blog"
            element={<NewBlog />}
          />
          <Route path="/drafts" element={<DraftBlogs />} />
        </Route>
      </Routes> 
    </>
  );
};

export default Approuter;
