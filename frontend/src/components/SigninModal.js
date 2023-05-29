import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../actions/userActions";

const SigninModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signinHandler = async (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">התחברות</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5 modal-form">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input
                  value={username}
                  type="text"
                  id="name-s"
                  name="name-s"
                  className="form-control validate"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label data-error="wrong" data-success="right" htmlFor="name-s">
                  שם משתמש
                </label>
              </div>

              <div className="md-form mb-4 modal-form">
                <i className="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  id="password-s"
                  name="password-s"
                  className="form-control validate"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="password-s"
                >
                  סיסמה
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                data-toggle="modal"
                data-target="#modalLoginForm"
                onClick={signinHandler}
              >
                התחבר
              </button>
            </div>
            <div className="modal-link-container">
              <a
                className="modal-link"
                href="#some"
                data-toggle="modal"
                data-target="#modalRegisterForm"
                data-dismiss="modal"
              >
                הירשם
              </a>
              &nbsp;
              <div>?אין לך חשבון</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
