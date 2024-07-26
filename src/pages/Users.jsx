import { useEffect, useState } from "react";
import api from "../api";
import Profile from "../components/Profile";
import "../styles/Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getProfiles();
    getQuotes();
  }, []);

  const getProfiles = () => {
    // fetch all users from the backend
    api
      .get("/users/")
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
  const getQuotes = () => {
    api
      .get("/users/quotes/")
      .then((res) => {
        console.log(res);
        res.data;
      })
      .then((data) => {
        // look at the quotes
        console.log("Quote Data?:", data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="users-container">
      {/* <h1>Quote Machine</h1> */}
      <h1
        className="center"
        style={{ marginTop: "50px" }}>
        User Profiles
      </h1>
      {users.map((user) => (
        <Profile
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default Users;
