import {
  Card,
  Container,
  TextField,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Provider/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if(isError && message){
      toast.error(message);
    }
  },[user, isError,message]);


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
          Register Here
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Enter name"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            fullWidth
            required
          ></TextField>
          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            fullWidth
            required
          ></TextField>
          <TextField
            variant="outlined"
            label=" password"
            type="text"
            name="password"
            onChange={handleChange}
            value={password}
            fullWidth
            required
          ></TextField>
          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label="confirm Password"
            type="text"
            name="password2"
            onChange={handleChange}
            value={password2}
            fullWidth
            required
          ></TextField>
          <Button
            variant="contained"
            color={"success"}
            fullWidth
            required
            type="submit"
          >
            Register Here
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
