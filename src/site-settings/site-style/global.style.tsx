import styled, { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === "ar" || lang === "he") &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    html: {
      overflowX: "auto",
    },
    body: {
      maxWidth: "1920px",
      margin: "0 auto",
      fontFamily: "Neue Haas Grotesk Display Pro, sans-serif",
      fontWeight: "regular",
      fontSize: "base",
      lineHeight: "1.5",
      backgroundColor: "white",
      transition: get(theme, "customs.transition"),
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
    },
    h1: {
      fontFamily: "base",
      fontSize: "5xl",
      fontWeight: "bolder",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      fontFamily: "base",
      fontSize: "4xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      fontFamily: "base",
      fontSize: "mm",
      fontWeight: "bold",
      zIndex: 10,
      marginBottom: "14px",
    },
    h6: {
      fontFamily: "base",
      fontSize: "base",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "span,button,li,div": {
      fontFamily: "base",
      margin: 0,
    },
    a: {
      fontFamily: "base",
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },
    ".flickity-button": {
      display: "none",
    },
    ".title": {
      fontWeight: "bold",
      fontSize: "42px",
      color: "#140A01",
      zIndex: 20,
    },
    ".wrapper": {
      maxWidth: "1400px",
      margin: "0 auto",
      zIndex: "10",
      padding: "0 30px",
      minHeight: "100vh",
    },
    ".container": {
      marginLeft: "0px",
      padding: "20px 0 40px 219px",

      "@media screen and (max-width: 768px)": {
        maxWidth: "100%",
        paddingRight: "30px",
        paddingLeft: "30px",
      },
      "@media screen and (max-width: 992px)": {
        maxWidth: "100%",
      },
      "@media screen and (max-width: 1400px)": {
        maxWidth: "1433px !important",
      },
    },
    ".header-wrapper": {
      maxWidth: "1400px",
      margin: "0 auto",
      position: "relative",
      zIndex: "11",
      padding: "0 30px",
    },

    ".circle": {
      borderRadius: "50%",
      position: "absolute",
      zIndex: 0,
      "@media screen and (max-width: 768px)": {
        zIndex: -1,
      },
    },
    //@ts-ignore
    ...theme.globals,
  })
);