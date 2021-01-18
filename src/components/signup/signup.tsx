// import React from 'react';

const signup = (props: { switchLoginTab: (arg0: string) => void; }) => {
    return (
        <div className="container">
          <h1>Sign Up</h1>
    
          <div className="row">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="First Name"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput3" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="formGroupExampleInput3"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput4" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput4"
                placeholder="Password"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput5" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="formGroupExampleInput5"
                placeholder="Confirm Password"
              ></input>
            </div>
            <div className="mb-3 ">
             
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>          
              <button type="button" className="btn btn-primary" onClick={()=>{ props.switchLoginTab('signin')}}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      );
};

export default signup;