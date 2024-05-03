import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import { getApi } from "../../redux/actions/users";
import "./usersComp.css";

const Users = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getUsers());
    getUserList();
  }, []);

  const getUserList = useCallback(() => {
    getApi();
  }, [users]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredData = users.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = sortKey
    ? filteredData.slice().sort((a, b) => {
        const compareResult =
          a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0;
        return sortOrder === "asc" ? compareResult : -compareResult;
      })
    : filteredData;

  const handleItemClick = (item) => {
    navigate(`/about?itemName=${item?.name}`);
    localStorage.setItem(`${item?.name}`, JSON.stringify(item));
  };
  return (
    <>
      {error && !loading && <p>{error}</p>}
      <div className="tableContainer">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="table">
          <thead>
            <tr>
              <th>
                Name{" "}
                <a href="#" onClick={() => handleSort("name")}>
                  {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                </a>
              </th>
              <th>Country</th>
              <th>Country Code</th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.length > 0 &&
              sortedData?.map((item, index) => (
                <tr key={index} onClick={() => handleItemClick(item)}>
                  <td>{item?.name}</td>
                  <td>{item?.country}</td>
                  <td>{item?.alpha_two_code}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
