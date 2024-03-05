import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./Routes.data";

const MainRoutes: FC = () => {
  const user = localStorage.getItem("user");
  return (
    <Routes>
      {PUBLIC_ROUTES.map(route => (
        <Route path={route.link} element={<route.component />} key={route.id} />
      ))}
      {user &&
        PRIVATE_ROUTES.map(route => (
          <Route
            path={route.link}
            element={<route.component />}
            key={route.id}
          />
        ))}
    </Routes>
  );
};

export default MainRoutes;
