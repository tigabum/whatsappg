import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from '../../firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import './LogIn.css';
import {actionTypes} from '../Reducer/Reducer';

function LogIn() {
    const [{}, dispatch]=  useStateValue();

    const SignIn = ()=> {
        auth.signInWithPopup(provider).then(
            (result)=>{
                dispatch({
                    type:actionTypes.SET_USER,
                user:result.user, 
            });

            }  
        ).catch(error=>alert(error.message))

    }
    return (
        <div className="Login" >
          <div className="login_container">
              <img src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png" alt=""/>
                <h1>Sign in to Whatsapp</h1>
              <Button onClick={SignIn} > Sign in with google </Button>
          </div>
        </div>
    )
}

export default LogIn
