import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import KeyIcon from '@mui/icons-material/Key';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  flexBox,
} from "../styles/globalStyles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { object, string } from "yup";
import { useState } from 'react';
import {btnStyle} from "../styles/globalStyles.js"
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';

const ChangePassword =({open, setOpen}) => {
  
const {passwordUpdate, logout}=useAuthCall()
const navigate=useNavigate()

  const handleClick = () => {
    setOpen(!open);
  };


  let loginScheme = object({
    
    new_password1: string()
      .required("Password is required")
      .min(8, "Password must at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/\d+/, "There must be at least 1 number")
      .matches(/[a-z]/, "There must be at least one lower case")
      .matches(/[A-Z]/, "There must be at least one capital case")
      .matches(
        /[!,?{}><%&$#+-.]/,
        "There must be at least one spacial character"
      ),
      new_password2: string()
      .required("Password is required")
      .min(8, "Password must at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/\d+/, "There must be at least 1 number")
      .matches(/[a-z]/, "There must be at least one lower case")
      .matches(/[A-Z]/, "There must be at least one capital case")
      .matches(
        /[!,?{}><%&$#+-.]/,
        "There must be at least one spacial character"
      )
  });

  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  const setPass = () => {
    setVisible(!visible);
  };

  const setPass2 = () => {
    setVisible2(!visible2);
  };

  return (


    <List
      sx= {{ width: '320px', bgcolor: "rgb(247, 253, 255)"}}
      
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={()=>navigate("/")}>
<ListItemIcon>
<HomeIcon/>
</ListItemIcon>
    <ListItemText>Home</ListItemText>
      </ListItemButton>

      <ListItemButton onClick={()=>logout()}>
<ListItemIcon>
<LogoutIcon/>
</ListItemIcon>
    <ListItemText>Logout</ListItemText>
      </ListItemButton>

  
      <ListItemButton onClick={()=>handleClick()}>
        <ListItemIcon>
          <KeyIcon />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

<Formik
          initialValues={{ new_password1: "", new_password2: ""}}
          validationSchema={loginScheme}
          onSubmit={(values, action) => {
            passwordUpdate(values);
            action.resetForm();
            action.setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Box m={"auto"} sx={flexBox}>
              <Form>
               

                {visible ? (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <TextField
                      variant="standard"
                      id="new_password1"
                      label="Password"
                      name="new_password1"
                      type="password"
                      value={values.new_password1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.new_password1 && Boolean(errors.new_password1)}
                      helperText={errors.new_password1}
                      sx={{ width: "200px" }}
                    />
              <Box sx={{display:"flex", height:"30px", justifyContent:"center", alignItems:"start"}}>
                    <VisibilityOffIcon onClick={setPass} />
              </Box>
                  </Box>
                ) : (
                  <>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      position: "inherit",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <TextField
                      variant="standard"
                      id="new_password1"
                      label="Password"
                      name="new_password1"
                      type="text"
                      value={values.new_password1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: "200px" }}
                      error={touched.new_password1 && Boolean(errors.new_password1)}
                      helperText={errors.new_password1}
                    />
                    <Box sx={{display:"flex", height:"30px", justifyContent:"center", alignItems:"start"}}>
                    <VisibilityIcon onClick={setPass} />
                    </Box>
                  </Box>
                 
                  </>
                  
                )}

{visible2 ? (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <TextField
                      variant="standard"
                      id="new_password2"
                      label="Password"
                      name="new_password2"
                      type="password"
                      value={values.new_password2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.new_password2 && Boolean(errors.new_password2)}
                      helperText={errors.new_password2}
                      sx={{ width: "200px" }}
                    />
              <Box sx={{display:"flex", height:"30px", justifyContent:"center", alignItems:"start"}}>

                    <VisibilityOffIcon onClick={setPass2} />
              </Box>
                  </Box>
                ) : (
                  <>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      position: "inherit",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <TextField
                      variant="standard"
                      id="new_password2"
                      label="Password"
                      name="new_password2"
                      type="text"
                      value={values.new_password2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: "200px" }}
                      error={touched.new_password2 && Boolean(errors.new_password2)}
                      helperText={errors.new_password2}
                    />
                    <Box sx={{display:"flex", height:"30px", justifyContent:"center", alignItems:"start"}}>
                    <VisibilityIcon onClick={setPass2} />
                    </Box>
                  </Box>
                 
                  </>
                  
                )}
  <Button type="submit" sx={btnStyle}  onClick={()=>handleClick()} >
                  SAVE
                </Button>
              </Form>
            </Box>
          )}

        </Formik>
            <ListItemText />

        </List>
      </Collapse>

    </List>
        

  );
}

export default ChangePassword