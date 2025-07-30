import React from 'react';
import product from '../product.js';

const Description = () => {
  return (
    <p className="product-description" style={{
      color: '#555',
      lineHeight: '1.6',
      fontSize: '1rem',
      textAlign: 'center',
      margin: '0 auto',
      maxWidth: '90%',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {product.description}
    </p>
  );
};

export default Description;