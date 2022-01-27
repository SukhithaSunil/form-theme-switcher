import React from "react";
import {
  AppleLoginButton,
  createButton,
  FacebookLoginButton,
  GoogleLoginButton,
  createSvgIcon,
} from "react-social-login-buttons";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
const SocialMediaBar = () => {
  const facebbookConfig = {
    iconFormat: (name: string) => `fa fa-${name}`,
    icon: createSvgIcon(FacebookIcon),
    style: { background: "#ffdede", width: "50px", color: "#3b5998" },
  };
  /** My Facebook login button. */
  const appleConfig = {
    iconFormat: (name: string) => `fa fa-${name}`,
    icon: createSvgIcon(AppleIcon),
    style: { background: "#ffdede", width: "50px", color: "#000000" },
  };

  const MyFacebookButton = createButton(facebbookConfig);
  const MyAppleButton = createButton(appleConfig);

  return (
    <div style={{ display: "flex" }}>
      <GoogleLoginButton
        onClick={() => alert("Hello")}
        style={{ background: "#ffdede" }}
      >
        <span>Sign in with Google</span>
      </GoogleLoginButton>
      <MyFacebookButton />
      <MyAppleButton />
    </div>
  );
};

export default SocialMediaBar;
