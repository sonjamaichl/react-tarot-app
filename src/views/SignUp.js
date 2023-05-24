import React, { useState, useContext } from "react";
import { auth } from "../firebase_setup/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import LogInOrSignUp from "../components/UserLog/LogInOrSigUp";
import { AuthContext } from "../firebase_setup/AuthContext";


export default function SignUp() {
  

    const {user} = useContext(AuthContext);

    function handleSignUp(user, form) {
          
        //some firebase logic here to sign up new user:
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((cred) => {
                //console.log('This is our new user: ');
                //console.log(cred.user);
            }).catch((error) => {
                console.log(error)
            });
        console.log('firebase auth check:');
        console.log(user);
    };

    
    

    return (
        <>
            <LogInOrSignUp newUser handleUserLog={handleSignUp} />
        </>
  );
}