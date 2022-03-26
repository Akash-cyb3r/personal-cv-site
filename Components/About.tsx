import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import style from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

const useStyles: any = makeStyles((theme: any) => ({
  dialog: {
    display: "flex",
    width: "70%",
    paddingTop: "6%",
    backgroundColor: "#1d1d1d",
    borderRadius: "20px",
    flexDirection: "column",
    alignItems: "start",
    paddingLeft: "76px",
    paddingRight: "58px",
  },
  aboutHeader: {
    fontSize: "40px",
    color: "#e4e4e4",
    fontWeight: "bolder",
    paddingLeft: "10px",
  },
  subDiscription: {
    fontSize: "16px",
    color: "#dfdfdf",
    fontWeight: "400",
    marginTop: "10px",
    paddingLeft: "10px",
  },
  htmlText: {
    color: "#4a4a4a",
    fontFamily: "'La Belle Aurore',cursive",
    fontStyle: "italic",
    fontSize: "20px",
    marginBottom: "8px",
  },
}));
interface AboutProps {
  isShown: boolean;
}
function About({ isShown }: AboutProps) {
  const classes = useStyles();
  const [classValue, setClassValue] = useState("");
  let classArray = [
    "Y",
    "XL",
    "XR",
    "YB",
    // "RX",
    // "RY",
    // "SkewY",
    // "SkewX",
    // "Crazy",
    // "Crazy2",
  ];

  useEffect(() => {
    let value = Math.floor(Math.random() * 8);
    setClassValue(
      isShown
        ? "ModalOpen".concat(classArray[value])
        : "ModalClosed".concat(classArray[value])
    );
  }, []);

  let h1String = "<h1>";
  let paraString = "<p>";
  let paraCloseString = "</ p>";
  let h1CloseString = "</h1>";

  return (
    <div className={clsx(classes.dialog, style[classValue])}>
      <div
        className={classes.htmlText}
        style={{ margin: "unset", marginBottom: "0px" }}
      >
        {h1String}
      </div>
      <div className={classes.aboutHeader}>My Portfolio</div>
      <div
        className={classes.htmlText}
        style={{ margin: "unset", marginTop: "16px" }}
      >
        {h1CloseString}
      </div>
      <div className={classes.htmlText} style={{ marginTop: "0px" }}>
        {paraString}
      </div>
      <div className={classes.subDiscription}>
        Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit
        vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo,
        faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit
        dolor, eget imperdiet mauris
      </div>
      <div
        className={classes.htmlText}
        style={{ marginBottom: "16px", marginTop: "24px" }}
      >
        {paraCloseString}
      </div>
    </div>
  );
}

export default About;
