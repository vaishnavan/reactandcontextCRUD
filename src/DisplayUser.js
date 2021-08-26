import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { mycontext } from "./context";

export default function DisplayUser() {
  const { userData, setUserData } = useContext(mycontext);

  const handleDelete = (id) => {
    const fildelete = userData.filter((data) => data.id !== id);
    setUserData(fildelete);
  };

  return (
    <>
      <h1>Display User</h1>
      {userData.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.username}</h2>
            <h3>{data.desc}</h3>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
            <Link to={`/edit/${data.id}`}>Edit</Link>
          </div>
        );
      })}
    </>
  );
}
