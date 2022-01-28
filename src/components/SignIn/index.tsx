import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CoverImage from "../CoverImage";
import RegsitrationForm from "../RegistrationForm";
import SignUpBar from "../SignUpBar";
import SocialMediaBar from "../SocialMediaBar";
import ThemeBar from "../ThemeBar";
import { FormDivider, Wrapper } from "./style";

const SignIn = () => {
  return (
    <Grid container component="main" sx={{ padding: { md: "75px" } }}>
      <CssBaseline />
      <CoverImage />
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        component={Paper}
        sx={{ borderRadius: "0px 16px 16px 0px!important" }}
      >
        <Wrapper
          sx={{
            my: 5,
            mx: { xs: 3, md: 4 },
          }}
        >
          <ThemeBar />
          <FormDivider variant="middle" />
          <SignUpBar />
          <FormDivider variant="middle" />
          <RegsitrationForm />
          <FormDivider variant="middle" />
          <Grid item xs>
            <SocialMediaBar />
          </Grid>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default SignIn;
