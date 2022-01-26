import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  useEffect(() => {
    fetchItem();
  }, []);

  const { id } = useParams();

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
  };

  console.log(item.images);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Rarity: {item.rarity}</p>
      <img src={item.images.information} alt='#' />
    </div>
  );
};

export default ItemDetail;
