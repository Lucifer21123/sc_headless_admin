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
    ".nft-scrollbar::-webkit-scrollbar": {
      width: "4px",
      height: "6px",
      backgroundColor: "transparent",
    },

    ".nft-scrollbar::-webkit-scrollbar-thumb": {
      bordeRadius: "6px",
      background: "#afbbd4",
    },
    ".wrapper": {
      zIndex: "10",
      minHeight: "100vh",
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      "@media (min-width: 576px)": {
        maxWidth: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "100%",
        paddingRight: "30px",
        paddingLeft: "30px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "100%",
      },
      "@media (min-width: 1260px)": {
        maxWidth: "1433px",
      },
    },
    ".main-content": {
      display: "flex",
      alignItems: "flex-start",
      padding: "20px 0 40px 219px",
      justifyContent: "center",
      "@media (max-width: 3000px)": {
        paddingLeft: "0",
      },
      "@media (max-width: 2000px)": {
        paddingLeft: "0",
      },

      "@media (max-width: 1300px)": {
        padding: "20px 0 40px 219px",
      },
      "@media (max-width: 991px)": {
        padding: "0",
        margin: "0",
      },
      "@media (max-width: 320px)": {
        padding: "0",
        margin: "0",
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
    ".form-input": {
      width: "100%",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "400",
      padding: "9px 50px 9px 16px",
      outline: "0 !important",
      border: "1px solid transparent",
      transition: "border .3s ease",
      resize: "none",
      backgroundColor: "#f8f9fb",
      color: "#48414d !important",
    },
    ".form-single": {
      position: "relative",
      maxWidth: "280px",
      flexDirection: "column",
      alignItems: "flex-start",
      marginRight: "15px",
      marginBottom: "32px",
    },
    ".form__fluid": {
      width: "100%",
      maxWidth: "100%",
      marginRight: 0,
    },
    ".check": {
      opacity: ".75",
      color: "#0b0212",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "22px",
      textAlign: "left",
      marginTop: "5px",
      paddingLeft: "26px !important",
    },
    ".or": {
      height: "40px",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#828282",
      fontSize: "16px",
      fontWeight: "400",
      margin: "auto 8px 10px",
    },
    ".focus": {
      borderRadius: "5px",
      border: "1px solid rgba(53,85,143,.5) !important",
    },
    ".warn-more": {
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      color: "#f97d00",
      lineHeight: "14px",
      textAlign: "left",
      marginTop: "5px",
      marginBottom: "25px",
    },
    ".desc": {
      opacity: ".75",
      color: "#0b0212",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "22px",
      textAlign: "left",
      display: "inline-block",
      marginTop: "8px",
    },
    ".form-text": {
      width: "100%",
      opacity: ".75",
      color: "#0b0212",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "14px",
      textAlign: "left",
      marginBottom: "0",
      marginTop: "8px",
      paddingLeft: "8px",
    },
    ".checkbox-body": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    ".mb-1": {
      marginBottom: "6px",
    },
    ".section-content": {
      padding: 0,
    },
    ".btn-border-red": {
      color: "#fa0128",
      border: "2px solid #fa0128",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "148px",
      height: "40px",
      borderRadius: "5px",
      fontSize: "16px",
      transition: ".3s",
      fontWeight: "500",
      backgroundColor: " #fff",
    },
    ".d-flex": {
      display: "flex",
      justifyContent: "space-between",
    },
    //@ts-ignore
    ...theme.globals,
  })
);
