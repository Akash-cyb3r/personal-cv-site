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
  },
}));
interface AboutProps {
  isShown: boolean;
}
function About({ isShown }: AboutProps) {
  const classes = useStyles();
  const [classValue, setClassValue] = useState("");
  let classArray = ["Y", "XL", "XR", "RX", "RY", "SkewY", "SkewX", "Crazy", "Crazy2"];

  useEffect(() => {
    let value = Math.floor(Math.random() * 8);
    setClassValue(
      isShown
        ? "ModalOpen".concat(classArray[value])
        : "ModalClosed".concat(classArray[value])
    );
  }, []);

  return <div className={clsx(classes.dialog, style[classValue])}></div>;
}

export default About;
