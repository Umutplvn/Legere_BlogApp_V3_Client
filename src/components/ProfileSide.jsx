import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { profileBox } from "../styles/globalStyles";
import ChangePassword from "./ChangePassword";

const ProfileSide = () => {
  const [revolve, setRevolve] = useState(true);
  const [open, setOpen] = React.useState(true);

  const { user } = useSelector((state) => state.auth);

  const slide = () => {
    setRevolve(!revolve);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: "110vh",
        backgroundColor: "rgb(247, 253, 255)",
        padding: "6rem 0",
      }}
    >
      <Box sx={profileBox}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Avatar sx={{ width: "8rem", height: "8rem" }} src={user.image} />

          <i
            className="fa-solid fa-gear"
            style={
              revolve
                ? {
                    position: "fixed",
                    right: "20px",
                    fontSize: "1.5rem",
                    transform: "rotate(-180deg)",
                    transitionTimingFunction: "linear",
                    transition: "2s",
                    cursor: "pointer",
                  }
                : {
                    position: "fixed",
                    right: "20px",
                    fontSize: "1.5rem",
                    transform: "rotate(180deg)",
                    transitionTimingFunction: "linear",
                    transition: "2s",
                    cursor: "pointer",
                  }
            }
            onClick={() => slide()}
          ></i>
          <Typography>
            <span style={{ fontWeight: "700", color: "#BB2525" }}>
              Username:
            </span>{" "}
            {user.username}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "700", color: "#BB2525" }}>
              First Name:{" "}
            </span>
            {user.first_name.toLocaleUpperCase()}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "700", color: "#BB2525" }}>
              Last Name:{" "}
            </span>
            {user.last_name.toLocaleUpperCase()}{" "}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "700", color: "#BB2525" }}>Email: </span>
            {user.email}{" "}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "700", color: "#BB2525" }}>
              About me:{" "}
            </span>
            {user.bio}{" "}
          </Typography>

          <Box
            sx={{
              width: "320px",
              height: "300px",
              overflow: "hidden",
              mt: "2rem",
            }}
          >
            {revolve ? (
              <Box sx={{ transform: "translateY(-70px)", transition: "1s" }}>
                <ChangePassword revolve={revolve} />
              </Box>
            ) : (
              <Box sx={{ transform: "translateY(0px)", transition: "1s" }}>
                <ChangePassword
                  revolve={revolve}
                  open={open}
                  setOpen={setOpen}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSide;
