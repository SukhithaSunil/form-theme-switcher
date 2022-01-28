import React from "react";
import Grid from "@mui/material/Grid";
import assests from "../../assets/images/index";

const CoverImage = () => {
  return (
    <Grid
      item
      xs={false}
      md={7}
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundImage: (t) =>
          t.palette.mode === "light"
            ? `url(${assests.lightImage})`
            : `url(${assests.darkImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px 0px 0px 16px!important",
      }}
    />
  );
};

export default CoverImage;
