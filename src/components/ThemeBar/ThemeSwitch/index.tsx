import React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "./styles";

const ThemeSwitch = () => {
  return (
    <div>
      <ThemeSwitcher />
    </div>
  );
};

export default ThemeSwitch;
