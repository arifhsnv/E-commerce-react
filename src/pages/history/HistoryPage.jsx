import React, { useState } from "react";
import "/src/style/HistoryPage.css";
import { Typography, Button } from "@mui/material";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ComponentFamilies from "../../components/history/Date";
import { useNavigate } from "react-router-dom";
import DetailsContainer from "../../components/history/DetailsContainer.jsx";
function HistoryPage() {
  const [showBought, setshowBought] = useState(true);
  const navigateHistoryPage = useNavigate();
  const handleHistoryPage = () => {
    navigateHistoryPage("/");
  };
  const handleBoughtClick = () => {
    setshowBought(true);
  };
  const handleSoldClick = () => {
    setshowBought(false);
  };

  return (
    <>
      <div className="history-page-container">
        <Button
          onClick={handleHistoryPage}
          variant="contained"
          sx={{
            width: "127px",
            height: "60px",
            borderRadius: "14px",
            backgroundColor: "#140D4A",
            "&:hover": { backgroundColor: "#140D4A" },
            color: "#A469FF",
            fontFamily: "Metropolis",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "-0.4px",
            position: "absolute",
            top: "200px",
            left: "40px",
          }}
        >
          <ArrowBackIosNewSharpIcon
            sx={{ width: "24px", height: "24px", color: "#A469FF" }}
          />
          Back
        </Button>
        <div className="introduction-history">
          <Typography
            variant="h2"
            sx={{
              color: "#FFF",
              fontFamily: "'Gilroy-Bold', sans-serif",
              fontSize: "64px",
              fotStyle: "normal",
              fontWeight: "800",
              lineHeight: "72px",
              letterSpacing: "-1.28px",
            }}
          >
            History
          </Typography>
        </div>
        <div className="time-buy">
          <ComponentFamilies />
        </div>
        <div className="sell-buy-buttons">
          <Button
            onClick={handleBoughtClick}
            variant="contained"
            sx={{
              width: "413.5px",
              height: "60px",
              borderRadius: "14px",
              backgroundColor: "#140D4A",
              "&:hover": { backgroundColor: "#140D4A" },
              color: "#fff",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "28px",
              letterSpacing: "-0.4px",
            }}
          >
            Bought
          </Button>
          <Button
            onClick={handleSoldClick}
            variant="contained"
            sx={{
              width: "413.5px",
              height: "60px",
              borderRadius: "14px",
              backgroundColor: "#140D4A",
              "&:hover": { backgroundColor: "#140D4A" },
              color: "#fff",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "28px",
              letterSpacing: "-0.4px",
            }}
          >
            Sold
          </Button>
        </div>
        {showBought ? (
          <DetailsContainer type="bought" />
        ) : (
          <DetailsContainer type="sold" />
        )}
      </div>
    </>
  );
}

export default HistoryPage;
