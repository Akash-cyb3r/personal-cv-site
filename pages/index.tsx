import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PersonalCv from "../Components/PersonalCv";
import { makeStyles } from "@mui/styles";
import {
  SvgHome,
  SvgPerson,
  SvgSetting,
  SvgVolumeMuted,
  SvgVolumeOn,
} from "../Components/SvgIcons";
import { useEffect, useState } from "react";
import SettingDialog from "../Components/SettingDialog";

const useStyles: any = makeStyles((theme: any) => ({
  soundBtn: {
    position: "absolute",
    top: "8px",
    right: "42px",
    backgroundColor: "#000000",
    color: "#d2d2d2",
    padding: "6px",
    borderRadius: "6px",
    fontSize: "14px",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d2d2d2",
      color: "#000000",
      fill: "#000",
      "& svg": {
        fill: "#000",
      },
    },
  },
  svg: {
    fill: "#d2d2d2",
  },
  setting: {
    position: "absolute",
    top: "8px",
    right: "8px",
    backgroundColor: "#000000",
    color: "#d2d2d2",
    padding: "6px",
    borderRadius: "6px",
    fontSize: "14px",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    fill: "#d2d2d2",
    "&:hover": {
      backgroundColor: "#d2d2d2",
      color: "#000000",
      fill: "#000",
      "& svg": {
        fill: "#000",
      },
    },
  },
  credit: {
    position: "absolute",
    bottom: "2px",
    right: "2px",
    fontSize: "8px",
    color: "#7a7a7a",
  },
  svgContainer: {
    width: "42px",
    height: "184px",
    position: "absolute",
    top: "28%",
    right: "-26px",
    background: "#3a3a3a",
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    padding: "10px 0 0 8px",
    cursor: "pointer",
    "& svg": {},
    "&:hover": {
      right: 0,
    },
  },
  svgHome: {
    position: "absolute",
    width: "24px",
    height: "24px",
    "&:hover": {
      fill: "#bebebe !important",
    },
  },
  svgPerson: {
    position: "absolute",
    width: "24px",
    height: "24px",
    top: "46px",
    "&:hover": {
      fill: "#bebebe !important",
    },
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  const [isMuted, setIsmuted] = useState(true);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isFirstRun, setFirstRun] = useState(true);
  const [radioValue, setRadioValue] = useState("video");
  const [component, setComponent] = useState("Home");
  function onSoundBtnClick() {
    var vid: any = document.getElementById("video");
    if (vid) {
      vid.muted = !isMuted;
      setIsmuted(!isMuted);
    }
  }
  function settingFn() {
    setSettingOpen(!isSettingOpen);
  }

  const handleRadioChange = (event: any) => {
    setRadioValue(event.target.value);
  };

  useEffect(() => {
    if (radioValue === "image") {
      setIsmuted(true);
    }
  }, [radioValue]);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <PersonalCv
        radioValue={radioValue}
        component={component}
        isLoading={isLoading}
        setLoading={setLoading}
        isFirstRun={isFirstRun}
        setFirstRun={setFirstRun}
      />
      <div className={classes.setting} onClick={settingFn}>
        <SvgSetting />
      </div>
      {radioValue === "video" && (
        <div className={classes.soundBtn} onClick={onSoundBtnClick}>
          <>
            {isMuted ? (
              <SvgVolumeMuted className={classes.svg} />
            ) : (
              <SvgVolumeOn className={classes.svg} />
            )}
          </>
        </div>
      )}
      <div>
        <SettingDialog
          handleClose={settingFn}
          isOpen={isSettingOpen}
          radioValue={radioValue}
          handleRadioChange={handleRadioChange}
        />
      </div>
      {radioValue === "video" && (
        <div className={classes.credit}>
          @Video credit: The Chainsmokers & Coldplay
        </div>
      )}
      <div className={classes.svgContainer}>
        <SvgHome
          className={classes.svgHome}
          onClick={() => setComponent("Home")}
          style={{ fill: component === "Home" ? "#bebebe" : "#000" }}
        />
        <SvgPerson
          className={classes.svgPerson}
          onClick={() => setComponent("About")}
          style={{ fill: component === "About" ? "#bebebe" : "#000" }}
        />
      </div>
    </div>
  );
};

export default Home;
