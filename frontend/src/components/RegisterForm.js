import React, { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ onSuccess }) => {
  const [notmatch, setNotmatch] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const registerHandler = (e) => {
    document.querySelector(".validate").checkValidity();
    document.querySelector(".validate").reportValidity();
    e.preventDefault();

    if (password === confirm) {
      setNotmatch(false);
      dispatch(register(username, email, password));
      onSuccess();
    } else if (
      username !== "" &&
      validateEmail(email) &&
      password !== "" &&
      confirm !== ""
    ) {
      setNotmatch(true);
    }

    return false;
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div className="form">
      <form className="validate">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : notmatch ? (
          <MessageBox variant="danger">סיסמאות לא תואמות</MessageBox>
        ) : (
          <MessageBox variant="none">nothing</MessageBox>
        )}
        <div className="field">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input
            name="name"
            id="name_r"
            type="text"
            placeholder="הכנס שם משתמש"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="name_r">שם משתמש</label>
        </div>
        <div className="field">
          <i className="fas fa-envelope prefix grey-text"></i>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="הכנס אימייל"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">אימייל</label>
        </div>
        <div className="field">
          <i className="fas fa-lock prefix grey-text"></i>
          <input
            name="password"
            id="password_r"
            type="password"
            placeholder="הכנס סיסמה"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password_r">סיסמה</label>
        </div>
        <div className="field">
          <i className="fas fa-lock prefix grey-text"></i>
          <input
            name="password_c"
            id="password_c"
            type="password"
            placeholder="ודא סיסמה"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <label htmlFor="password_c">סיסמה</label>
        </div>
        <button className="btn" onClick={registerHandler}>
          הירשם
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
