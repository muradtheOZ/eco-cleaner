import React, { useContext } from "react";
import { Link,useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../resources/images/logo.png";
import { handleSignOut } from "../Login/LoginManager";
import "./Navbar.css";
import {
  scroller,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

const Navbar = () => {
  const history = useHistory();
  const { name } = useParams();
  const { value, value1 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const handleLogOut = () => {
    sessionStorage.clear();
    setLoggedInUser({});
    handleSignOut();
    history.push("/");
  };
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="#">
          <img style={{ height: "100px" }} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a
                onClick={() =>
                  scroller.scrollTo("home", {
                    smooth: true,
                    offset: -70,
                    duration: 300,
                    spy: true,
                  })
                }
                className="nav-link mr-4"
                href="/home"
              >
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
            <a
                onClick={() =>
                  scroller.scrollTo("services", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                    spy: true,
                  })
                }
                class="nav-link mr-4"
              >
                Services
              </a>
            </li>

            <li class="nav-item">
              <a
                onClick={() =>
                  scroller.scrollTo("booking", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                    spy: true,
                  })
                }
                class="nav-link mr-4"
              >
                Custom Booking
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link mr-4" to="/order/:`${name}`">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <a
                onClick={() =>
                  scroller.scrollTo("contact", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                    spy: true,
                  })
                }
                class="nav-link mr-4"
              >
                Contact
              </a>
            </li>

            {loggedInUser.name ? (
              <li>
                <button onClick={handleLogOut} className="btn main-btn">
                  log Out
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="btn main-btn">log In</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
