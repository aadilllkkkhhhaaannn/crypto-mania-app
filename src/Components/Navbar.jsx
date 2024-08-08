import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import React from "react";
// import {ShoppingCartIcon} from "@mui/icons-material/ShoppingCart"; 
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutuser } from "../Provider/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { CardItems } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutuser());
  };
  return (
    <AppBar>
      <Toolbar>
        {" "}
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Link to={"/"}> Crypto Mania</Link>
        </Typography>
        {!user ? (
          <>
            <Link to={"/Login"}>
              <Button variant="contained" size="small" color="secondary">
                {" "}
                Login
              </Button>
            </Link>
            <Link to={"/Register"}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                sx={{ margin: "0px 10px" }}
              >
                {" "}
                Register
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/card"}>
              <Badge
                // badgeContent={4}
                badgeContent={CardItems.length}
                sx={{ margin: "0px 20px" }}
                color="error"
              >
                <Button
                  variant="contained"
                  color="success"
                  // endIcon={<ShoppingCartIcon />}
                >
                  Cart
                </Button>
              </Badge>
            </Link>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={handleLogout}
            >
              LogOut
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
