import * as type from "../types";
import { UserService } from "../../services/UserService";

export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  };
}

export function getApi(data) {
  return () =>
    new Promise((resolve, reject) => {
      UserService.getApi(data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((ex) => {
          reject(ex);
        });
    });
}
