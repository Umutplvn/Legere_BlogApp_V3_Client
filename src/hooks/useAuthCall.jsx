import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";


const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {axiosWithToken}=useAxios()

  const login = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/auth/login/`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successfull");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(error.response.data.non_field_errors[0]);
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/register/`,
        userData
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successfull");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register failed");
    }
  };

  const logout = async () => {
    dispatch(fetchStart);
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout successfull");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

  const passwordUpdate= async(data)=>{
    try {
    await axiosWithToken.post(`${process.env.REACT_APP_BASE_URL}users/auth/password/change/`, data)  
      toastSuccessNotify("Password Changed Successfully");
    } catch (error) {
      toastErrorNotify("Failed to change password")
      toastErrorNotify(error);
    }
  };
  


  return { login, register, logout, passwordUpdate };
};

export default useAuthCall;
