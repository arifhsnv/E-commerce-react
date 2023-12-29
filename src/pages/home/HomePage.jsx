import React from "react";
import "/src/style/HomePage.css";
import HeaderContainer from "../../components/home/HeaderContainer";
import TrendingContainer from "../../components/home/TrendingContainer";
import CategoriesContainer from "../../components/home/CategoriesContainer";
function HomePage() {
  return (
    <>
      <div className="container">
        <HeaderContainer />
        <TrendingContainer />
        <CategoriesContainer />
      </div>
    </>
  );
}

export default HomePage;
