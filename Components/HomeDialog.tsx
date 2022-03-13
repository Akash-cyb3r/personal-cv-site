import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

interface HomeDialogProps {}

const useStyles: any = makeStyles((theme: any) => ({
  homeDialog: {
    display: "flex",
    width: "70%",
    paddingTop: "6%",
    backgroundColor: "#1d1d1d",
    borderRadius: "20px",
    flexDirection: "column",
    alignItems: "start",
    paddingLeft: "76px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bolder",
    color: "#e4e4e4",
    width: "100%",
    margin: "24px 0 22px 20px",
  },
  container: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "40%",
    left: "50%",
  },
  subText: {
    color: "#4f4f4f",
    fontSize: "16px",
    fontFamily: "Arial, Helvetica, sans-serif",
    letterSpacing: "6px",
    cursor: "none",
    width: "100%",
    margin: "0 0 26px 20px",
    height: "20px",
    "&:hover": {
      fontSize: "20px",
    },
  },
  subLetter1: {
    "&:hover": {
      color: "#00ffda",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter2: {
    "&:hover": {
      color: "#f11919",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter3: {
    "&:hover": {
      color: "#d718f6",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter4: {
    "&:hover": {
      color: "#181bf6",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter5: {
    "&:hover": {
      color: "#18f61b",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter6: {
    "&:hover": {
      color: "#f6f518",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter7: {
    "&:hover": {
      color: "#f66918",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter8: {
    "&:hover": {
      color: "#18f6de",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  subLetter9: {
    "&:hover": {
      color: "#7018f6",
      fontSize: "26px",
      cursor: "none",
      fontWeight: "bold",
    },
  },
  devText: {
    background: " -webkit-linear-gradient(#fffdfd, #000)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "bolder",
  },
  htmlText: {
    color: "#4a4a4a",
    fontFamily: "'La Belle Aurore',cursive",
    fontStyle: "italic",
    fontSize: "14px",
    marginBottom: "8px",
  },
  contactBtn: {
    width: "146px",
    cursor: "pointer",
    height: "34px",
    display: "flex",
    fontSize: "16px",
    alignItems: "center",
    borderRadius: "6px",
    letterSpacing: "2px",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    color: "#3a3a3a",
    margin: "20px",
    "&:hover": {
      background: "transparent",
      color: "#e4e4e4",
      border: "2px solid #e4e4e4",
    },
  },
}));

function HomeDialog(props: HomeDialogProps) {
  const classes = useStyles();
  let htmlString = "<html>";
  let bodyString = "<body>";
  let h1String = "<h1>";
  let paraString = "<p>";
  let h1CloseString = "</h1>";
  let buttonString = "<button>";
  let buttonCloseString = "</ button>";

  return (
    <div className={classes.homeDialog}>
      <div className={classes.htmlText}>{htmlString}</div>
      <div className={classes.htmlText}>{bodyString}</div>
      <div
        className={classes.htmlText}
        style={{ margin: "unset", marginTop: "16px" }}
      >
        {h1String}
      </div>
      <h1 className={classes.title}>
        Hi,
        <br /> I&apos;m Akash,
      </h1>
      <div className={classes.subText}>
        <span className={classes.subLetter1}>F</span>
        <span className={classes.subLetter2}>U</span>
        <span className={classes.subLetter3}>L</span>
        <span className={classes.subLette4}>L</span>
        <span className={classes.subLetter5}>S</span>
        <span className={classes.subLetter6}>T</span>
        <span className={classes.subLetter7}>A</span>
        <span className={classes.subLetter8}>C</span>
        <span className={classes.subLetter9}>K</span>
        <span className={classes.devText}>DEVELOPER</span>
      </div>
      <div className={classes.htmlText}>{h1CloseString}</div>
      <div className={classes.htmlText}>{buttonString}</div>
      <div className={classes.contactBtn}>Contact me!</div>
      <div className={classes.htmlText} style={{ marginTop: "8px" }}>
        {buttonCloseString}
      </div>
    </div>
  );
}

export default HomeDialog;
