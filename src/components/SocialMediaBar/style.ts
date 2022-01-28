import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";
import {
  createButton,
  createSvgIcon,
  GoogleLoginButton,
} from "react-social-login-buttons";

export const GoogleButton = styled(GoogleLoginButton)(({ theme }) => ({
  fontSize: "16px!important",
  background: `${theme.palette.secondary.main}!important`,
  borderRadius: "6px!important",
  boxShadow: "none!important",
}));
const facebbookConfig = {
  iconFormat: (name: string) => `fa fa-${name}`,
  icon: createSvgIcon(FacebookIcon),
  style: { width: "65px", color: "#3b5998" },
};
const appleConfig = {
  iconFormat: (name: string) => `fa fa-${name}`,
  icon: createSvgIcon(AppleIcon),
  style: { width: "65px", color: "#000000" },
};

const MyFacebookButton = createButton(facebbookConfig);
const MyAppleButton = createButton(appleConfig);

export const FacebookButton = styled(MyFacebookButton)(({ theme }) => ({
  background: `${theme.palette.secondary.main}!important`,
  borderRadius: "6px!important",
  boxShadow: "none!important",
}));
export const AppleButton = styled(MyAppleButton)(({ theme }) => ({
  background: `${theme.palette.secondary.main}!important`,
  borderRadius: "6px!important",
  boxShadow: "none!important",
}));

export const ORWrapper = styled("div")(() => ({
  width: "25%",
  margin: "auto",
}));

export const ButtonWrapper = styled("div")(() => ({
  display: "flex",
}));
