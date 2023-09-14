import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useDataCall from "../hooks/useDataCall";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cloneDeep from "lodash/cloneDeep";

const NewBlog = () => {
  const { getData, postData } = useDataCall();
  const { categories, blogs } = useSelector((state) => state.blogs);

  const status = [
    { name: "Publish", letter: "p" },
    { name: "Draft", letter: "d" },
  ];
  let [content, setContent] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
    slug: "",
  });

  const blogPost = () => {
    if (content.status == "p") {
      postData("blogs", "", content);
      getData("blogs");
      setContent({
        title: "",
        content: "",
        image: "",
        category: "",
        status: "",
        slug: "",
      });
    } else {
      let newObj = cloneDeep(content);
      let newArr = [];
      const oldArr = JSON.parse(localStorage.getItem("newArr") || "[]");
      newArr = oldArr;
      newArr.push(newObj);
      localStorage.setItem("newArr", JSON.stringify(newArr));
      setContent({
        title: "",
        content: "",
        image: "",
        category: "",
        status: "",
        slug: "",
      });
    }
  };

  useEffect(() => {
    getData("categories");
  }, []);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  return (
    <Grid container mt={4}>
      <Grid item xs={11} md={6} m={"auto"}>
        <Paper
          elevation={6}
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            border: "2px solid, black",
            borderRadius: "1rem",
          }}
        >
          <FormControl>
            <FormControl>
              <Input
                onChange={handleChange}
                placeholder="Title"
                sx={{ padding: "1rem", borderRadius: "1rem" }}
                name="title"
                value={content.title}
              />
            </FormControl>

            <FormControl>
              <TextField
                onChange={handleChange}
                placeholder="Content"
                value={content.content}
                sx={{
                  height: "200px",
                  borderRadius: "1rem",
                  "& fieldset": { border: "none" },
                }}
                multiline
                name="content"
              />
            </FormControl>

            <FormControl>
              <Input
                onChange={handleChange}
                type="text"
                name="image"
                variant="standart"
                placeholder="Image URL"
                value={content.image}
                sx={{
                  padding: "1rem",
                  borderTop: "solid #aaaaaa",
                }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: "0.5rem" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                label="Category"
                onChange={handleChange}
                value={content.category}
                name="category"
              >
                {categories.map((item, index) => (
                  <MenuItem key={index} value={Number(item.id)}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: "0.5rem" }}>
              <InputLabel id="demo-simple-select-label">
                Publish/Draft
              </InputLabel>
              <Select
                labelId="Publish/Draft"
                id="Publish/Draft"
                label="Publish/Draft"
                name="status"
                onChange={handleChange}
                value={content.status}
              >
                {status.map((item, index) => (
                  <MenuItem key={index} value={item.letter}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              onClick={blogPost}
              sx={{
                backgroundColor: "green",
                color: "white",
                "&:hover": { backgroundColor: "success.dark" },
                width: "5rem",
                m: "1rem auto",
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewBlog;
