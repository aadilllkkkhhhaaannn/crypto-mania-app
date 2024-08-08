import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../Provider/Card/CardSlice";

const CardItem = ({ carditem }) => {
  const { name, price } = carditem;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Card sx={{ margin: "20px 0px" }}>
      <CardMedia sx={{ height: 100 }} />
      <CardContent>
        <CardMedia
          sx={{ height: 150 }}
          image={carditem?.image?.large}
          title="green iguana"
        />
        <Typography gutterBottom variant="h4" color="div">
          {name}
        </Typography>
        <Typography variant="h5" color="primary">
          ${carditem?.market_data?.current_price.usd}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="error"
          onClick={() => handleRemove(carditem.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
