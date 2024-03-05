import React, { useEffect } from "react";
import "./app.scss";
import { useAppDispatch } from "./app/redux/hooks/hooks";
import MainRoutes from "./app/Routes/MainRoutes";
import Navbar from "./features/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
};

export default App;
