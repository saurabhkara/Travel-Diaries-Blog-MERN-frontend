import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { sendAuthRequest } from "../apiHelper";
import { useDispatch } from "react-redux";
import { authActions } from '../store';
import {useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleForm(e) {
    console.log("handle Form");
    e.preventDefault();
    if(!isSignup){
      sendAuthRequest(true,userData).then((res)=>{
        console.log("sign up",res.user._id)
        localStorage.setItem("userId",res.user._id);
        dispatch(authActions.login());
        navigate('/diaries');
      })
      
    }else{
      sendAuthRequest(false,userData).then((res)=>{
        localStorage.setItem("userId",res._id);
        dispatch(authActions.login());
        navigate('/diaries');
      })
    }
  }

  function saveDetail(e) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Box
      width={"50%"}
      sx={{ mt: 1 }}
      margin="auto"
      borderRadius={10}
      boxShadow={"5px 5px 5px #ccc"}
    >
      <form onSubmit={handleForm}>
        <Box
          display={"flex"}
          flexDirection="column"
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography variant="h4" textAlign="center">
            {isSignup ? "Login" :"Signup" }
          </Typography>
          {!isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                margin="normal"
                name="name"
                value={userData.name}
                required
                onChange={saveDetail}
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            margin="normal"
            name="email"
            value={userData.email}
            required
            type="email"
            onChange={saveDetail}
          />
          <FormLabel>Password</FormLabel>
          <TextField
            margin="normal"
            name="password"
            value={userData.password}
            required
            type="password"
            onChange={saveDetail}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, borderRadius: 10 }}
          >
            {!isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, borderRadius: 10 }}
            onClick={(e) => setIsSignup(!isSignup)}
          >
            Change to {isSignup ?  "Signup": "Login"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
