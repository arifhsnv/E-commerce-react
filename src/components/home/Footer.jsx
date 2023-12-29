import React from "react";
import "/src/style/Footer.css";
import { Typography, Link } from "@mui/material";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top-footer">
          <div className="left-top-footer">
            <img src="src/assets/logo.png" alt="" />
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
                marginTop: "20px",
              }}
            >
              CryptoBid
            </Typography>
          </div>
          <div className="right-top-footer">
            <ul className="list-top-footer">
              <li
                style={{
                  color: "#fff",
                  fontFamily: "'Gilroy-Bold', sans-serif",
                  fontSize: "34px",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "42px",
                  letterSpacing: "0.34px",
                }}
              >
                Pages
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  Seasonal
                </Link>
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  Add product
                </Link>
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  Ongoing
                </Link>
              </li>
            </ul>
            <ul className="list-top-footer">
              <li
                style={{
                  color: "#fff",
                  fontFamily: "'Gilroy-Bold', sans-serif",
                  fontSize: "34px",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "42px",
                  letterSpacing: "0.34px",
                }}
              >
                Connect
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  sx={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "Metropolis",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "-0.48px",
                    cursor: "pointer",
                  }}
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="left-side">
            <CopyrightRoundedIcon
              sx={{ color: "#A469FF", width: "24px", height: "24px" }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#A469FF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              CryptoAuction, Inc. All Rights Reserved
            </Typography>
          </div>
          <div className="center-side">
            <Typography
              variant="body1"
              sx={{
                color: "#A469FF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              T&C
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#A469FF",
                fontFamily: "Metropolis",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "28px",
                letterSpacing: "-0.4px",
              }}
            >
              Privacy Policy
            </Typography>
                  </div>
                  <div className="right-side">
                      <img src="src/assets/github.png" alt="" />
                      <img src="src/assets/fi_instagram.png" alt="" />
                      <img src="src/assets/fi_facebook.png" alt="" />
                      <img src="src/assets/fi_linkedin.png" alt="" />
                  </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
