import React from "react";
import UserItem from "./UserItem";

const UsersList = (props) => {
  const { users, isLoading } = props;

  return (
    <div className="users-list">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {/* {users.map((user, index) => ( */}
          {/* // <UserItem key={index} {...user} /> */}
          <p>we have users yay</p>
          {/* ))} */}
        </>
      )}
    </div>
  );
};

export default UsersList;
