import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

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
}));

interface BackgroundComponentProps {
  radioValue: any;
}
function BackgroundComponent({ radioValue }: BackgroundComponentProps) {
  const classes = useStyles();
  return (
    <div>
      {radioValue === "video" ? (
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
            src="/main_bg.png"
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
