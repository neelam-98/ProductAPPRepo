import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "../Style/Product.css";
import { useNavigate } from 'react-router-dom';


const clientId = "687837714043-6h9hdf23d03d0vqvot9kp3ql00ofkrdj.apps.googleusercontent.com";

function LoginGoogle() {
  
    const navigate =useNavigate();
    const [showloginButton, setShowloginButton] = useState(true);
    // const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        if(res.profileObj){
            navigate("/home");

        }
        // setShowloginButton(false);
        // setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (
        <div className="g-signin">
            { showloginButton ?
                <GoogleLogin className='google_btn'
                    clientId={clientId}
                    buttonText="Sign In Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    // isSignedIn={true}
                /> : null}

            {/* { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}
        </div>
    );
}
export default LoginGoogle;