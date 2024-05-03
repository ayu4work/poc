import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getApi } from "../actions/users";

//for multiple api you need to create new function

function* fetchUsers(action) {
  try {
    const users = yield call(getApi());
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* fetchUser(action) {
  try {
    yield put({ type: "GET_USER_DATA", user: action.user });
  } catch (e) {
    yield put({ type: "GET_USER_DATA", user: {} });
  }
}
function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);

  //for multiple api you need to use another yield takeEverygetUserList eg.below
  yield takeEvery("GET_USERS_DATA", fetchUsers);

  yield takeEvery("GET_USER_DATA", fetchUser);
}

export default userSaga;
