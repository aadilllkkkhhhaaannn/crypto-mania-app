import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../Components/CardItem";

const CardPage = () => {
  const { CardItems } = useSelector((state) => state.card);

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h5">Your Cart</Typography>

      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          {CardItems?.map((item) => (
            <CardItem key={item.id} carditem={item} />
          ))}
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h3">Total : ${}</Typography>
              <CardActions>
                <Button variant="contained">Check Out</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardPage;
