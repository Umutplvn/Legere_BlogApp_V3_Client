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
        `https://newsapi.org/v2/top-headlines?pageSize=10&country=ie&apiKey=${process.env.REACT_APP_KEY_NEWS}`
      );
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("blogs");
    getNews();
  }, []);

  return (
    <div style={homeStyle}>
      <Grid container>
        <Grid item xs={12} md={9} mt={"4rem"}>
          <BlogNews />
        </Grid>

        <Grid
          item
          display={{ xs: "none", md: "block" }}
          md={3}
          sx={{
            m: "4rem auto",
            position: "fixed",
            right: 0,
            top: 0,
            zIndex: 0,
            minWidth: "280px",
          }}
        >
          <News news={news} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
