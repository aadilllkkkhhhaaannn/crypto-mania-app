import React, {  useEffect, useState } from "react";
import { Card, Container, TextField, Typography, Button, LinearProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Provider/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
const {user,isLoading,isSuccess,message,isError}=useSelector((state)=>state.auth);
const dispatch=useDispatch();
const navigate=useNavigate();


  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const {  email ,password} = formData;
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(loginUser(formData))
console.log(user);

  };

  useEffect(()=>{
   if(user && isSuccess){
     navigate("/");
   }
   if(isError){
    toast.error(message);
   }
  },[user,isSuccess,message])
 
  
  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography sx={{ margin: "80px 0px" }} variant="h4" align="center">
          Login Here
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Enter email"
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            fullWidth
            required
          ></TextField>

          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label=" password"
            type="text"
            name="password"
            onChange={handleChange}
            value={password}
            fullWidth
            required
          ></TextField>

          <Button variant="contained" type="submit" color={"success"} fullWidth required>
            Login Here
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
