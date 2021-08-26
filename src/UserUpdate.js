import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { mycontext } from "./context";

const initialState = {
  username: "",
  desc: ""
};

export default function UserUpdate() {
  const [users, setUsers] = useState(initialState);

  const { id } = useParams();
  console.log(id);

  const history = useHistory();

  const { setUserData, userData } = useContext(mycontext);

  useEffect(() => {
    const findData = userData.find((data) => data.id === id);
    console.log(findData);
    setUsers({
      username: findData.username,
      desc: findData.desc
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers({
      ...users,
      [name]: value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newData = userData.map((data) => {
      if (data.id === id) {
        return { ...data, username: users.username, desc: users.desc };
      }
      return data;
    });
    setUserData(newData);
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
        <button onClick={handleUpdate}>Update</button>
      </form>
    </>
  );
}
