import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Repositories from "./pages/RepositoriesPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
