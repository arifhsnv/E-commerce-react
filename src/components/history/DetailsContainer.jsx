import React from "react";
import "/src/style/DetailsContainer.css";
import { Typography } from "@mui/material";
import Details from "./Details.jsx";
function DetailsContainer({ type }) {
  const productBoughtDetails = [
    {
      id: 1,
      imageProduct: "src/assets/blue car.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 2,
      imageProduct: "src/assets/blue car.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 3,
      imageProduct: "src/assets/sport blue car top photo.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 4,
      imageProduct: "src/assets/blue car front.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Out for Delivery",
    },
    {
      id: 5,
      imageProduct: "src/assets/sport car front.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 6,
      imageProduct: "src/assets/blue car front side.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered",
    },
    {
      id: 7,
      imageProduct: "src/assets/sport car back side.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },

    {
      id: 8,
      imageProduct: "src/assets/ble car near side.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 9,
      imageProduct: "src/assets/sport car front.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Booked",
    },
  ];
  const productSoldDetails = [
    {
      id: 1,
      imageProduct: "src/assets/sport car front.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Booked",
    },
    {
      id: 2,
      imageProduct: "src/assets/blue car front.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Out for Delivered",
    },
    {
      id: 3,
      imageProduct: "src/assets/blue car front side.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered",
    },
    {
      id: 4,
      imageProduct: "src/assets/blue car.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 5,
      imageProduct: "src/assets/sport blue car top photo.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 6,
      imageProduct: "src/assets/sport blue car top photo.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 7,
      imageProduct: "src/assets/ble car near side.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 8,
      imageProduct: "src/assets/sport blue car top photo.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
    {
      id: 9,
      imageProduct: "src/assets/sport car front.png",
      description: "Godrej Cupboard 7 feet tall",
      price: "0.341  wETH",
      date: "13 jun, 9:00 pm",
      delivered: "Delivered to Bengaluru",
    },
  ];

  const filteredDetails =
    type === "bought" ? productBoughtDetails : productSoldDetails;
  return (
    <>
      <div className="details-container">
        <div className="top-details-information">
          <Typography
            variant="body1"
            sx={{
              color: "#F3EBFF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0.4px",
            }}
          >
            Product Name
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#F3EBFF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0.4px",
            }}
          >
            Final Amount
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#F3EBFF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0.4px",
            }}
          >
            Purchase Date
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#F3EBFF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0.4px",
            }}
          >
            Status
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#F3EBFF",
              fontFamily: "Metropolis",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0.4px",
            }}
          >
            Exp.Delivery
          </Typography>
        </div>
        <div className="details-place">
          {filteredDetails.map((detail) => (
            <Details key={detail.id} detail={detail} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailsContainer;
