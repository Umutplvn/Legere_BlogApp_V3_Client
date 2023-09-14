import React from "react";
import { Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import { registerStyle } from "../styles/globalStyles";


const Register = () => {

  return (
    <Box 
   sx={registerStyle}>

      <RegisterForm/>
    </Box>
  );
};

export default Register
