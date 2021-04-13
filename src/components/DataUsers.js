import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../redux/action";

const DataUsers = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(loadPostStart());
  }
  const state = useSelector((state) => ({ ...state.app }));
  console.log(state);

  function renderUsers(user) {
    return (
      <ul style={{ "list-style-type": "none" }}>
        <li key={user.id}>{user.name}</li>
      </ul>
    );
  }
  return (
    <div>
      <h3>Users!</h3>
      {state.loading
        ? "Loading..."
        : state.users.map((user) => renderUsers(user))}
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default DataUsers;
