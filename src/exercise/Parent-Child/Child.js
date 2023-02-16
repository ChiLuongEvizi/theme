import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../../Components/Header";
import Quotes from "../../Components/Quotes";
import { Footer } from "../../Components/Footer";
import { ThemeButton, ThemeContainer } from "../../Components/ThemeSwitching";
import { blue, brown, dark, green, light, pink } from "../../Styles/Theme";
import { GlobalStyles } from "../../Styles/GlobalStyles";

const Child = ({ theme, HandleThemeChange }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>
        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            onClick={() => HandleThemeChange(light)}
            style={{ backgroundColor: "white" }}
          ></ThemeButton>
          <ThemeButton
            onClick={() => HandleThemeChange(dark)}
            style={{ backgroundColor: "black" }}
          ></ThemeButton>
          <ThemeButton
            onClick={() => HandleThemeChange(blue)}
            style={{ backgroundColor: "#ADD8E6" }}
          ></ThemeButton>
          <ThemeButton
            onClick={() => HandleThemeChange(green)}
            style={{ backgroundColor: "#084526" }}
          ></ThemeButton>
          <ThemeButton
            onClick={() => HandleThemeChange(brown)}
            style={{ backgroundColor: "#D99A26" }}
          ></ThemeButton>
          <ThemeButton
            onClick={() => HandleThemeChange(pink)}
            style={{ backgroundColor: "#FFC2CC" }}
          ></ThemeButton>
        </ThemeContainer>
        <Quotes />
        <Footer>
          <p>
            Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
          </p>
        </Footer>
      </ThemeProvider>
    </div>
  );
};

export default Child;
