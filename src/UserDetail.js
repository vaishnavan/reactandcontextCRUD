import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { mycontext } from "./context";

const initialState = {
  username: "",
  desc: ""
};

export default function UserDetail() {
  const [users, setUsers] = useState(initialState);

  const history = useHistory();

  const { setUserData, userData } = useContext(mycontext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers({
      ...users,
      [name]: value
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const myData = {
      id: Math.floor(Math.random() * 1000).toString(),
      username: users.username,
      desc: users.desc
    };
    setUserData([...userData, myData]);
    setUsers(initialState);
    history.push("/");
  };

  console.log(userData);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={users.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          value={users.desc}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  );
}
