import BlogNews from "../components/BlogNews";
import useDataCall from "../hooks/useDataCall";
import { useEffect, useState } from "react";
import { homeStyle } from "../styles/globalStyles";
import { Grid } from "@mui/material";
import News from "../components/News";
import axios from "axios";

const Home = () => {
  const { getData } = useDataCall();
  const [news, setNews] = useState();

  const getNews = async () => {
    try {
      const { data } = await axios(
        `http://newsapi.org/v2/top-headlines?pageSize=10&country=ie&apiKey=${process.env.REACT_APP_KEY_NEWS}`
      );
      setNews(data.articles);
    
    } catch (error) {
      console.log(error);
    }
  };
  console.log("news", news);

  useEffect(() => {
    getData("blogs");
    getNews();
  }, []);

  return (
    <div style={homeStyle}>
      <Grid container sx={{display:"flex", justifyContent:"center"}}>
        <Grid item xs={11} md={11} mt={"4rem"}>
          <BlogNews />
        </Grid>
        // <BlogNews/> Blognews can be used here with a proper API
      </Grid>
    </div>
  );
};

export default Home;
