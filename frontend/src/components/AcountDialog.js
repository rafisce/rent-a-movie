import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SigninForm from "./SigninForm";
import RegisterForm from "./RegisterForm";

const AcountDialog = (props) => {
  const { closeDialog, open } = props;
  const [value, setValue] = useState("0");
  const handleClose = () => {
   closeDialog(false);
  };

  const handleChange = (v) => {
    setValue(v);
  };
  useEffect(() => {}, [open]);
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="xs"
      fullWidth
      sx={{ height: "100%" }}
    >
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <TabList
              value={value}
              onChange={(e, value) => {
                handleChange(value);
              }}
              aria-label="basic tabs example"
            >
             
              <Tab
                label="התחבר"
                value="0"
                sx={{ width: "50%", fontSize: "1.6rem" }}
              /> <Tab
                label="הירשם"
                value="1"
                sx={{ width: "50%", fontSize: "1.6rem" }}
              />
            </TabList>
          </Box>
          <Box sx={{ height: "100%" }}>
            <TabPanel value="1" index={1}>
              <RegisterForm onSuccess={handleClose} />
            </TabPanel>
            <TabPanel value="0" index={0}>
              <SigninForm onSuccess={handleClose} />
            </TabPanel>
          </Box>
        </Box>
      </TabContext>
    </Dialog>
  );
};

export default AcountDialog;
