import BlogNews from "../components/BlogNews";
import useDataCall from "../hooks/useDataCall";
import { useEffect } from "react";
import { homeStyle } from "../styles/globalStyles";

const Home = () => {
  const { getData } = useDataCall();

  useEffect(() => {
    getData("blogs");
    let newArr = [];
    localStorage.setItem("newArr", JSON.stringify(newArr));
  }, []);

  return (
    <div style={homeStyle}>
      <BlogNews />
    </div>
  );
};

export default Home;
