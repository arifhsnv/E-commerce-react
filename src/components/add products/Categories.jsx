import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FavoriteCards from "../../store/addCardsContext.js";
export default function BasicSelect() {
  const favCard = React.useContext(FavoriteCards);
  console.log(favCard.handleForType);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    const filterForType = event.target.value;
    setAge(filterForType)
    favCard.handleForType(filterForType);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          sx={{
            backgroundColor: "#2D396B",
            borderRadius: "14px",
            marginTop: "20px",
            color: "#F3EBFF",
            fontFamily: "Metropolis",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "-0.4px",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="closet">closet</MenuItem>
          <MenuItem value="bags">bags</MenuItem>
          <MenuItem value="dress">dress</MenuItem>
          <MenuItem value="shoes">shoes</MenuItem>
          <MenuItem value="socks">socks</MenuItem>
          <MenuItem value="bucket">bucket</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
