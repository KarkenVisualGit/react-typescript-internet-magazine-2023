import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  useNavigate,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
