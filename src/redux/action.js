import {
  LOAD_USER_FAIL,
  LOAD_USER_START,
  LOAD_USER_SUCCESS
} from "./constants";

export const loadPostStart = () => ({
  type: LOAD_USER_START
});
export const loadPostSuccess = (users) => ({
  type: LOAD_USER_SUCCESS,
  payload: users
});
export const loadPostFail = (error) => ({
  type: LOAD_USER_FAIL,
  payload: error
});
