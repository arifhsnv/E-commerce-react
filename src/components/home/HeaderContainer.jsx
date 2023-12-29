import React from "react";
import "/src/style/Header.css";
import { Typography, Button } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
function HeaderContainer() {
  return (
    <>
      <div className="header">
        <div className="seasonal">
          <img src="src/assets/Emoji.png" alt="" />
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontFamily: "'Gilroy-Bold', sans-serif;" }}
          >
            Seasonal
          </Typography>
        </div>
        <div className="seasonal-place-container">
          <div className="seasonal-place">
            <div className="introduction-seasonal">
              <Typography
                variant="h1"
                sx={{
                  color: "#BEE6FF",
                  fontFamily: "'Gilroy-Bold', sans-serif;",
                  fontSize: "64px",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "72px",
                  letterSpacing: "1.28px",
                  width: "400px",
                    height: "144px",
                  marginLeft:"20px"
                }}
              >
                Pride Month Special Bids
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "228px",
                  height: "60px",
                  borderRadius: "14px",
                  backgroundColor: "#0081D1",
                  "&:hover": { backgroundColor: "#0081D1" },
                  color: "#fff",
                  fontFamily: "Metropolis",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "28px",
                    letterSpacing: "-0.4px",
                  marginLeft:"20px"
                }}
              >
                Check them out
                <ChevronRightOutlinedIcon
                  sx={{ width: "24px", height: "24px" }}
                />
              </Button>
                      </div>
                      <div className="collection-card-iamge"></div>
                   <div className="main-logo-container"></div>   
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderContainer;
