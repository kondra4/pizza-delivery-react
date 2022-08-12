import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  console.log("cat", searchParams.get("category"));
  console.log("sort", searchParams.get("sort"));

  useEffect(() => {
    setIsLoading(false);
    fetch(
      searchParams.get("category") != 0
        ? "https://62cd731a066bd2b699261b2e.mockapi.io/items?category=" +
            searchParams.get("category")
        : "https://62cd731a066bd2b699261b2e.mockapi.io/items"
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(true);
      });
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
        <Sort setSearchParams={setSearchParams} searchParams={searchParams} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
      </div>
    </div>
  );
};

export default Home;
