import { Box, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { SvgClose } from "./SvgIcons";

const useStyles: any = makeStyles((theme: any) => ({
  customModalRoot: {
    top: "40px !important",
    left: "unset !important",
    right: "8px !important",
    width: "224px",
    height: "200px",
    background: "#3a3a3a",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#d2d2d2",
    marginTop: "6px",
    boxShadow: "0 19px 38px rgb(0 0 0 / 83%), 0 15px 12px rgb(0 0 0 / 47%)",
  },
  label: {
    marginLeft: "unset !important",
    marginRight: "unset !important",
  },
  labelImg: {
    marginLeft: "unset !important",
    marginRight: "unset !important",
    paddingRight: "11px",
  },
  closeBtn: {
    position: "absolute",
    width: "20px",
    right: "6px",
    top: "5px",
    cursor: "pointer",
  },
  backgroundText: {
    color: "#fff",
  },
}));
interface SettingDialogProps {
  handleClose: any;
  isOpen: boolean;
  radioValue: any;
  handleRadioChange: any;
}
function SettingDialog({
  handleClose,
  isOpen,
  radioValue,
  handleRadioChange,
}: SettingDialogProps) {
  const classes = useStyles();
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      hideBackdrop={true}
      className={classes.customModalRoot}
    >
      <>
        <div className={classes.backgroundText}>Background</div>
        <SvgClose className={classes.closeBtn} onClick={handleClose} />
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={radioValue}
          onChange={handleRadioChange}
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            borderRadius: "6px",
            border: "2px solid #575757",
            padding: "3px",
            marginTop: "14px",
            "&.Mui-checked": {
              color: "#fff",
            },
            "&:hover": {
              background: "#4f4e4e91",
            },
          }}
        >
          <FormControlLabel
            value="video"
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#d2d2d2",
                  },
                }}
              />
            }
            label="Video"
            className={classes.label}
          />
          <FormControlLabel
            value="image"
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#d2d2d2",
                  },
                }}
              />
            }
            label="Image"
            className={classes.labelImg}
          />
        </RadioGroup>
      </>
    </Modal>
  );
}

export default SettingDialog;
