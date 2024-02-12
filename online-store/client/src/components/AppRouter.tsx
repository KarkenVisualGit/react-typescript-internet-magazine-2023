import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/const";
import { Context } from "../index";

export function useUserContext() {
  const context = useContext(Context);
  if (context === null) {
    throw new Error(
      "useUserContext должен использоваться внутри UserContext.Provider"
    );
  }
  return context;
}

const AppRouter = observer(() => {
  const { user } = useUserContext();
  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
    </Routes>
  );
});

export default AppRouter;
