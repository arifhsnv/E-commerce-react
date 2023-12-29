import React from "react";
import "/src/style/CurrentBidDetails.css";
import { Typography } from "@mui/material";
function CurrentBidDetails({ details }) {
  return (
    <>
      <div className="details">
        <div className="total-product">
          <img src={details.image} alt="" />
          <div className="product-description">
            <Typography
              variant="body1"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "32px",
                letterSpacing: "0.24px",
              }}
            >
              {details.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F3EBFF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              Time Left:
              <span
                style={{
                  color: "#A469FF",
                  fontFamily: "Metropolis",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "28px",
                  letterSpacing: "-0.4px",
                }}
              >
                {details.time}
              </span>
            </Typography>
          </div>
        </div>
        <div className="product-price">
          <div className="highest-bid">
            <Typography
              varinat="body1"
              sx={{
                color: "#F3EBFF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              Highest Bid:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6AC6FF",
                fontFamily: "Metropolis",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "28px",
                letterSpacing: "-0.48px",
              }}
            >
              <img
                style={{ width: "24px", height: "24px" }}
                src="src/assets/eth.png"
                alt=""
              />
              {details.highestBid}
            </Typography>
          </div>
          <div className="your-bid">
            <Typography
              variant="body1"
              sx={{
                color: "#F3EBFF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              Your Bid
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#E8F6FF",
                fontFamily: "Metropolis",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "28px",
                letterSpacing: "-0.48px",
              }}
            >
              <img
                style={{ width: "24px", height: "24px" }}
                src="src/assets/eth.png"
                alt=""
              />
              {details.yourBid}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentBidDetails;
