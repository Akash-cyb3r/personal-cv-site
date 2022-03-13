import { makeStyles } from "@mui/styles";
import React from "react";
import BackgroundComponent from "./BackgroundComponent";
import Profile from "./Profile";
import HomeDialog from "./HomeDialog";

const useStyles: any = makeStyles((theme: any) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
  content: {
    background: "#3a3a3a",
    width: "90%",
    height: "76vh",
    maxWidth: "148vh",
    margin: "0 auto",
    padding: "22px",
    borderRadius: "16px",
    display: "flex",
  },
  video: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: -1,
  },
}));
interface PersonalCvProps {
  radioValue: any;
}
function PersonalCv({ radioValue }: PersonalCvProps) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <BackgroundComponent radioValue={radioValue} />
      <div className={classes.content}>
        <Profile />
        <HomeDialog />
      </div>
    </div>
  );
}

export default PersonalCv;