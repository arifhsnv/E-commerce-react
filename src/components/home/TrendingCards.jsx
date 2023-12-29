import React from "react";
import "/src/style/TrendingCards.css";
import { Typography } from "@mui/material";
import ElectricBoltSharpIcon from "@mui/icons-material/ElectricBoltSharp";
function TrendingCards({ cards }) {
  return (
    <>
      <div className="trending-cards">
        <img src={cards.image} alt="" />
        <Typography
          variant="h3"
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
          {cards.description}
        </Typography>
        <div className="score-product">
          <ElectricBoltSharpIcon
            sx={{ color: "#FFAC33", marginLeft: "30px" }}
          />
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
              marginLeft: "20px",
            }}
          >
            Highest Bid
            <span
              style={{
                color: "#6AC6FF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
                marginLeft: "30px",
              }}
            >
              0.10 wETH
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default TrendingCards;
