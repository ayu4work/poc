import React from "react";

const UserList = (props) => {
  const { userList } = props;

  return (
    <div>
      {userList &&
        userList?.length > 0 &&
        userList?.map((item, i) => {
          return <div key={i}>{item.title}</div>;
        })}
    </div>
  );
};

export default UserList;
