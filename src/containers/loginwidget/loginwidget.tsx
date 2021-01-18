import React from "react";
// import ReactDOM from 'react-dom';
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';


const loginwidget = (props: { currentview: any; switchLoginTab: { (arg0: string): void; (arg0: string): void; }; responseGoogle: ((response: GoogleLoginResponse | GoogleLoginResponseOffline) => void) | undefined; }) => {
  return (
    <React.Fragment>
      {props.currentview ? <Login switchLoginTab={props.switchLoginTab}></Login> : <Signup switchLoginTab={props.switchLoginTab}></Signup>}
      <p>or</p>
      <GoogleLogin
        clientId="1069696218061-prlh3j71iha17f70tll1elevagb64upk.apps.googleusercontent.com"
        buttonText="Continue With Google"
        onSuccess={props.responseGoogle}
        onFailure={props.responseGoogle}
        cookiePolicy={'single_host_origin'}
    />    
    
    </React.Fragment>   
    
  );
};

export default loginwidget;
