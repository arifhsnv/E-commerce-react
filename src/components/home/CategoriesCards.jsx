import React from "react";
import "/src/style/CategoriesCards.css";
import { Typography } from "@mui/material";
import ElectricBoltSharpIcon from "@mui/icons-material/ElectricBoltSharp";
function CategoriesCards({ cards, handleNavigatePage }) {
  return (
    <>
      <div onClick={handleNavigatePage} className="categories-cards">
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
        <div className="score-cards">
          <ElectricBoltSharpIcon
            sx={{ color: "#FFAC33", marginLeft: "20px" }}
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
                marginLeft: "20px",
              }}
            >
              {cards.price}
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default CategoriesCards;
