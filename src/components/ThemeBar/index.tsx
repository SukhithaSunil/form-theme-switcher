import React from "react";
import Typography from "@mui/material/Typography";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ThemeSwitch from "./ThemeSwitch";
import { Wrapper, TextWrapper } from "./style";

const ThemeBar = () => {
  return (
    <Wrapper>
      <TextWrapper>
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
      </TextWrapper>
      <ThemeSwitch />
    </Wrapper>
  );
};

export default ThemeBar;
