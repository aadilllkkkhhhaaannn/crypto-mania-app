import React, { useEffect } from "react";
import { Typography, Container, Grid, LinearProgress } from "@mui/material";
import CoinCard from "../Components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingCoins } from "../Provider/coin/coinSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { coins, isLoading, isError } = useSelector(
    (state) => state.coins
  );
  const {user} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if (!user) {
       navigate("/Login");
     } 
        dispatch(fetchTrendingCoins());
    }, [user]);

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" color={"error"} align="center">
          Some thing Went rong....
        </Typography>
      </Container>
    );
  }
  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h4" align="center">
        TOP TRENDING COINS
      </Typography>
      <Typography variant="h5" align="center">
        Welcome, {user?.name}! 😎
      </Typography>
      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
        {coins.map((coin) => (
          <CoinCard key={coin.item.coin_id} coin={coin} />
        ))}
      </Grid>
    </Container>
  );
};
export default Home;
