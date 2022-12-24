import axios from "axios";
import {
  DATA_FETCH_FAIL,
  DATA_FETCH_INIT,
  DATA_FETCH_SUCCESS,
} from "../types/types";

export const dataFetchInit = () => {
  return {
    type: DATA_FETCH_INIT,
  };
};
export const dataFetchSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    posts: payload,
  };
};
export const dataFetchFail = (error) => {
  return {
    type: DATA_FETCH_FAIL,
    error: error,
  };
};

export const PostDatas = (setinfo, pageSize) => {
  return (dispatch) => {
    dispatch(dataFetchInit());
    axios
      .get("https://api.spacexdata.com/v3/history")
      .then((res) => dispatch(dataFetchSuccess(res.data)))
      .then((res) => {
        setinfo({
          term: res.posts,
          totalPage: res.posts.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
        });
      })

      .catch((error) => {
        dispatch(dataFetchFail(true));
      });
  };
};
export const PostHistory = (setinfo, pageSize) => {
  return (dispatch) => {
    dispatch(dataFetchInit());
    axios
      .get("https://api.spacexdata.com/v3/payloads")
      .then((res) => dispatch(dataFetchSuccess(res.data)))
      .then((res) => {
        setinfo({
          term: res.posts,
          totalPage: res.posts.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
        });
      })

      .catch((error) => {
        dispatch(dataFetchFail(true));
      });
  };
};
