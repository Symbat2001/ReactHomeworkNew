import React, { useState, useEffect } from 'react';

const Magazin = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const products = ['Телефон', 'Ноутбук', 'Құлаққап', 'Теледидар', 'Планшет'];
  useEffect(() => {
    const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewed(storedRecentlyViewed);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const handleProductClick = (product) => {
    setRecentlyViewed((prev) => {
      
      const updatedList = prev.filter((item) => item !== product);
      return [product, ...updatedList];
    });
  };

  return (
    <div>
      <h1>Өнімдер</h1>
      <div>
        {products.map((product, index) => (
          <button key={index} onClick={() => handleProductClick(product)}>
            {product}
          </button>
        ))}
      </div>

      <h2>Соңғы қаралғандар</h2>
      <ul>
        {recentlyViewed.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Magazin;