import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";



export default function LoginOrSignup({ newUser , handleSignUp } ) {

  const handleSubmit = (event) => {
    event.preventDefault();         //default action would be to refresh the page!
    const data = new FormData(event.currentTarget);      //this works, but maybe better to use useForm hook instead?
  console.log({
      email: data.get("email"),
      password: data.get("password"),
      //remember: data.get("remember")
    });
  handleSignUp({email: data.get("email"),
    password: data.get("password")});
  };
  
  //send input data to parent component (use callback function) to use there with firebase auth

  return (
    <Container component="main" maxWidth="xs" sx={{ p: 10 }}>
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
                  {newUser? 'Sign Up' : 'Log in'}
        </Typography>
        <Box component="form" onSubmit={ handleSubmit } noValidate sx={{ mt: 1 }}>     {/* noValidate???*/} {/* REQUIRED makes it look required* but doesn't do anything because it only works with default form actions => make own validation function for email & pw or use form hooks,
            https://www.freecodecamp.org/news/how-to-validate-forms-in-react/  */}
          <TextField
            margin="normal"
            required        
            fullWidth       
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required        
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          {/* maybe later:

          <FormControlLabel
            control={<Checkbox name="remember" value="remember" color="primary" />}
            label="Remember me"
          />

          */}
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {newUser? 'Sign Up' : 'Log in'}
          </Button>
          {!newUser &&
          <Grid container>           {/* these links are only for existing users, not necessary on sign up page! */}
            <Grid item xs>
              <NavLink to="/" variant="body2">     {/* add link here => to where? create component to send user link/new pw to email address??*/}
                Forgot password?
              </NavLink>
            </Grid>
             <Grid item>
                <NavLink to="/signup" variant="body2">
                    Don't have an account? Sign up.
                </NavLink>
            </Grid>
          </Grid>}
        </Box>
      </Box>
    </Container>
  );
}