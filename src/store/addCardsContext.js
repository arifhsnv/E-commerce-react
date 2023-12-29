import { createContext } from "react";

const FavoriteCards = createContext({
  items: [],
  selectedCard: [],
  addCard: (id,values) => {},
  productForType: [],
  handleForType: (type) => {},
});
export default FavoriteCards;
