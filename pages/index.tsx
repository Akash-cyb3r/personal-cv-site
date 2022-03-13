import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PersonalCv from "../Components/PersonalCv";
import { makeStyles } from "@mui/styles";
import {
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
}));

const Home: NextPage = () => {
  const classes = useStyles();
  const [isMuted, setIsmuted] = useState(true);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("video");

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

  return (
    <div style={{ position: "relative" }}>
      <PersonalCv radioValue={radioValue} />
      <div className={classes.setting} onClick={settingFn}>
        <SvgSetting />
      </div>
      <div className={classes.soundBtn} onClick={onSoundBtnClick}>
        {radioValue === "video" && (
          <>
            {isMuted ? (
              <SvgVolumeMuted className={classes.svg} />
            ) : (
              <SvgVolumeOn className={classes.svg} />
            )}
          </>
        )}
      </div>
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
    </div>
  );
};

export default Home;
