export const fetchCartItems = () => {
  fetch(`https://62cd731a066bd2b699261b2e.mockapi.io/items?`)
    .then((res) => res.json())
    .then((json) => {});
};
