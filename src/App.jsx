import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import SiteNavigator from "./components/SiteNav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Base from "./pages/Base";
import Users from "./pages/Users";
import { ACCESS_TOKEN } from "./constants";

function Logout() {
  // clears tokens
  localStorage.clear();

  return <Navigate to="/" />;
}

function RegisterAndLogout() {
  // clear so that we dont return old access tokens, prevents functionality errors
  localStorage.clear();

  return <Register />;
}

function App() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) console.log("access denied");
  return (
    <>
      <header>
        <SiteNavigator />
      </header>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Base />}
            />
            <Route
              path="/users/*"
              element={<Users />}
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/logout"
              element={<Logout />}
            />
            <Route
              path="/register"
              element={<RegisterAndLogout />}
            />
            <Route
              path="/*"
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
