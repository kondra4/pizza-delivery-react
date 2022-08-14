import React from "react";
import { useSearchParams } from "react-router-dom";

const Categories = ({ searchParams, setSearchParams }) => {
  const chooseCategory = searchParams.get("category");

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setSearchParams({ category: index, sort: searchParams.get("sort") });
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={chooseCategory == i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
