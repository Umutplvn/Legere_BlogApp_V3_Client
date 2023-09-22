import useAxios from "./useAxios";
import {
  getDataSuccess,
  fetchStart,
  fetchFail,
  postDataSuccess,
  getDraftSuccess
} from "../features/blogDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";

const useDataCall = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const { token, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`${url}/`);
      dispatch(getDataSuccess({ url, data }));

    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

  const getDrafts= async (userId)=>{
    dispatch(fetchStart())
    try {
      const {data}= await axiosWithToken(`/blogs/?author=${userId}`)
      const info = data?.filter((item)=>item?.status=="d")
      dispatch(getDraftSuccess({info}))
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error)}
  }

  const getViews = (id) => {
    axios(`http://30124.fullstack.clarusway.com/api/blogs/${id}/`, {
      headers: { Authorization: `Token ${token}` },
    });
    getData("blogs");
  };

  const postData = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`${url}/${id}`, info);
      dispatch(postDataSuccess({ url, data }));
      getData("blogs");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.detail);
      console.log(error);
    }
  };

  const putData = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${id}/`, info);
      getData("blogs");
      getDrafts(userId)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.detail);
    }
  };

  const deleteData = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`blogs/${id}`);
      toastSuccessNotify("Successfully deleted");
      getData("blogs");
    } catch (error) {
      toastErrorNotify(error);
      dispatch(fetchFail());
    }
  };



 
  

  return { getData, deleteData, postData, putData, getViews, getDrafts };
};

export default useDataCall;
