import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import Image from "next/image";
import { SvgGit, SvgLinkedIn, SvgMail, SvgVolumeOn } from "./SvgIcons";
import ReactTypingEffect from "react-typing-effect";

const useStyles: any = makeStyles((theme: any) => ({
  profileContent: {
    width: "35%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  avatar: {
    borderRadius: "50%",
  },
  name: {
    fontSize: "28px",
    color: "#ffffff",
    marginTop: "30px",
  },
  profession: {
    color: "#dfdfdf",
    fontSize: "22px",
    marginTop: "14px",
    "& span": {
      borderRight: ".1em solid",
      animation: "caret 1s steps(1) infinite",
    },
  },
  profieTextContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
  },
  "@keyframes caret": {
    "50% ": {
      borderColor: "transparent",
    },
  },
  svgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "16px",
  },
  btn: {
    marginTop: "66px",
    color: "#ffffff",
    fontSize: "16px",
    letterSpacing: "2px",
    border: "2px solid #ffffff",
    borderRadius: "15px",
    width: "186px",
    height: "40px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d9d9d9",
      color: "#3a3a3a !important",
    },
  },
  cursor: {
    color: "#dfdfdf",
    fontSize: "25px",
  },
}));

interface ProfileProps {}
function Profile(props: ProfileProps) {
  const classes = useStyles();

  return (
    <div className={classes.profileContent}>
      <div style={{ marginTop: "32px" }}>
        <Image
          src={"/avatar2.png"}
          alt="Picture of the author"
          width={200}
          height={200}
          className={classes.avatar}
        />
      </div>
      <div className={classes.profieTextContent}>
        <div className={classes.name}>Akash Pachaiyappan</div>
        <div style={{ marginTop: "20px" }}>
          <ReactTypingEffect
            text={[
              "Web Developer.",
              "React Developer.",
              "React Native Developer.",
              "Node & Express js Dev.",
              "Fullstack Developer.",
            ]}
            speed={130}
            eraseDelay={130}
            eraseSpeed={80}
            typingDelay={130}
            cursorClassName={classes.cursor}
            //   cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text: any, i: any) => {
              return (
                <div>
                  {text.split("").map((char: any, i: any) => {
                    const key = `${i}`;
                    return (
                      <span key={key} className={classes.profession}>
                        {char}
                      </span>
                    );
                  })}
                </div>
              );
            }}
          />
        </div>
        <div className={classes.svgContainer}>
          <SvgGit style={{ margin: "0 10px" }} />
          <SvgLinkedIn style={{ margin: "0 8px" }} />
          <SvgMail style={{ margin: "14px 10px 10px 10px" }} />
        </div>
        <div className={classes.btn}>Download CV</div>
      </div>
    </div>
  );
}

export default Profile;
