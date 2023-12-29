import React from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Typography, Button } from "@mui/material";
import BasicMenu from "./DashBoard.jsx";
function Navbar() {
  const navigate = useNavigate();
  const handleNavigateAddProduct = () => {
    navigate("/addproduct");
  };
  const navigateHomePage = useNavigate();
  const handleNavigateHomePage = () => {
    navigateHomePage("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <img
            onClick={handleNavigateHomePage}
            src="src/assets/logo.png"
            alt=""
          />
          <input className="search-input" placeholder="Search" type="text" />
          <SearchRoundedIcon
            sx={{
              color: "white",
              width: "24px",
              height: "24px",
              position: "absolute",
              left: "180px",
              cursor: "pointer",
            }}
          ></SearchRoundedIcon>
        </div>
        <div className="center-nav">
          <ul className="list">
            <li>
              <Link to={"/historypage"}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#F3EBFF",
                    fontFamily: "Metropolis",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "28px",
                    letterSpacing: "-0.4px",
                  }}
                >
                  History
                </Typography>
              </Link>
            </li>
            <li>
              <Link to={"/currentbid"}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#F3EBFF",
                    fontFamily: "Metropolis",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "28px",
                    letterSpacing: "-0.4px",
                  }}
                >
                  Current Bid
                </Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <Button
            onClick={handleNavigateAddProduct}
            variant="contained"
            sx={{
              width: "167px",
              height: "60px",
              backgroundColor: "#140D4A",
              "&:hover": { backgroundColor: "#140D4A" },
              color: "#A469FF",
              textAlign: "center",
              fontFamily: "Metropolis",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "28px",
              letterSpacing: "0.4px",
            }}
          >
            Add Product
          </Button>
          <BasicMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
