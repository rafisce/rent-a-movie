import React, { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import { useNavigate } from "react-router-dom";
import { signin } from "../actions/userActions";

const SigninForm = (props) => {
  const { onSuccess } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  useEffect(() => {
    if (userInfo) {
      onSuccess();
      navigate("/");
    }
  }, [navigate, onSuccess, userInfo]);

  const signinHandler = (e) => {
    document.querySelector(".validate2").checkValidity();
    document.querySelector(".validate2").reportValidity();
    e.preventDefault();
    dispatch(signin(username, password));
  };
  return (
    <div className="form">
      <form className="validate2">
        <div className="field">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <MessageBox variant="none">nothing</MessageBox>
          )}
          <i className="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="הכנס שם"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="name">שם משתמש</label>
        </div>
        <div className=" field">
          <i className="fas fa-lock prefix grey-text"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="הכנס סיסמה"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">סיסמה</label>
        </div>
        <button className="btn" type="submit" onClick={signinHandler}>
          התחבר
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
