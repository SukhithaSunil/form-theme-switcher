import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignUpImage from "../SignUpImage";
import RegsitrationForm from "../RegistrationForm";
import SocialMediaBar from "../SocialMediaBar";
import ThemeBar from "../ThemeBar";

const SignUp = () => {
  return (
    <Grid container component="main" sx={{ padding: { md: "100px 75px" } }}>
      {/* background: "#e7ebfd" */}
      <CssBaseline />
      <SignUpImage />
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        component={Paper}
        sx={{ borderRadius: "0px 16px 16px 0px!important" }}
        // sx={{
        //   background: (t) =>
        //     t.palette.mode === "light"
        //       ? "linear-gradient( blue,red)"
        //       : "linear-gradient(135deg, #323269, transparent 25% 75%, #323269), linear-gradient(45deg, #4f244f, #210c4c 25% 75%, #4f244f) ",
        // }}
      >
        <Box
          sx={{
            my: 5,
            mx: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ThemeBar />
          <Divider variant="middle" sx={{ width: "100%", my: 3 }} />

          <div style={{ width: "100%" }}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ fontWeight: 600 }}
            >
              Sign in to Travelguru
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography variant="body1" gutterBottom>
                {"Don't have an account? "}
              </Typography>

              <Link href="#" underline="none" sx={{ fontWeight: 600 }}>
                &nbsp;&nbsp;{"Sign Up"}
              </Link>
            </div>
          </div>

          <Divider variant="middle" sx={{ width: "100%", my: 3 }} />
          <RegsitrationForm />
          <Divider variant="middle" sx={{ width: "100%", my: 5 }} />
          <Grid item xs>
            <SocialMediaBar />
          </Grid>
          <Grid item>
            <Link href="#" variant="body2"></Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
