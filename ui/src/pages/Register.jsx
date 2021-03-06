import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erroring, setErroring] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (password === confirmPassword) {
      axios.post("/api/register", {
        username: username,
        email: email,
        password: password,
      });
      navigate("/login");
    }
  }

  useEffect(() => {
    fetch("/getUsername", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => (data.isLoggedIn ? navigate("/login") : null));
  }, []);

  return (
    <Box sx={{ backgroundColor: "#AFAFAF", height: "100vh" }}>
      <Navbar />
      <Typography color="white" mt={6} variant="h4" textAlign="center">
        Register Now
      </Typography>
      <Box
        mt={4}
        lg={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid lg={3}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component="form"
            onSubmit={handleRegister}
          >
            <FormControl>
              <TextField
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                error={password !== confirmPassword}
                helperText={
                  password !== confirmPassword
                    ? "Passwords are not matching"
                    : ""
                }
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                label="Re-enter Password"
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </FormControl>
            <Stack m={4}>
              <Button type="submit" variant="contained" color="inherit">
                Register
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Box>
      <Box class="text-muted">
        <Typography color="white" textAlign="center">
          Do you have an account? <Link to="/login">Login</Link>
        </Typography>
        <Typography mt={6} textAlign="center">
          Trading Cards Co. &copy;
        </Typography>
      </Box>
    </Box>
  );
}
