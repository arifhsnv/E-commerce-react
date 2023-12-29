import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showConnectWallet, setshowConnectWallet] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setshowConnectWallet(true);
    handleClose();
  };
  const handleConnectWallet = () => {
    setshowConnectWallet(false);
  };

  return (
    <>
      {showConnectWallet ? (
        <Button
          onClick={handleConnectWallet}
          variant="contained"
          sx={{
            width: "192px",
            height: "60px",
            backgroundColor: "#6D28D9",
            "&:hover": { backgroundColor: "#6D28D9" },
            borderRadius: "14px",
            color: "#fff",
            fontFamily: "Metropolis",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "0.4px",
          }}
        >
          Connect Wallet
        </Button>
      ) : (
        <div style={{ display: "inline-block" }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img src="src/assets/profile image.png" alt="" />
            <img src="src/assets/chevron-down.png" alt="" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              sx: {
                backgroundColor: "#140D4A",
              },
            }}
          >
            <MenuItem
              sx={{
                backgroundColor: "#140D4A",
                "&:hover": { backgroundColor: "#140D4A" },
                color: "#F3EBFF",
              }}
            >
              Settings
            </MenuItem>
            <MenuItem
              sx={{
                backgroundColor: "#140D4A",
                "&:hover": { backgroundColor: "#140D4A" },
                color: "#F3EBFF",
              }}
            >
              Feedback
            </MenuItem>
            <MenuItem
              sx={{
                backgroundColor: "#140D4A",
                "&:hover": { backgroundColor: "#140D4A" },
                color: "#F3EBFF",
              }}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              sx={{
                backgroundColor: "#140D4A",
                "&:hover": { backgroundColor: "#140D4A" },
                color: "red",
              }}
              onClick={handleLogOut}
            >
              <ExitToAppRoundedIcon sx={{ color: "red" }} /> Log Out
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
}
