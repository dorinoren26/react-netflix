import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav
        className="navbar navbar-expand-sm  fixed-top "
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="img-navbar"
              src="https://about.netflix.com/images/logo.png"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  <span className="nav-color">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                {user?.biz && (
                  <NavLink to="my-cards" className="nav-link">
                    <span className="nav-color">My Cards</span>
                  </NavLink>
                )}
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
              {user ? (
                <li className="nav-item sign">
                  <NavLink to="log-out" className="nav-link">
                    <span className="nav-color "> Log out</span>
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item sign">
                    <NavLink to="log-in" className="nav-link">
                      <span className="nav-color">Log In</span>
                    </NavLink>
                  </li>
                  <li className="nav-item sign">
                    <NavLink to="sign-Up" className="nav-link">
                      <span className="nav-color">Sign Up</span>
                    </NavLink>
                  </li>
                  <li className="nav-item sign">
                    <NavLink to="sign-Up-biz" className="nav-link">
                      <span className="nav-color"> Sign Up biz</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
