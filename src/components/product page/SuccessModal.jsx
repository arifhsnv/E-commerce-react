import * as React from "react";
import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import { Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export default function SnackbarWithDecorators() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{
          width: "434px",
          height: "60px",
          backgroundColor: "#6D28D9",
          "&:hover": { backroundColor: "#6D28D9" },
          borderRadius: "14px",
          color: "#fff",
          fontFamily: "Metropolis",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "28px",
          letterSpacing: "-0.4px",
        }}
        onClick={() => setOpen(true)}
      >
        Place Bid
      </Button>
      <Snackbar
        variant="soft"
        sx={{
          width: "846px",
          height: "166px",
          borderRadius: "20px",
          backgroundColor: "#23BE7B",
          marginRight: "300px",
          display: "flex",
          justifyContent: "space-around",
        }}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <CheckCircleRoundedIcon
          sx={{ color: "#fff", width: "86px", height: "86px" }}
        />
        <div
          style={{
            width: "80%",
            height: "20vh",
            display: "flex",
            flexDirection: "column",
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
            }}
          >
            Success!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "632px",
              height: "60px",
              color: "#fff",
              fontFamily: "Metropolis",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "30px",
              letterSpacing: "-0.48px",
            }}
          >
            Success is walking from failure to failure with no loss of
            enthusiasm
          </Typography>
        </div>
      </Snackbar>
    </React.Fragment>
  );
}
