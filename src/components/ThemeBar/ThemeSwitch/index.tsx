import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";
import ThemeSwitcher from "./styles";
import { changeTheme } from "../../../redux/reducers/themeSlice";
import { useAppDispatch } from "../../../redux/store/store";

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <div>
      <ThemeSwitcher sx={{ m: 1 }} onChange={handleChangeTheme} />
    </div>
  );
};

export default ThemeSwitch;
