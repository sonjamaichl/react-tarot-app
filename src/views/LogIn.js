import React from "react";
import LogInOrSignUp from "../components/UserLog/LogInOrSigUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../firebase_setup/AuthContext";
import { auth } from "../firebase_setup/firebase";


export default function LogIn() {

   const {user} = useContext(AuthContext);


  const handleLogIn = (user, form) => {
    
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
      console.log('sucessfully logged in: ' + user.email);
      }).catch((error) => {
      console.log(error)    //better: show error message to user to let them know what went wrong: wrong password, email?
    })
    }

  return (
       <>
      <LogInOrSignUp newUser={false} handleUserLog={handleLogIn} />
        </>
  );
}