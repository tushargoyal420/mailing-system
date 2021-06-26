import React from "react";

function Signin() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column w-50 p-2 bd-highlight">
        <p className="h1 pb-4">Sign In</p>
        <form className="signupform">
          <div className="form-group mb-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
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
export default Signin;
