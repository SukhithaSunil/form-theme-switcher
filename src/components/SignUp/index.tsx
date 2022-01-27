import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignUpImage from "../SignUpImage";
import RegsitrationForm from "../RegsitrationForm";
import SocialMediaBar from "../SocialMediaBar";
import ThemeBar from "../ThemeBar";

const SignUp = () => {
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", padding: "100px 5px", background: "#e7ebfd" }}
    >
      <CssBaseline />
      <SignUpImage />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ThemeBar />

          <Typography component="h1" variant="h5">
            Sign in to TravelGuru
          </Typography>
          <Typography> {"Don't have an account? Sign Up"}</Typography>
          <Divider variant="middle" />

          <RegsitrationForm />
          <Divider />

          <Box sx={{ mt: 1 }}>
            <Grid item xs>
              <SocialMediaBar />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2"></Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
