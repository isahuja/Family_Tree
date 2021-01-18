//import React from 'react';
// import Bootstrap from "bootstrap";

const login = (props: { switchLoginTab: (arg0: string) => void; }) => {
  return (
    <div className="container">
      <h1>Sign In</h1>

      <div className="row">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Email"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Password"
          ></input>
        </div>
        <div className="mb-3 ">
         
          <button type="button" className="btn btn-primary">
            Sign In
          </button>          
          <button type="button" className="btn btn-primary" onClick={()=>{ props.switchLoginTab('signup')}}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
