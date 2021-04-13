import { takeLatest, put, call } from "redux-saga/effects";
import { loadPostSuccess, loadPostFail } from "./action";
import { loadUserApi } from "./api";
import { LOAD_USER_START } from "./constants";

function* onLoadUsersStart() {
  try {
    const response = yield call(loadUserApi);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    yield put(loadPostFail(error));
  }
}

export function* onLoadUsers() {
  yield takeLatest(LOAD_USER_START, onLoadUsersStart);
}
