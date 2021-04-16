import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectAllPosts, selectState } from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllPosts);
  const status = useSelector(selectState);
  console.log(status);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const listItems = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.website}</td>
      <td>{user.phone}</td>
    </tr>
  ));
  const header = ["ID", "Name", "Website", "Phone"];
  const renderTableHeader = () => {
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  return (
    <div>
      <h1 id="title">User Table</h1>
      <table id="users">
        <tr>{renderTableHeader()}</tr>
        {status == "loading" ? (
          <div id="loading">Loading....</div>
        ) : (
          <tbody>{listItems}</tbody>
        )}
      </table>
    </div>
  );
};

export default Posts;
