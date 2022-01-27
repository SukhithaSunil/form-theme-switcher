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
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ mb: 0, fontWeight: 600 }}
          color="primary"
        >
          Travelguru
        </Typography>

        <ArrowCircleRightIcon color="primary" />
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default ThemeBar;
