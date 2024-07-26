import { useNavigate } from "react-router-dom";
import "../styles/Base.css";

function SeeUsers() {
  const navigate = useNavigate();
  navigate("/users");
}
function GoToLogin() {
  const navigate = useNavigate();
  useNavigate("/login");
}

function GoToRegister() {
  const navigate = useNavigate();
  useNavigate("/register");
}

function Base() {
  return (
    <div className="base">
      <div
        id="base-intro"
        className="center">
        <h1>Quote Machine</h1>
      </div>
      <div className="base-container">
        {/* <h3>
          Here you can view uploaded Quotes on everyone's profiles. You can also
          create a profile of your own then upload and favorite profiles of your
          own
        </h3> */}
        <div className="base-routing">
          {/* <button onClick={SeeUsers}>Profiles</button>
                <button></button>
                <button></button> */}
          <nav className="navbar">
            <a
              href="/users/"
              className="navigation">
              Profiles
            </a>
            <a
              href="/login/"
              className="navigation">
              Login
            </a>
            <a
              href="/register/"
              className="navigation">
              Register
            </a>
          </nav>
        </div>
      </div>
      <footer className="center">
        <p>Thanks for Visiting!</p>
        <p>
          -Deshon <span className="italic">(skeno27)</span>
        </p>
      </footer>
    </div>
  );
}

export default Base;
