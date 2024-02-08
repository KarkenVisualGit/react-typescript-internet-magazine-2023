import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/const";
import { Context } from "..";

const AppRouter = () => {
  function useUserContext() {
    const context = useContext(Context);
    if (context === null) {
      throw new Error(
        "useUserContext должен использоваться внутри UserContext.Provider"
      );
    }
    return context;
  }
  const { user } = useUserContext();
  console.log(user);

  return user.isAuth ? (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Element }) => {
          return <Route path={path} element={<Element />} key={path} />;
        })}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Element }) => {
        return <Route path={path} element={<Element />} key={path} />;
      })}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
