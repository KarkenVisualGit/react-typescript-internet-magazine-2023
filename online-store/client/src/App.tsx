import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  useNavigate,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
