import React, { useContext, useEffect, useState } from "react";
import "/src/style/CategoriesContainer.css";
import { Typography } from "@mui/material";
import CategoriesCards from "./CategoriesCards";
import CenteredTabs from "./Tabs.jsx";
import FavoriteCards from "../../store/addCardsContext.js";
import { useNavigate } from "react-router-dom";
import BlackCloset from "/src/assets/black closet.png";
import BlackBag from "/src/assets/black bag.png";
import WhiteBlouse from "/src/assets/white blouse.png";
import SportShoes from "/src/assets/sport shoes.png";
import BlackShirt from "/src/assets/black shirt.png";
import Socks from "/src/assets/clourful socks.png";
import BlackJacket from "/src/assets/black jacket.png";
import Bucket from "/src/assets/bucket.png";
import EthImage from "/src/assets/eth.png";
function CategoriesContainer() {
  const favCard = useContext(FavoriteCards);
  const navigateProductPage = useNavigate();

  const [categoriesCardsInfo, setcategoriesCardsInfo] = useState([
    {
      id: 1,
      image: BlackCloset,
      description: "Godrej Cupboard 7 feet tall",
      type: "closet",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 2,
      image: BlackBag,
      description: "Godrej Cupboard 7 feet tall",
      type: "bags",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 3,
      image: WhiteBlouse,
      description: "Godrej Cupboard 7 feet tall",
      type: "dress",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 4,
      image: SportShoes,
      description: "Godrej Cupboard 7 feet tall",
      type: "shoes",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 5,
      image: BlackShirt,
      description: "Godrej Cupboard 7 feet tall",
      type: "dress",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 6,
      image: Socks,
      description: "Godrej Cupboard 7 feet tall",
      type: "socks",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 7,
      image: BlackJacket,
      description: "Modi ji’s kurta",
      type: "dress",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 8,
      image: BlackBag,
      description: "Godrej Cupboard 7 feet tall",
      type: "bags",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
    {
      id: 9,
      image: Bucket,
      description: "Godrej Cupboard 7 feet tall",
      type: "bucket",
      price: "0.10 wETH",
      imageEth: EthImage,
    },
  ]);

  const handleNavigatePage = (cards) => {
    navigateProductPage(`/productpage/${cards.id}`, {
      state: {
        image: cards.image,
        description: cards.description,
        price: cards.price,
        imageEth: cards.imageEth,
      },
    });
  };

  const [filteredCards, setfilteredCards] = useState(categoriesCardsInfo);
  useEffect(() => {
    setcategoriesCardsInfo([...categoriesCardsInfo, ...favCard.items]);
  }, [favCard.items]);

  const handleFilterByType = (type) => {
    const filtered = categoriesCardsInfo.filter((card) => card.type === type);
    setfilteredCards(filtered);
  };

  favCard.addCard = (itemId, values) => {
    setcategoriesCardsInfo(favCard.items);
    const favoriteCard = favCard.items.find((item) => item.id == itemId);
    if (favoriteCard) {
      return favCard.selectedCard.push(favoriteCard);
    }
  };
  return (
    <>
      <div className="categories-container">
        <div className="categories-introduction">
          <div className="top-intro">
            <img src="src/assets/label.png" alt="" />
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "72px",
                letterSpacing: "-1.28px",
              }}
            >
              Categories
            </Typography>
          </div>
          <div className="bottom-intro">
            {<CenteredTabs handleFilterByType={handleFilterByType} />}
          </div>
        </div>

        <div className="categories-cards-place">
          {filteredCards.map((cards) => (
            <CategoriesCards
              key={cards.id}
              cards={cards}
              handleNavigatePage={() => handleNavigatePage(cards)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoriesContainer;
