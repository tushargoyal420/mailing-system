import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column w-50 p-2 bd-highlight">
        <p className="h1 pb-4">Sign up</p>
        <form className="signupform">
        <div className="form-group mb-2">
            <label for="name">Enter your Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Enter your name"
            />
        </div>
          <div className="form-group mb-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              {" "}
              We'll never share your email with anyone else.{" "}
            </small>
          </div>
          <div className="form-group mb-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="passwordHelp" className="form-text text-muted">
              {" "}
              Create a strong password.{" "}
            </small>
          </div>
          <button type="submit" className="btn btn-primary ">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
