import React from "react";
import "/src/style/CurrentBidContainer.css";
import CurrentBidDetails from "./CurrentBidDetails";
function CurrentBidContainer({ type }) {
  const productBuyingDetails = [
    {
      id: 1,
      image: "src/assets/first building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 2,
      image: "src/assets/blue car.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 3,
      image: "src/assets/second building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 4,
      image: "src/assets/third building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 5,
      image: "src/assets/blue car front side.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 6,
      image: "src/assets/sport car back side.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 7,
      image: "src/assets/fourth building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 8,
      image: "src/assets/fifth building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
  ];
  const productSellingDetails = [
    {
      id: 1,
      image: "src/assets/fifth building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 2,
      image: "src/assets/blue car.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 3,
      image: "src/assets/first building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 4,
      image: "src/assets/blue car front side.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 5,
      image: "src/assets/third building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 6,
      image: "src/assets/sport car back side.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 7,
      image: "src/assets/fourth building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
    {
      id: 8,
      image: "src/assets/second building.png",
      description: "Godrej Cupboard 7 feet tall",
      time: "1d 23hrs 17 min",
      highestBid: "0.341  wETH",
      yourBid: "0.341  wETH",
    },
  ];
  const filteredProduct =
    type == "buying" ? productBuyingDetails : productSellingDetails;
  return (
    <>
      <div className="current-bid-container">
        {/* <CurrentBidDetails /> */}
        {filteredProduct.map((details) => (
          <CurrentBidDetails key={details.id} details={details} />
        ))}
      </div>
    </>
  );
}

export default CurrentBidContainer;
