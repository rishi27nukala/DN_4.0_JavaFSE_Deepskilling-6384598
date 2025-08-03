// src/CurrencyConvertor.js
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');

  const handleSubmit = () => {
    const euro = parseFloat(amount) * 0.011;
    setConverted(euro.toFixed(2));
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Currency:</label>
        <input value="Euro" readOnly />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      {converted && (
        <div>
          <p>Converted Amount: €{converted}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
