import {
  Button,
  Card,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleCoin } from "../Provider/coin/coinSlice";
import { add } from "../Provider/Card/CardSlice";

const CoinDetails = () => {
  const { coin, isError, isLoading } = useSelector((state) => state.coins);
  const {user}=useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { id } = useParams();

  // ADD TO CARD
  const handleAdd=(coin)=>{
    dispatch(add(coin))
    console.log("hello")
  }
// 
  useEffect(() => {
    dispatch(fetchSingleCoin(id));
    if(!user){
        navigate('/Login')
    }
  }, [id,user]);
   

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" color={"error"} align="center">
          Something Went wrong....
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
      <Card sx={{ padding: "20px" }}>
        <CardMedia
          sx={{ height: 250 }}
          image={coin?.image?.large}
          title="green iguana"
        />
        <Typography variant="h4" sx={{ margin: "0px 10px" }}>
          Coin Name:${coin?.name}
        </Typography>
        <Typography variant="h5" sx={{ margin: "0px 10px" }}>
          Coin Price:${coin?.market_data?.current_price.usd}
        </Typography>
        <Typography variant="h6" sx={{ margin: "0px 10px" }}>
          Coin Description:${coin?.description?.en}
        </Typography>

        <Button variant="contained" color="success" onClick={()=>handleAdd(coin)} >
          Add to card
        </Button>
        {/* <Button variant="outlined" color="success" sx={{ margin: "0px 20px" }}>
          Visit offical web site
        </Button> */}
      </Card>
    </Container>
  );
};

export default CoinDetails;
