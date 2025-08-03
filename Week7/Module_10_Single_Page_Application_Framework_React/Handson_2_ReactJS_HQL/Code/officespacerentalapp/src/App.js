import React from 'react';
import './App.css'; // For external CSS

const App = () => {
  const heading = "Office Space , at Affordable Range";
  const officeList = [
    { 
      Name: "DBS", 
      Rent: 50000, 
      Address: "Chennai", 
      Image: "/office1.png" 
    },
    { 
      Name: "WeWork", 
      Rent: 62000, 
      Address: "Bangalore", 
      Image: "/office2.png" 
    },
    { 
      Name: "Regus", 
      Rent: 45000, 
      Address: "Hyderabad", 
      Image: "/office3.png" 
    },
  ];


  const getRentColor = (rent) => {
    return rent <= 60000 ? 'textRed' : 'textGreen';
  };

  return (
    <div className="container">
      <h1>{heading}</h1>
      {officeList.map((item, index) => (
        <div key={index} className="card">
          <img src={item.Image} alt={item.Name} width="40%" height="auto" />
          <h2>Name: {item.Name}</h2>
          <h3 className={getRentColor(item.Rent)}>Rent: Rs. {item.Rent}</h3>
          <h3>Address: {item.Address}</h3>
        </div>
      ))}

    </div>
  );
};

export default App;
