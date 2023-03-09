import "./login.css";

import React from "react";

function ConectUS() {
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-header">
            <h1>Conect US</h1>
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              id=""
              placeholder="your name"
              className="login-form-input"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="email"
              className="login-form-input"
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder=" description "
            ></textarea>

            <input type="submit" value="send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConectUS;
