import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen";
import { DashboardScreen } from "./components/DashboardScreen";
import ProtectedRoute from "./components/ProtectedRoute";

export function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={
          localStorage.getItem("accessToken")
            ? <Navigate to="/dashboard" replace />
            : <LoginScreen />
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={<DashboardScreen />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
}