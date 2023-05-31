/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signot } from "../actions/userActions";
import { RENTAL_LIST_RESET } from "../constants/rentalConstants";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { onQuery, onDialog } = props;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(signot());
    dispatch({ type: RENTAL_LIST_RESET });
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="..חיפוש"
          aria-label="Search"
          onChange={(e) => onQuery(e.target.value)}
        />
      </form>

      <ul className="navbar-nav mr-auto">
        {userInfo ? (
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userInfo.username}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/rentals">
                השכרות שלי
              </Link>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={logoutHandler}>
                התנתק
              </a>
            </div>
          </li>
        ) : (
          <button className="btn" onClick={onDialog}>
            התחבר
          </button>
        )}

        {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                השכרות שלי
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                התנתק
              </a>
            </div>
          </li> */}
      </ul>

      <Link className="navbar-brand" to="/">
        Movie.com
      </Link>
    </nav>
  );
};

export default Navbar;
