import React from 'react';
import product from '../product.js';

const Name = () => {
  return (
    <h3 className="product-name mb-3" style={{
      color: '#2c3e50',
      fontWeight: '700',
      fontSize: '1.5rem',
      textAlign: 'center',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {product.name}
    </h3>
  );
};

export default Name;