import * as React from "react";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MultiInputDateRangeField } from "@mui/x-date-pickers-pro/MultiInputDateRangeField";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

export default function ComponentFamilies() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DateField",
          "TimeField",
          "DateTimeField",
          "MultiInputDateRangeField",
          "MultiInputTimeRangeField",
          "MultiInputDateTimeRangeField",
        ]}
      >
        <DemoItem>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
                marginRight: "400px",
              }}
            >
              From
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
              }}
            >
              To
            </Typography>
          </div>
          <MultiInputDateRangeField
            sx={{
              backgroundColor: "#2D396B",
              borderRadius: "14px",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              border: "none",
              outline: "none",
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
