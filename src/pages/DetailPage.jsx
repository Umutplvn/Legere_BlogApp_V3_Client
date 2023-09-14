import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Avatar, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CommentBlock from "../components/CommentBlock";
import useDataCall from "../hooks/useDataCall";
import { btnGreen, btnRed, detailPageStyle } from "../styles/globalStyles";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";

const DetailPage = () => {

  useEffect(() => {
    getData("blogs");
  }, []);

  const { blogs } = useSelector((state) => state?.blogs);
  const { currentUser } = useSelector((state) => state?.auth);
  const { id } = useParams();
  const { userId } = useSelector((state) => state.auth);
  const veri = blogs.filter((data) => data.id == id);
  const [comment, setComment] = useState(false);
  const { postData, getData } = useDataCall();
  const [open, setOpen] = React.useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);

  const likesN = veri[0]?.likes_n;
  const likeDet = likesN?.map((item) => item.user_id);

  const handleLikes = (id) => {
    postData("likes", `${id}/`, "");
  };


  return (
    <Grid container sx={detailPageStyle}>
      <Grid item xs={11} sm={10} md={9} lg={7} xl={5} m={"auto"} width={"100%"}>
        <Box>
          <Box mt={"1rem"}>
            {veri.map((item) => (
              <Paper
              
                key={item.id}
                elevation={3}
                sx={{
                  p:"1.5rem",
                  m: "auto",
                  color: "black",
                  backgroundColor: "#eef8fa",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
                  <img
                    src={item.image}
                    width={"250px"}
                    style={{
                      borderRadius: "1rem",
                      aspectRatio: "4/3",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Typography
                  component={"h4"}
                  variant="h5"
                  fontWeight={"600"}
                  sx={{ textAlign: "center" }}
                >
                  {item.title}
                </Typography>

                {/* Content Text */}
                <Box padding={"0.5rem"}>
                  <Typography m={"2rem 0"}>{item.content}</Typography>
                  <Typography sx={{ mt: "15px" }}>
                    {item.publish_date.slice(0, 10)} /{" "}
                    {item.publish_date.slice(11, 19)}
                  </Typography>
                </Box>
                {/* Content User Info */}
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  padding={"0.5rem"}
                  gap="10px"
                >
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                  <Typography>{item.author}</Typography>
                </Box>

                {/* Content Buttons and Values Info/ Read More */}
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} padding={"0.5rem"} gap={"0.5rem"}>
                    <Box display={"flex"}>
                      {likeDet.includes(userId) ? (
                        <FavoriteIcon
                          sx={{ cursor: "pointer", color: "red" }}
                          onClick={() => handleLikes(item.id)}
                        />
                      ) : (
                        <FavoriteIcon
                          sx={{ cursor: "pointer", color: "black" }}
                          onClick={() => handleLikes(item.id)}
                        />
                      )}

                      <Typography>{item.likes}</Typography>
                    </Box>
                  
                    <Box display={"flex"}>
                      <ChatBubbleIcon
                        onClick={() => setComment(!comment)}
                        sx={{ cursor: "pointer" }}
                      />
                      <Typography>{item.comment_count}</Typography>
                    </Box>
                    <Box display={"flex"}>
                      <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
                      <Typography>{item.post_views}</Typography>
                    </Box>
                  </Box>
                </Box>
                {item.author == currentUser && (
                  <>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      gap={2}
                      m="1rem"
                    >
                      <Button sx={btnRed} onClick={handleOpen}>
                        Delete
                      </Button>
                      <Button sx={btnGreen} onClick={handleUpdateOpen}>
                        Update
                      </Button>
                    </Box>

                    <DeleteModal
                      open={open}
                      handleClose={handleClose}
                      handleOpen={handleOpen}
                      id={item.id}
                    />
                  </>
                )}

                {comment && <CommentBlock id={item.id} />}
                <UpdateModal
                  updateOpen={updateOpen}
                  handleUpdateClose={handleUpdateClose}
                  item={item}
                />
              </Paper>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default DetailPage;
