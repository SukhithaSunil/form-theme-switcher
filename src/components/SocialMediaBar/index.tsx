import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  AppleButton,
  FacebookButton,
  GoogleButton,
  ORWrapper,
  ButtonWrapper,
} from "./style";

const SocialMediaBar = () => {
  return (
    <>
      <ORWrapper>
        <Divider>
          <Typography color="#A99E82"> {"OR"}</Typography>
        </Divider>
      </ORWrapper>
      <ButtonWrapper>
        <GoogleButton>
          <span>Sign in with Google</span>
        </GoogleButton>
        <FacebookButton />
        <AppleButton />
      </ButtonWrapper>
    </>
  );
};

export default SocialMediaBar;
