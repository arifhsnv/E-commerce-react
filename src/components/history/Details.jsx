import React from "react";
import "/src/style/Details.css";
import { Typography } from "@mui/material";
function Details({ detail }) {
  return (
    <>
      <div className="detail">
        <img className="card-image" src={detail.imageProduct} />
        <Typography
          variant="body1"
          sx={{
            width: "300px",
            height: "60px",
            color: "#F3EBFF",
            fontFamily: "Metropolis",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "30px",
            letterSpacing: "-0.48px ",
          }}
        >
          {detail.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#6AC6FF",
            fontFamily: "Metropolis",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "28px",
            letterSpacing: "-0.4px  ",
          }}
        >
          <img className="eth-currency" src="src/assets/eth.png" alt="" />
          {detail.price}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#F3EBFF",
            fontFamily: "Metropolis",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "30px",
            letterSpacing: "-0.48px ",
          }}
        >
          {detail.date}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#F3EBFF",
            fontFamily: "Metropolis",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "30px",
            letterSpacing: "-0.48px ",
          }}
        >
          {detail.delivered}
        </Typography>
      </div>
    </>
  );
}

export default Details;
