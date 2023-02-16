import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import themeApi from "../api/Api";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Loading, WrapperLoading } from "../Components/Loading";
import Quotes from "../Components/Quotes";
import { ThemeButton, ThemeContainer } from "../Components/ThemeSwitching";
import { Title } from "../Components/Title";
import { setLoading, switchMode } from "../redux/ThemeSlice";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { blue, brown, dark, green, light, pink } from "../Styles/Theme";

const ThemeByRedux = () => {
  const { mode, loading } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const HandleThemeChange = (theme) => {
    dispatch(switchMode(theme));
  };

  useEffect(() => {
    const getApi = async () => {
      const theme = await themeApi.randomMode();
      dispatch(switchMode(theme));
      dispatch(setLoading(false));
    };

    getApi();
  }, []);

  return (
    <div>
      {!loading && (
        <ThemeProvider theme={mode}>
          <GlobalStyles />
          <Title>Theme by redux</Title>
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
      )}
      {loading && (
        <WrapperLoading>
          <Loading></Loading>
        </WrapperLoading>
      )}
    </div>
  );
};

export default ThemeByRedux;
