import React, { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export interface IUserContext {
  user: UserStore;
  device: DeviceStore;
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
          device: new DeviceStore(),
        }}
      >
        <App />
      </Context.Provider>
    </StrictMode>
  );
}
