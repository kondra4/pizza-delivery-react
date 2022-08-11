import React, { useEffect, useState } from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://62cd731a066bd2b699261b2e.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
              : [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
