import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { AppleButton, FacebookButton, GoogleButton } from "./style";
const SocialMediaBar = () => {
  return (
    <>
      <div style={{ width: "25%", margin: "auto" }}>
        <Divider>
          <Typography color="#A99E82"> {"OR"}</Typography>
        </Divider>
      </div>

      <div style={{ display: "flex" }}>
        <GoogleButton>
          <span>Sign in with Google</span>
        </GoogleButton>
        <FacebookButton />
        <AppleButton />
      </div>
    </>
  );
};

export default SocialMediaBar;
