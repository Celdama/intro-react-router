import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );

    const items = await data.json();
    setItems(items.data.slice(0, 10));
  };

  return (
    <div>
      {items.map(({ itemId, item }) => {
        return (
          <h1 key={itemId}>
            <Link to={itemId}>{item.name}</Link>
          </h1>
        );
      })}
    </div>
  );
};

export default Shop;
