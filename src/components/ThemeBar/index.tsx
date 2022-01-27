import React from "react";
import Typography from "@mui/material/Typography";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ThemeSwitch from "./ThemeSwitch";

const ThemeBar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Travel Guru
      </Typography>
      <ArrowCircleRightIcon />
      <ThemeSwitch />
    </div>
  );
};

export default ThemeBar;
