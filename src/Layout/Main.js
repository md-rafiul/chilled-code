import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { AuthContext } from "../UserContext/UserContext";

const Main = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
