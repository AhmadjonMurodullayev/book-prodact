import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./header";
import { loadState } from "../config/store";

export default function MainLayout() {
    const user = loadState("userData");
    if (!user) {
      return <Navigate to="/" />;
    }
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
