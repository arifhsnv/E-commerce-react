import { useContext, useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import RouterLayout from "./pages/home/RouterLayout.jsx";
import AddProduct from "./pages/add product/AddProduct.jsx";
import FavoriteCards from "./store/addCardsContext.js";
import HistoryPage from "./pages/history/HistoryPage.jsx";
import CurrentBidPage from "./pages/current bid/CurrentBidPage.jsx";
import ProductPage from "./pages/Product Page/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/historypage",
        element: <HistoryPage />,
      },
      {
        path: "/currentbid",
        element: <CurrentBidPage />,
      },
      {
        path: "/productpage/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);
  const favCards = useContext(FavoriteCards);

  return (
    <FavoriteCards.Provider
      value={{
        items: [],
        addCard: () => {},
        selectedCard: [],
        productForType: [],
        handleForType: () => {},
      }}
    >
      <RouterProvider router={router} />
    </FavoriteCards.Provider>
  );
}

export default App;
