import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  btnStyle,
  flexBox,
  flexContainer,
  flexBoxRow,
  icon,
  loginStyle,
} from "../styles/globalStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const { login } = useAuthCall();
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const setPass = () => {
    setVisible(!visible);
  };

  let loginScheme = object({
    email: string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: string()
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
    username: string()
      .min(2, "Username must at least 2 characters")
      .required("This field is required"),
  });

  return (
    <Box component={"div"} sx={loginStyle}>
      <Grid container sx={flexContainer}>
        <Typography
          sx={{
            fontWeight: "700",
            fontFamily: "Ruwudu, serif",
            fontSize: "1.5rem",
            margin: "auto",
          }}
        >
          LOGIN
        </Typography>

        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          validationSchema={loginScheme}
          onSubmit={(values, action) => {
            login(values);
            action.resetForm();
            action.setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Box m={"auto"} sx={flexBox}>
              <Form>
                <TextField
                  variant="standard"
                  id="username"
                  type="text"
                  label="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={errors.username}
                  sx={{ width: "100%" }}
                />
                <TextField
                  variant="standard"
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                  sx={{ width: "100%" }}
                />

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
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={errors.password}
                      sx={{ width: "100%" }}
                    />
                    <VisibilityOffIcon onClick={setPass} />
                  </Box>
                ) : (
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
                      id="password"
                      label="Password"
                      name="password"
                      type="text"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: "100%" }}
                      error={touched.password && Boolean(errors.password)}
                      helperText={errors.password}
                    />
                    <VisibilityIcon onClick={setPass} />
                  </Box>
                )}

                <Button type="submit" sx={btnStyle}>
                  Login
                </Button>
              </Form>
            </Box>
          )}
        </Formik>
        <Typography
          onClick={() => navigate("/register")}
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
        >
          Don't you have an account?
        </Typography>
        <Box sx={flexBoxRow}>
          <Link to="https://github.com/Umutplvn">
            {" "}
            <GitHubIcon sx={icon} />{" "}
          </Link>
          <Link to="https://www.linkedin.com/in/umut-pehlivan-817b28174/">
            {" "}
            <LinkedInIcon sx={icon} />
          </Link>
          <Link to="https://www.instagram.com/umutpehlivan35/">
            {" "}
            <InstagramIcon sx={icon} />
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default AuthForm;
