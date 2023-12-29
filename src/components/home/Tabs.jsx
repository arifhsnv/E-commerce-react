import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteCards from "../../store/addCardsContext.js";
export default function CenteredTabs({ handleFilterByType }) {
  const favCard = React.useContext(FavoriteCards);
  const [value, setValue] = React.useState(0);

  const typeCard = [
    {
      id: 1,
      value: "closet",
    },
    {
      id: 2,
      value: "bags",
    },
    {
      id: 3,
      value: "dress",
    },
    {
      id: 4,
      value: "shoes",
    },
    {
      id: 5,
      value: "socks",
    },
    {
      id: 6,
      value: "bucket",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleFilterByType(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#050121",
        height: "20vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        {typeCard.map((type) => (
          <Tab
            value={type.value}
            sx={{
              color: "#A469FF",

              borderRadius: "14px",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "28px",
              letterSpacing: "-0.4px",
            }}
            label={type.value}
          />
        ))}
      </Tabs>
    </Box>
  );
}
