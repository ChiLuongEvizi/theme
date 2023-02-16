import React, { useEffect, useState } from "react";
import themeApi from "../../api/Api";
import { Loading, WrapperLoading } from "../../Components/Loading";
import { light } from "../../Styles/Theme";
import Child from "./Child";

const Parent = () => {
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      const theme = await themeApi.randomMode();
      setTheme(theme);
      setLoading(false);
    };

    getApi();
  }, []);

  const HandleThemeChange = (theme) => {
    setTheme(theme);
  };

  return (
    <div>
      {!loading && (
        <>
          <div style={{ fontSize: "40px", fontWeight: 700 }}>
            Parent-Children
          </div>
          <Child theme={theme} HandleThemeChange={HandleThemeChange}></Child>
        </>
      )}

      {loading && (
        <WrapperLoading>
          <Loading></Loading>
        </WrapperLoading>
      )}
    </div>
  );
};

export default Parent;
