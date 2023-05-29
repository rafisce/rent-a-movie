import React from "react";

const RegisterModal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">רישום</h4>
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
                  type="text"
                  name="name-r"
                  id="name-r"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" htmlFor="name-r">
                  שם משתמש
                </label>
              </div>

              <div className="md-form mb-5 modal-form">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" htmlFor="email">
                  אימייל
                </label>
              </div>

              <div className="md-form mb-4 modal-form">
                <i className="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  name="password-r"
                  id="password-r"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="password-r"
                >
                  סיסמה
                </label>
              </div>
              <div className="md-form mb-4 modal-form">
                <i className="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  name="password-rc"
                  id="password-rc"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="password-rc"
                >
                  וידוא סיסמה
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                data-toggle="modal"
                data-target="#modalRegisterForm"
              >
                הירשם
              </button>
            </div>
            <div className="modal-link-container">
              <a
                className="modal-link"
                href="#some"
                data-toggle="modal"
                data-target="#modalLoginForm"
                data-dismiss="modal"
              >
                התחבר
              </a>
              &nbsp;
              <div>?כבר יש לך חשבון</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
