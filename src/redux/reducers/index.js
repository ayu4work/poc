import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import users from "./user";

export const history = createBrowserHistory();
const appReducer = combineReducers({
  loading: "",
  users: users,
  router: connectRouter(history),
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
