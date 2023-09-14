import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import useDataCall from "../hooks/useDataCall";
import { useSelector } from "react-redux";
import { btnGreen, btnRed } from "../styles/globalStyles";
const CommentBlock = ({ id }) => {
  const [text, setText] = useState();
  const { getData, postData} = useDataCall();
  const { blogs } = useSelector((state) => state);
  const info = { post: id, content: text };
  const blogComment = blogs.blogs.filter((item) => item.id == id);
  const yorum = blogComment[0].comments;


  useEffect(() => {
  getData("blogs");
  }, []);

  const handleComment = () => {
    postData("comments", `${id}/`, info);
    setText("")
    getData("blogs")
  };



  return (

    <>
    
    <Box display={"flex"} alignItems={"center"} p={2}>
      <Box width={"100px"}>
        <Avatar sx={{ margin: "auto" }}>A</Avatar>
      </Box>

      <Box width={"100%"}>
        <Box type="form">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            placeholder="Type a message"
          />

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Box
              display={"flex"}
              width={"100%"}
              gap={1}
              justifyContent={"end"}
              height={"2rem"}
              mt={"0.5rem"}
            >
              <Button sx={btnRed} onClick={() => setText("")}>Clear</Button>
              <Button sx={btnGreen} onClick={handleComment}>
                Comment
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {yorum?.map((item) => 
    <>
<Box sx={{ backgroundColor:"#ffffffec", padding:"1rem"}} gap={2} display={"flex"} justifyContent={"s"}>
  <Avatar>{item.user.substring(0,1)}</Avatar>      
<Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
<Typography>{item.content}</Typography>
  <Typography textAlign={"end"} sx={{textAlign:"end"}}>{
  item.time_stamp.slice(0,10)} / {item.time_stamp.slice(11,19) }</Typography>

</Box>
</Box>
<hr />
</>
 )}

    </>
  );
};

export default CommentBlock;

