import React, { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useSearchParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import ReactPaginate from "react-paginate";
import Pagination from "../components/Pagination";

const Home = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const { searchTitle } = useContext(SearchContext);

  const [searchParams, setSearchParams] = useSearchParams({
    category: "",
    sort: "",
  });

  const order = searchParams.get("sort").includes("-") ? "" : "order=desk";
  const sortBy = searchParams.get("sort").replace("-", "");
  const category =
    searchParams.get("category") > 0
      ? `category=${searchParams.get("category")}`
      : "";
  const search = searchTitle ? `&search=${searchTitle}` : "";

  useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://62cd731a066bd2b699261b2e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}${order}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(true);
      });
    window.scrollTo(0, 0);
  }, [searchParams, searchTitle, currentPage]);

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
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
