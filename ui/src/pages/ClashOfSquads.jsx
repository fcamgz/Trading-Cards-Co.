import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import BackgroundImage from "../images/page-backgrounds/stadium-image.jpg";
import HaalandBackground from "../images/haaland-background.png";
import RonaldoBackground from "../images/ronaldo-background.png";
import Footer from "../components/Footer";

export default function ClashOfSquads() {
  const [cardData, setCardData] = useState([{}]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [yourData, setYourData] = useState([]);
  const [opponentData, setOpponentData] = useState({
    striker: "",
    midfield1: "",
    midfield2: "",
    midfield3: "",
    midfield4: "",
    midfield5: "",
    centerBack1: "",
    centerBack2: "",
    centerBack3: "",
    centerBack4: "",
    goalKeeper: "",
  });

  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  useEffect(() => {
    // get cards
    axios
      .get("http://localhost:5000/api/cards/")
      .then((res) => res.data)
      .then((res) => {
        setCardData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
    // get user
    axios
      .get("/api/getUsername", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        console.log(data.isLoggedIn);
        if (data.isLoggedIn) {
          setUser(data.user);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      <Navbar user={user} isLoggedIn={isLoggedIn} />
      <Box
        container
        sx={{ position: "relative", margin: 0, height: "100%", width: "100%" }}
      >
        <img
          src={BackgroundImage}
          style={{
            opacity: "0.95",
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "auto",
            zIndex: 0,
            minHeight: "100%",
            minWidth: "1024px",
          }}
          alt="background"
        />
        <Box sx={{ position: "relative" }} mb={2}>
          <Typography
            gutterBottom
            variant="h3"
            mt={4}
            color="white"
            textAlign="center"
          >
            Clash of Squads
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="center"
            gutterBottom
          >
            Build your squad and challenge to other players!
          </Typography>
          <Divider sx={{ color: "white", margin: "40px" }} />

          <Box
            sx={{
              border: "3px solid yellow",
              display: "flex",
              justifyContent: "space-between",
              height: "100vh",
            }}
          >
            <Box sx={{ border: "3px solid red", flex: "1" }}>
              <Box mt={2}>
                <Typography textAlign="center" variant="h5" color="white">
                  Your Squad
                </Typography>
              </Box>
            </Box>
            <Box sx={{ border: "3px solid red", flex: "0.4" }}>
              <Box mt={2}>
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Your Stats
                </Typography>
                <Divider sx={{ color: "white", marginBottom: "12px" }} />
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  12W - 10L
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Opponent's Stats
                </Typography>
                <Divider sx={{ color: "white", marginBottom: "12px" }} />
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  22W - 2L
                </Typography>
              </Box>
              <Box mt={6}>
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Your Squad Rating
                </Typography>
                <Divider sx={{ color: "white", marginBottom: "12px" }} />
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  99
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Opponent's Squad Rating
                </Typography>
                <Divider sx={{ color: "white", marginBottom: "12px" }} />
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  99
                </Typography>
              </Box>
              <Box mt={6}>
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Your Best Player
                </Typography>
                <Divider sx={{ color: "white", marginBottom: "12px" }} />
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Cristiano Ronaldo
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Opponent's Best Player
                </Typography>
                <Divider sx={{ color: "white", marginBottom: "12px" }} />
                <Typography
                  gutterBottom
                  textAlign="center"
                  variant="h5"
                  color="white"
                >
                  Lionel Messi
                </Typography>
              </Box>
              <Box mt={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Button color="success" variant="contained">
                  Challenge the Opponent
                </Button>
              </Box>
            </Box>
            <Box sx={{ border: "3px solid blue", flex: "1" }}>
              <Box mt={2}>
                <Typography textAlign="center" variant="h5" color="white">
                  Your Opponent's Squad
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    alignItems: "space-between",
                  }}
                >
                  <Box sx={{ flex: "1 160px" }}>
                    <Box
                      mt={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <FormControl sx={{ m: 1, width: "20%" }}>
                        <InputLabel>Striker</InputLabel>
                        <Select
                          value={opponentData.striker}
                          onChange={(e) => {
                            setOpponentData({
                              ...opponentData,
                              striker: e.target.value,
                            });
                          }}
                          sx={{ backgroundColor: "white" }}
                          input={<OutlinedInput label="Striker" />}
                          fullWidth
                          defaultValue={data[0]}
                        >
                          {data?.map((card) => (
                            <MenuItem key={card._id} value={card.name}>
                              <ListItemText primary={card.name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      flex: "1 160px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Midfield 1</InputLabel>
                      <Select
                        value={opponentData.midfield1}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            midfield1: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Midfield1" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Midfield 2</InputLabel>
                      <Select
                        value={opponentData.midfield2}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            midfield2: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Midfield2" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Midfield 3</InputLabel>
                      <Select
                        value={opponentData.midfield3}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            midfield3: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Midfield3" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      flex: "1 160px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Midfield 4</InputLabel>
                      <Select
                        value={opponentData.midfield4}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            midfield4: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Midfield4" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Midfield 5</InputLabel>
                      <Select
                        value={opponentData.midfield5}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            midfield5: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Midfield5" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      flex: "1 160px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Centerback 1</InputLabel>
                      <Select
                        value={opponentData.centerBack1}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            centerBack1: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Centerback1" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Centerback 2</InputLabel>
                      <Select
                        value={opponentData.centerBack2}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            centerBack2: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Centerback2" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Centerback 3</InputLabel>
                      <Select
                        value={opponentData.centerBack3}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            centerBack3: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Centerback3" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Centerback 4</InputLabel>
                      <Select
                        value={opponentData.centerBack4}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            centerBack4: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Centerback4" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      flex: "1 160px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl sx={{ m: 1, width: "20%" }}>
                      <InputLabel>Goalkeeper</InputLabel>
                      <Select
                        value={opponentData.goalKeeper}
                        onChange={(e) => {
                          setOpponentData({
                            ...opponentData,
                            goalKeeper: e.target.value,
                          });
                        }}
                        sx={{ backgroundColor: "white" }}
                        input={<OutlinedInput label="Goalkeeper" />}
                        fullWidth
                        defaultValue={data[0]}
                      >
                        {data?.map((card) => (
                          <MenuItem key={card._id} value={card.name}>
                            <ListItemText primary={card.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
