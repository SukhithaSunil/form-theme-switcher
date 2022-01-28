import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const FormDivider = styled(Divider)(() => ({
  width: "100%",
  margin: "24px 0px 24px 0px",
}));

const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export { FormDivider, Wrapper };
