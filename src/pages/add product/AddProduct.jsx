import React, { useContext, useRef, useState } from "react";
import { Typography, Button } from "@mui/material";
import "/src/style/AddProduct.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import BasicSelect from "../../components/add products/Categories.jsx";
import FavoriteCards from "../../store/addCardsContext.js";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const favCard = useContext(FavoriteCards);
  const navigateMainPage = useNavigate();
  const handleNavigateMainPage = () => {
    navigateMainPage("/");
  };
  const inputRef = useRef("");
  const [image, setimage] = useState();
  const [createCard, setcreateCard] = useState({
    productImage: null,
    createDescription: "",
    createPrice: "",
    type: "",
  });
  favCard.selectedCard.push(image);
  console.log(favCard.selectedCard);
  const changeCardDescription = (e) => {
    const productDescription = e.target.value;
    setcreateCard({ ...createCard, createDescription: productDescription });
  };

  const handleType = (type) => {
    setcreateCard({ ...createCard, type });
  };
  favCard.handleForType = handleType;
  const changeCardPrice = (e) => {
    const productPrice = e.target.value;
    setcreateCard({ ...createCard, createPrice: productPrice });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: favCard.items.length + 1,
      description: createCard.createDescription,
      price: createCard.createPrice,
      image: image,
      isFavorite: false,
      type: createCard.type,
    };
    favCard.items = [...favCard.items, newCard];
    setcreateCard({
      createDescription: "",
      createPrice: "",
      productImage: null,
      type: "",
    });
    favCard.addCard(newCard);
    favCard.handleForType(newCard.type);
    console.log(favCard.items);
  };

  const handleImageRef = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setimage(imageUrl);
      setcreateCard({ ...createCard, productImage: selectedFile });
    }
  };

  return (
    <>
      <div className="add-product-container">
        <div className="top-introduction">
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fonFamily: "'Gilroy-Bold', sans-serif",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "72px",
              letterSpacing: "-1.28px",
              marginTop: "100px",
            }}
          >
            Add Product
          </Typography>
        </div>
        <div className="bottom-information">
          <div className="left-side-information">
            <Typography
              variant="h3"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
                marginTop: "40px",
              }}
            >
              Product Image
            </Typography>
            {createCard.productImage ? (
              <div className="add-product-image">
                <img
                  style={{
                    width: "500px",
                    height: "250px",
                    borderRadius: "10px",
                    marginInline: "auto",
                  }}
                  src={image}
                  alt="Product"
                />
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <Button
                  type="button"
                  onClick={handleImageRef}
                  variant="contained"
                  sx={{
                    width: "544px",
                    height: "64px",
                    borderRadius: "14px",
                    backgroundColor: "#140D4A",
                    "&:hover": { backgroundColor: "#140D4A" },
                    color: "#A469FF",
                    fontFamily: "'Gilroy-Bold', sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "32px",
                    letterSpacing: "0.24px",
                    marginInline: "auto",
                  }}
                >
                  Choose a file
                </Button>
              </div>
            ) : (
              <div className="add-product-image">
                <div
                  style={{
                    border: "3px dashed #F3EBFF",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FileUploadOutlinedIcon
                    sx={{
                      width: "83px",
                      height: "83px",
                      color: "#fff",
                      marginInline: "auto",
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#F3EBFF",
                      fontFamily: "'Gilroy-Bold', sans-serif",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: "800",
                      lineHeight: "32px",
                      letterSpacing: "0.24px",
                      marginInline: "auto",
                    }}
                  >
                    Drag and drop images
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#F3EBFF",
                    fontFamily: "'Gilroy-Bold', sans-serif",
                    fontSize: "34px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "42px",
                    letterSpacing: "0.34px",
                    marginInline: "auto",
                  }}
                >
                  OR
                </Typography>
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <Button
                  onClick={handleImageRef}
                  variant="contained"
                  sx={{
                    width: "544px",
                    height: "64px",
                    borderRadius: "14px",
                    backgroundColor: "#140D4A",
                    "&:hover": { backgroundColor: "#140D4A" },
                    color: "#A469FF",
                    fontFamily: "'Gilroy-Bold', sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "32px",
                    letterSpacing: "0.24px",
                    marginInline: "auto",
                  }}
                >
                  Choose a file
                </Button>
              </div>
            )}
            <Typography
              variant="body1"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
                marginTop: "20px",
              }}
            >
              Starting price
            </Typography>
            <input
              className="starting-price"
              type="text"
              placeholder="0.34 wETH"
            />
            <Typography
              variant="h2"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
                marginTop: "20px",
              }}
            >
              Tags
            </Typography>
            <input className="tag-place" placeholder="#furniture" type="text" />
            <div className="cancel-button">
              <Button
                onClick={handleNavigateMainPage}
                variant="contained"
                sx={{
                  width: "576px",
                  height: "62px",
                  borderRadius: "14px",
                  backgroundColor: "#140D4A",
                  "&:hover": { backgroundColor: "#140D4A" },
                  color: "#A469FF",
                  fontFamily: "Metropolis",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "30px",
                  letterSpacing: "-0.48px",
                  marginTop: "80px",
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className="right-side-information">
            <Typography
              variant="h2"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
              }}
            >
              Product Name
            </Typography>
            <input
              className="name-product"
              type="text"
              placeholder="Porche 911"
            />
            <Typography
              variant="h2"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
              }}
            >
              Description
            </Typography>
            <input
              onChange={changeCardDescription}
              value={createCard.createDescription}
              className="description-place"
              placeholder="Description"
              type="text"
            />
            <Typography
              variant="h2"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
              }}
            >
              Bid Increment
            </Typography>
            <input
              onChange={changeCardPrice}
              value={createCard.createPrice}
              className="bid-place"
              placeholder="0.1 wETH"
              type="text"
            />
            <Typography
              variant="h2"
              sx={{
                color: "#F3EBFF",
                fontFamily: "'Gilroy-Bold', sans-serif",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "42px",
                letterSpacing: "0.34px",
              }}
            >
              Category
            </Typography>
            <BasicSelect />
            <div className="add-button">
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  width: "576px",
                  height: "62px",
                  backgroundColor: "#6D28D9",
                  borderRadius: "14px",
                  "&:hover": { backgroundColor: "#6D28D9" },
                  color: "#fff",
                  fontFamily: "Metropolis",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "30px",
                  letterSpacing: "-0.48px",
                }}
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
