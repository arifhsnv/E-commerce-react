import React, { useState } from "react";
import "/src/style/CurrentBidPage.css";
import { Typography, Button } from "@mui/material";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { useNavigate } from "react-router-dom";
import CurrentBidContainer from "../../components/currentbid/CurrentBidContainer.jsx";
function CurrentBidPage() {
  const navigateToHomePage = useNavigate();
  const handleNavigateHomePage = () => {
    navigateToHomePage("/");
  };
  const [buyingProduct, setbuyingProduct] = useState(true);
  const handleBuyingClick = () => {
    setbuyingProduct(true);
  };
  const handleSellingClick = () => {
    setbuyingProduct(false);
  };
  return (
    <>
      <div className="current-bid-page">
        <Button
          onClick={handleNavigateHomePage}
          variant="contained"
          sx={{
            width: "172px",
            height: "60px",
            backgroundColor: "#140D4A",
            "&:hover": { backgroundColor: "#140D4A" },
            borderRadius: "14px",
            color: "#A469FF",
            fontFamily: "Metropolis",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "-0.4px",
            marginLeft: "100px",
            marginTop: "20px",
          }}
        >
          <ArrowBackIosNewSharpIcon sx={{ width: "24px", height: "24px" }} />
          Back
        </Button>
        <div className="top-current-bid">
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
            Current Bid
          </Typography>
        </div>
        <div className="buying-selling-buttons">
          <Button
            onClick={handleBuyingClick}
            variant="contained"
            sx={{
              width: "413.5px",
              height: "60px",
              backgroundColor: "#140D4A",
              "&:hover": { backgroundColor: "#6D28D9" },
              color: "#A469FF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "28px",
              letterSpacing: "-0.4px",
            }}
          >
            Buying
          </Button>
          <Button
            onClick={handleSellingClick}
            variant="contained"
            sx={{
              width: "413.5px",
              height: "60px",
              backgroundColor: "#140D4A",
              "&:hover": { backgroundColor: "#6D28D9" },
              color: "#A469FF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "28px",
              letterSpacing: "-0.4px",
            }}
          >
            Selling
          </Button>
        </div>
       
        {buyingProduct ? (
          <CurrentBidContainer type="buying" />
        ) : (
          <CurrentBidContainer type="selling" />
        )}
      </div>
    </>
  );
}

export default CurrentBidPage;
