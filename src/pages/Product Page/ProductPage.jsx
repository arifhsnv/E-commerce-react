import React, { useContext, useState } from "react";
import "/src/style/ProductPage.css";
import { Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SnackbarWithDecorators from "../../components/product page/SuccessModal.jsx";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
function ProductPage() {
  const location = useLocation();
  const [plus, setplus] = useState(420);
  const [isIncrease, setisIncrease] = useState(true);
  const handlePlus = () => {
    if (isIncrease) {
      setplus(plus + 1);
    } else {
      setplus(plus - 1);
    }
    setisIncrease(!isIncrease);
  };

  const { image, description, price, imageEth } = location.state || {};

  const navigateToHomePage = useNavigate();
  const handleNavigateToHomePage = () => {
    navigateToHomePage("/");
  };

  return (
    <>
      <div className="product-page-container">
        <Button
          onClick={handleNavigateToHomePage}
          variant="contained"
          sx={{
            width: "127px",
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
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <ArrowBackIosIcon
            sx={{ width: "24px", height: "24px", color: "#A469FF" }}
          />
          Back
        </Button>
        <div className="product-page-details">
          <img
            style={{ width: "576px", height: "573px", borderRadius: "14px" }}
            src={image}
            alt=""
          />
          <div className="product-description">
            <Typography
              variant="body1"
              sx={{
                color: "#6D28D9",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "32px",
                letterSpacing: "0.24px",
              }}
            >
              Automobiles
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "42px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "56px",
              }}
            >
              {description}
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
                letterSpacing: "-0.48px",
              }}
            >
              Time left:
              <span
                style={{
                  color: "#A469FF",
                  fontFamily: "Metropolis",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "30px",
                  letterSpacing: "-0.48px",
                }}
              >
                1d 23hrs 17 mins
              </span>
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
              }}
            >
              Min Bids:
              <span
                style={{
                  color: "#F3EBFF",
                  fontFamily: "Metropolis",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "30px",
                }}
              >
                4/7
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontFamily: "Metropolis",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
              }}
            >
              Ullamcorper nulla orci ac congue. Sit tellus malesuada laoreet
              feugiat habitant. Viverra semper dis sodales velit nunc, donec mus
              morbi vulputate. Imperdiet ut sem massa etiam quam commodo.
              Ullamcorper nulla orci ac congue. Sit tellus malesuada laoreet
              feugiat habitant. Viverra semper dis sodales velit nunc, donec mus
              morbi vulputate. Imperdiet ut sem massa etiam quam
              commodo.Ullamcorper nulla orci ac congue. Sit tellus malesuada
              laoreet feugiat habitant. Viverra semper dis sodales velit nunc,
              donec mus morbi vulputate. Imperdiet ut sem massa etiam quam
              commodo. Ullamcorper nulla orci ac congue. Sit tellus malesuada
              laoreet feugiat habitant. Viverra semper dis sodales velit nunc,
              donec mus morbi vulputate. Imperdiet ut sem massa etiam quam
              commodo.https://meet.google.com/cwg-uqsx-umeUllamcorper nulla orci
              ac congue. Sit tellus malesuada laoreet feugiat habitant. Viverra
              semper dis sodales velit nunc, donec mus morbi vulputate.
              Imperdiet ut sem massa etiam quam commodo. Ullamcorper nulla orci
              ac congue. Sit tellus malesuada laoreet feugiat habitant. Viverra
              semper dis sodales velit nunc, donec mus morbi vulputate.
              Imperdiet ut sem massa etiam quam
              commodo.https://meet.google.com/cwg-uqsx-ume
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6AC6FF",
                fontFamily: "Metropolis",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "28px",
                letterSpacing: "-0.72px",
              }}
            >
              <img
                style={{ width: "28px", height: "28px" }}
                src={imageEth}
                alt=""
              />
              {price}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#EFF4FB",
                fontFamily: "Metropolis",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "30px",
                letterSpacing: "-0.48px",
              }}
            >
              Deliverable to
              <LocationOnOutlinedIcon sx={{ width: "24px", height: "24px" }} />
              South west Delhi, Delhi in 5 days
            </Typography>
            <div className="button-places">
              <SnackbarWithDecorators />
              {isIncrease ? (
                <Button
                  onClick={handlePlus}
                  variant="contained"
                  sx={{
                    width: "118px",
                    height: "60px",
                    backgroundColor: "#140D4A",
                    "&:hover": { backgroundColor: "#140D4A" },
                    borderRadius: "14px",
                    color: "#EFF4FB",
                    fontFamily: "Metropolis",
                    fontSize: "20px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    lineHeight: "28px",
                    letterSpacing: "-0.4px",
                  }}
                >
                  <FavoriteBorderOutlinedIcon
                    sx={{ width: "24px", height: "24px", color: "#DD3546" }}
                  />
                  {plus}
                </Button>
              ) : (
                <Button
                  onClick={handlePlus}
                  variant="contained"
                  sx={{
                    width: "118px",
                    height: "60px",
                    backgroundColor: "#140D4A",
                    "&:hover": { backgroundColor: "#140D4A" },
                    borderRadius: "14px",
                    color: "#EFF4FB",
                    fontFamily: "Metropolis",
                    fontSize: "20px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    lineHeight: "28px",
                    letterSpacing: "-0.4px",
                  }}
                >
                  <FavoriteRoundedIcon
                    sx={{ width: "24px", height: "24px", color: "#DD3546" }}
                  />
                  {plus}
                </Button>
              )}
            </div>
            <div className="types-button">
              <Button
                variant="contained"
                sx={{
                  width: "115px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#140D4A",
                  "&:hover": { backgroundColor: "#140D4A" },
                  color: "#A469FF",
                  fontFamily: "Metropolis",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "28px",
                  letterSpacing: "-0.4px",
                }}
              >
                #lorem
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "115px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#140D4A",
                  "&:hover": { backgroundColor: "#140D4A" },
                  color: "#A469FF",
                  fontFamily: "Metropolis",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "28px",
                  letterSpacing: "-0.4px",
                }}
              >
                #ipsum
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "115px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#140D4A",
                  "&:hover": { backgroundColor: "#140D4A" },
                  color: "#A469FF",
                  fontFamily: "Metropolis",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "28px",
                  letterSpacing: "-0.4px",
                }}
              >
                #ipsum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
