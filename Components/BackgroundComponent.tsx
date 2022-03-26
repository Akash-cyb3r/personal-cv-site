import React, { useEffect, useState } from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";

const useStyles: any = makeStyles((theme: any) => ({
  image: {
    position: "fixed",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    zIndex: -1,
    backgroundColor: "#000",
    left: 0,
    top: 0,
    objectFit: "cover",
  },
  loading: {
    position: "fixed",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    zIndex: 9,
    backgroundColor: "#2c2c2c",
    left: 0,
    top: 0,
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "16%",
  },
  avatar: {
    borderRadius: "50%",
  },
  loadingText: {
    color: "#b0b0b0",
    margin: "26px",
    fontSize: "16px",
    letterSpacing: "4px",
    fontFamily: "monospace",
  },
  linearProgress: {
    width: "60%",
    "& .MuiLinearProgress-bar": {
      background:
        "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
    },
  },
  firstRun: {
    position: "fixed",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    zIndex: 9,
    backgroundColor: "#393939d4",
    left: 0,
    top: 0,
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  arror: {
    position: "absolute",
    top: 0,
    filter: "invert(1)",
  },
  firstRunImage: {
    transform: "rotate(310deg)",
    position: "absolute",
    right: "46px",
    top: "134px",
  },
  screen1Container: {
    position: "absolute",
    top: "25%",
    left: "16%",
    fontSize: "22px",
    fontWeight: "bolder",
    fontFamily: "system-ui",
  },
  screen1Text: {
    width: "412px",
    fontSize: "40px",
    color: "#dfdfdf",
  },
  screen1Btn: {
    width: "117px",
    display: "flex",
    alignItems: "center",
    height: "36px",
    textAlign: "center",
    justifyContent: "center",
    background: "#0e0e0e",
    color: "#c4c3c6",
    borderRadius: "8px",
    marginTop: "34px",
    cursor: "pointer",
  },
  firstRunSc2Image: {
    top: "22px",
    right: "24px",
    position: "absolute",
    transform: "rotate(260deg)",
  },
  screen2Text: {
    color: "#dfdfdf",
    width: "594px",
    fontSize: "40px",
  },
  screen2Container: {
    top: "25%",
    left: "3%",
    position: "absolute",
    fontSize: "22px",
    fontFamily: "system-ui",
    fontWeight: "bolder",
  },
}));

interface BackgroundComponentProps {
  radioValue: any;
  isLoading: boolean;
  setLoading: any;
  isFirstRun: boolean;
  setFirstRun: any;
}
function BackgroundComponent({
  radioValue,
  isLoading,
  setLoading = () => {},
  isFirstRun,
  setFirstRun = () => {},
}: BackgroundComponentProps) {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("1");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setLoading(false);
          return 100;
        }
        const diff = Math.random() * 70;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className={classes.loading}>
          {" "}
          <Image
            src={"/robot.png"}
            alt="Picture of the author"
            width={200}
            height={200}
            className={classes.avatar}
          />
          <span className={classes.loadingText}>Akash is thinking</span>
          <LinearProgress
            variant="determinate"
            value={progress}
            className={classes.linearProgress}
          />
        </div>
      ) : isFirstRun ? (
        <div className={classes.firstRun}>
          {currentScreen === "1" ? (
            <div className={classes.firstRunScreen1}>
              <div className={classes.firstRunImage}>
                <Image
                  src={"/arrow3.png"}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                  className={classes.arror}
                />
              </div>
              <div className={classes.screen1Container}>
                <div className={classes.screen1Text}>
                  Hover and click on the icons to navigate between pages
                </div>
                <div
                  className={classes.screen1Btn}
                  onClick={() => setCurrentScreen("2")}
                >
                  Next
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.firstRunScreen1}>
              <div className={classes.firstRunSc2Image}>
                <Image
                  src={"/arrow3.png"}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                  className={classes.arror}
                />
              </div>
              <div className={classes.screen2Container}>
                <div className={classes.screen2Text}>
                  Use the setting for switch between video and image background
                  and use the volume icon to mute/unmute the video
                </div>
                <div
                  className={classes.screen1Btn}
                  onClick={() => setFirstRun(false)}
                >
                  Close
                </div>
              </div>
            </div>
          )}
        </div>
      ) : radioValue === "video" ? (
        <video
          id="video"
          autoPlay
          muted={true}
          loop
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: -1,
            left: 0,
            top: 0,
          }}
          // controls
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className={classes.image}>
          <Image
            src="/gradientBg.jpg"
            alt="Picture of the author"
            height={1500}
            width={1500}
          />
        </div>
      )}
    </div>
  );
}

export default BackgroundComponent;
