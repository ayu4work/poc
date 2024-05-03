import { fetch } from "./Fetch";

const getApi = () => {
  return fetch(
    "get",
    `http://universities.hipolabs.com/search?country=United%20Arab%20Emirates`
  );
};

export const UserService = {
  getApi,
};
