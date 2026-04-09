import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import WebinarListPage from "./pages/WebinarListPage";
import MyRegistrationsPage from "./pages/MyRegistrationsPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<WebinarListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-registrations" element={<MyRegistrationsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
