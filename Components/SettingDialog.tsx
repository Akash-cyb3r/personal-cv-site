import { Box, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles: any = makeStyles((theme: any) => ({
  customModalRoot: {
    top: "40px !important",
    left: "unset !important",
    right: "8px !important",
    width: "200px",
    height: "200px",
    background: "#3a3a3a",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#d2d2d2",
    marginTop: "6px",
  },
  label: {
    marginLeft: "unset !important",
    marginRight: "unset !important",
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
        <div>Background</div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={radioValue}
          onChange={handleRadioChange}
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            "&.Mui-checked": {
              color: "#fff",
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
            className={classes.label}
          />
        </RadioGroup>
      </>
    </Modal>
  );
}

export default SettingDialog;
