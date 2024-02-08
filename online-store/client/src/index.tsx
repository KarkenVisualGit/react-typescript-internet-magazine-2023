import React, { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";

interface IUserContext {
  user: UserStore;
}

export const Context = createContext<IUserContext | null>(null);

export const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Context.Provider
        value={{
          user: new UserStore(),
        }}
      >
        <App />
      </Context.Provider>
    </StrictMode>
  );
}
