import { Button } from '@material-ui/core';
import React from 'react';
import '../Styles/LoginStyles.css';
// import {auth, provider} from "../firebase"; //no need for setting up tokens and all that just this import
// import { useStateValue } from '../Redux/StateProvider';
// import { actionTypes } from '../Redux/reducer';

function LoginPage() {
    //   const [state, dispatch] = useStateValue();

    //   const signIn = () => {
    //     // sign in
    //     auth.signInWithPopup(provider)
    //     .then(result => {

    //       dispatch({
    //         type:actionTypes.SET_USER,
    //         user: result.user
    //       })
    //     }).catch((error) => alert(error.message));
    //   }

    const login = () => {
        console.log('login')
    }

    const register = () => {
        console.log('register')
    }

    return (
        <div className="row login d-flex flex-column align-items-center">
            <div className="login__logo">
                <img src="" alt="" />
                <img src="" alt="" />
                <h1 className="my-5">Wurklo</h1>
            </div>
            <Button className="login__google col-9 col-md-6 col-lg-3 shadow my-2 p-2 fs-6 fw-bold bg-danger text-white" onClick={login}>
                Login/Register with Google
            </Button>
            <Button className="login__facebook col-9 col-md-6 col-lg-3 shadow my-2 p-2 fs-6 fw-bold bg-primary text-white" onClick={login}>
                Login/Register with Facebook
            </Button>
            <Button className="login__linkedin col-9 col-md-6 col-lg-3 shadow my-2 p-2 fs-6 fw-bold bg-info text-white" onClick={login}>
                Login/Register with LinkedIn
            </Button>
            <Button className="login__signin col-9 col-md-6 col-lg-3 shadow my-2 p-2 fs-6 fw-bold" onClick={login}>
                Login
            </Button>
            <Button className="login__register col-9 col-md-6 col-lg-3 shadow my-2 p-2 fs-6 fw-bold" type="submit" onClick={register}>
                Register
            </Button>
        </div>
    )
}

export default LoginPage;