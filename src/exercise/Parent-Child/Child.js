import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../../Components/Header";
import Quotes from "../../Components/Quotes";
import { Footer } from "../../Components/Footer";
import { ThemeButton, ThemeContainer } from "../../Components/ThemeSwitching";
import { blue, brown, dark, green, light, pink } from "../../Styles/Theme";
import { GlobalStyles } from "../../Styles/GlobalStyles";
import { Title } from "../../Components/Title";

const Child = ({ theme, HandleThemeChange }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Title>Parent-Child</Title>
        <Header>Game of Thrones Quotes</Header>
        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            onClick={() => HandleThemeChange(light)}
            style={{ backgroundColor: "white" }}
          />
          <ThemeButton
            onClick={() => HandleThemeChange(dark)}
            style={{ backgroundColor: "black" }}
          />
          <ThemeButton
            onClick={() => HandleThemeChange(blue)}
            style={{ backgroundColor: "#ADD8E6" }}
          />
          <ThemeButton
            onClick={() => HandleThemeChange(green)}
            style={{ backgroundColor: "#084526" }}
          />
          <ThemeButton
            onClick={() => HandleThemeChange(brown)}
            style={{ backgroundColor: "#D99A26" }}
          />
          <ThemeButton
            onClick={() => HandleThemeChange(pink)}
            style={{ backgroundColor: "#FFC2CC" }}
          />
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
