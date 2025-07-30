import React from 'react';
import product from '../product.js';

const Price = () => {
  return (
    <div className="price-container text-center mb-3">
      <span className="product-price" style={{
        fontSize: '2rem',
        fontWeight: '800',
        color: '#27ae60',
        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        ${product.price}
      </span>
    </div>
  );
};

export default Price;