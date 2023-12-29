import React, { useState } from "react";
import "/src/style/TrendingContainer.css";
import { Typography } from "@mui/material";
import TrendingCards from "./TrendingCards";
function TrendingContainer() {
  const trendingCardsInformation = [
    {
      id: 1,
      image: "src/assets/black closet.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "closet",
    },
    {
      id: 2,
      image: "src/assets/black bag.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "bags",
    },
    {
      id: 3,
      image: "src/assets/white blouse.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "dress",
    },
    {
      id: 4,
      image: "src/assets/sport shoes.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "shoes",
    },
    {
      id: 5,
      image: "src/assets/black shirt.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "dress",
    },
    {
      id: 6,
      image: "src/assets/clourful socks.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "socks",
    },
    {
      id: 7,
      image: "src/assets/black jacket.png",
      description: "Modi ji’s kurta",
      type: "dress",
    },
    {
      id: 8,
      image: "src/assets/black bag.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "bags",
    },
    {
      id: 9,
      image: "src/assets/bucket.png",
      description: "Godrej Cupboard 7 feet tall",
      type: "bucket",
    },
  ];

  return (
    <>
      <div className="trending-container">
        <div className="introduction-trending">
          <img src="src/assets/burning.png" alt="" />
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontFamily: "'Gilroy-Bold', sans-serif",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "72px",
              letterSpacing: "-1.28px",
            }}
          >
            Trending
          </Typography>
        </div>
        <div className="trending-cards-place">
          {trendingCardsInformation.map((cards) => (
            <TrendingCards key={cards.id} cards={cards} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingContainer;
