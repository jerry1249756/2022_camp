import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Grid, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "./NavBar/NavBar";
import RoleContext from "./useRole";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { role, setRole, messages, setMessages } = useContext(RoleContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleChange = () => {
    setOpen(!open);
  };

  const handleLogin = () => {
    console.log(role);
    navigate("login");
  };

  const handleLogout = () => {
    console.log(role);
    setRole("");
    navigate("/"); //set to home later
  };

  /*useEffect(() => {
    let task = setInterval(() => {
      if (messages.length > 0) {
        const temp = messages.slice();
        temp.forEach((item) => {
          if (item.duration >= 0) item.duration -= 1;
        });
        const temp2 = temp.filter((item) => item.duration > 0);
        setMessages(temp2);
      }
    }, 1000);

    return () => {
      clearInterval(task);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);*/

  return (
    <Grid container>
      <AppBar position="absolute">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={handleChange}>
            <MenuIcon />
            <NavBar open={open} />
          </IconButton>
          <Button
            sx={{ display: pathname === "/login" && "none" }}
            color="inherit"
            onClick={role === "" ? handleLogin : handleLogout}
          >
            {role === "" ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Grid>
  );
};

export default Header;
