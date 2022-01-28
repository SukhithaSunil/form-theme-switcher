import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Wrapper, SubWrapper } from "./style";

const SignUpBar = () => {
  return (
    <Wrapper>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontWeight: 600 }}
      >
        Sign in to Travelguru
      </Typography>

      <SubWrapper>
        <Typography variant="body1" gutterBottom>
          {"Don't have an account?"}
        </Typography>
        <Link href="#" underline="none" sx={{ fontWeight: 600 }}>
          &nbsp;&nbsp;Sign Up
        </Link>
      </SubWrapper>
    </Wrapper>
  );
};

export default SignUpBar;
