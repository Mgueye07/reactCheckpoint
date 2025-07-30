import React from 'react';
import product from '../product.js';

const Image = () => {
  return (
    <div className="image-container text-center mb-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
        style={{
          width: '100%',
          maxWidth: '300px',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '15px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        }}
      />
    </div>
  );
};

export default Image;