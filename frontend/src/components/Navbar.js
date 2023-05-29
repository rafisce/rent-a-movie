/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signot } from "../actions/userActions";

const Navbar = (props) => {
  const { onQuery } = props;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const logoutHandler = async (e) => {
    e.preventDefault();
    dispatch(signot());
  };
  useEffect(() => {}, [userInfo]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="navb"
      dir="rtl"
    >
      <div className="dropdown show">
        {userInfo ? (
          <a
            className="btn  dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {userInfo.username}
          </a>
        ) : (
          <a
            className="dropdown-item btn btn-default btn-rounded mb-4"
            href="#"
            data-toggle="modal"
            data-target="#modalLoginForm"
          >
            התחבר
          </a>
        )}

        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          dir="ltr"
        >
          {userInfo ? (
            <div>
              <a class="dropdown-item" href="#">
                השכרות שלי
              </a>
              <a class="dropdown-item" href="#" onClick={logoutHandler}>
                התנתק
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>

        <input
          placeholder="חיפוש.."
          onChange={(e) => onQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
