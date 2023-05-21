import React, { useState } from "react";
import { auth } from "../firebase_setup/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginOrSignup from "../components/UserLog/LoginOrSignup";


export default function SignUp() {
  

    let [user, setUser] = useState();

    function handleSignUp(user, form) {
        setUser(user);
          
        //some firebase logic here to sign up new user:
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((cred) => {
                console.log('This is our new user: ');
                console.log(cred.user);
            }).catch((error) => {
                console.log(error)
            });
    };

    
    

    return (
        <>
            <LoginOrSignup newUser handleSignUp={handleSignUp} />
        </>
  );
}