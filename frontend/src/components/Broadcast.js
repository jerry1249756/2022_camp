import React, { useContext, useState, useEffect } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { socket } from "../websocket";
import RoleContext from "./useRole";

const Broadcast = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({});
  const { setPhase } = useContext(RoleContext);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  useEffect(() => {
    socket.on("broadcast", (...args) => {
      setOpen(true);
      setMessage(...args);
      console.log("broadcast", ...args);
    });

    socket.on("phase", (phase) => {
      setOpen(true);
      setMessage({
        title: `Phase Changed to ${phase}`,
        description: "",
      });
      setPhase(phase);
      console.log("phase", phase);
    });

    return () => {
      socket.off("broadcast");
    };
  }, []);

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      sx={{ marginTop: 15 }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        sx={{ width: "100%" }}
        severity="info"
        elevation={6}
        variant="filled"
      >
        <AlertTitle>{message.title}</AlertTitle>
        {message.description}
      </Alert>
    </Snackbar>
  );
};

export default Broadcast;