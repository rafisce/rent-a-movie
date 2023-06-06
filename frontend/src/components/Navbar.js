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
    handleManagerMenu();
  };

  const handleUserMenu = () => {
    if (
      userInfo &&
      userInfo.is_superuser &&
      document.querySelector(".manager").classList.contains("active")
    
    ) {
      document.querySelector(".manager");
      document.querySelector(".manager").classList.toggle("active");
    }
    document.querySelector(".user").classList.toggle("active");
  };

  const handleManagerMenu = () => {
    if (document.querySelector(".user").classList.contains("active")) {
      document.querySelector(".user").classList.toggle("active");
    }
    document.querySelector(".manager").classList.toggle("active");
  };
  window.addEventListener(
    "resize",
    function (event) {
      if (this.window.innerWidth > 768) {
        document.querySelector(".manager").classList.remove("active");
        document.querySelector(".user").classList.remove("active");
      }
    },
    true
  );

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const toggle = () => {
    const menu = document.querySelector(".nb-menu");
    const nav = document.querySelector(".nb");
    nav.classList.toggle("active");
    menu.classList.toggle("active");
  };
  return (
    <nav className="nb">
      <Link to="/" className="nb-brand">
        Movie.com
      </Link>
      <div className="nb-menu">
        <ul className="nb-links">
          {userInfo ? (
            <li>
              <a href="#" className="dropdown-toggle" onClick={handleUserMenu}>
                {userInfo.username}
              </a>

              <div className="user-menu">
                <ul className="user">
                  <li>
                    <Link onClick={handleUserMenu} to="/rentals">
                      השכרות שלי
                    </Link>
                  </li>
                  <li>
                    <Link onClick={logoutHandler}>התנתק</Link>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <li>
              <Link className="nb-dropdown" onClick={onDialog}>
                התחבר
              </Link>
            </li>
          )}
          {userInfo && userInfo.is_superuser ? (
            <li>
              <Link className="dropdown-toggle" onClick={handleManagerMenu}>
                מנהל
              </Link>
              <div className="manager-menu">
                <ul className="manager">
                  <li>
                    <Link onClick={handleManagerMenu} to="/users">
                      משתמשים
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleManagerMenu} to="/movies">
                      סרטים
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          ) : null}
        </ul>
        <input
          className="nb-search"
          placeholder="חיפוש.."
          onChange={(e) => onQuery(e.target.value)}
        />
      </div>

      <div className="hamburger" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
