import { makeStyles } from "@mui/styles";
import React from "react";
import BackgroundComponent from "./BackgroundComponent";
import Profile from "./Profile";
import HomeDialog from "./HomeDialog";
import { SvgPerson } from "./SvgIcons";
import About from "./About";

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
    boxShadow: "0 19px 38px rgb(0 0 0 / 44%), 0 15px 12px rgb(0 0 0 / 57%)",
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
  component: any;
  isLoading: boolean;
  setLoading: any;
  isFirstRun: boolean;
  setFirstRun: any;
}
function PersonalCv({
  radioValue,
  component,
  isLoading,
  setLoading,
  isFirstRun,
  setFirstRun,
}: PersonalCvProps) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <BackgroundComponent
        radioValue={radioValue}
        isLoading={isLoading}
        setLoading={setLoading}
        isFirstRun={isFirstRun}
        setFirstRun={setFirstRun}
      />
      <div className={classes.content}>
        <Profile />
        {/* <div className={classes.dialog}> */}
        {component === "Home" ? (
          <HomeDialog isShown={component === "Home" ? true : false} />
        ) : component === "About" ? (
          <About isShown={component === "About" ? true : false} />
        ) : (
          <></>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default PersonalCv;
