import React from "react";
import { changeTheme } from "../../../redux/reducers/themeSlice";
import { useAppDispatch } from "../../../redux/store/store";
import ThemeSwitcher from "./styles";
import { currentTheme } from "../../../redux/reducers/themeSlice";
import { useAppSelector } from "../../../redux/store/store";

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(currentTheme) === "dark";
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <div>
      <ThemeSwitcher
        sx={{ m: 1 }}
        onChange={handleChangeTheme}
        checked={isDarkMode}
      />
    </div>
  );
};

export default ThemeSwitch;
