import React, { useEffect } from "react";
import "../styles/SiteNav.css";
import { ACCESS_TOKEN } from "../constants";
const SiteNavigator = () => {
  const pathname = window.location.pathname;

  if (pathname.includes("login")) {
    console.log("Login Page");
    return (
      <nav
        className="site-navigator"
        style={{ backgroundColor: "var(--gr)" }}>
        <ul className="nav-links">
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav>
    );
  } else if (pathname.includes("users")) {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      console.log("Users Page -- Logged In");
      return (
        <nav
          className="site-navigator"
          style={{ backgroundColor: "var(--gr)" }}>
          <ul className="nav-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </nav>
      );
    } else {
      // console.log("Users Page -- Not Logged In");
      return (
        <nav
          className="site-navigator"
          style={{ backgroundColor: "var(--gr)" }}>
          <ul className="nav-links">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      );
    }
  } else if (pathname.includes("register")) {
    return (
      <nav
        className="site-navigator"
        style={{ backgroundColor: "var(--gr)" }}>
        <ul className="nav-links">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav>
    );
  } else if (pathname.includes("home")) {
    return (
      <nav
        className="site-navigator"
        style={{ backgroundColor: "var(--gr)" }}>
        <ul className="nav-links">
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default SiteNavigator;
