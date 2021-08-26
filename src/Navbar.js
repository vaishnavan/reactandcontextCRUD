import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/createUser">CreateUser</Link>
        </li>
      </ul>
    </>
  );
}
