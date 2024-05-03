import { ENCRYPT_KEY } from "../../constant";
import { UserService } from "../../services/UserService";
import { startLoading, stopLoading } from "./LoadingActions";

/** seting action types */
export const actionTypes = {
  GET_USER_LIST: "GET_USER_LIST",
};

/*
 * Action creators for login
 */

export function getUserData(data) {
  return {
    type: actionTypes.GET_USER_LIST,
    payload: data,
  };
}

export function getUsersList(data) {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      UserService.getUsersList(data)
        .then((res) => {
          dispatch(stopLoading());
          dispatch(getUserData(res.data));
          resolve(res);
        })
        .catch((ex) => {
          dispatch(stopLoading());
          reject(ex);
        });
    });
}
