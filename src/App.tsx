import React from 'react';
import './App.css';

function Card({ id, picture, title, price, duration }: any) {
  return (
    <div className="card" data-testid={`itinerary-card-${id}`}>
      <div className="header">
        <div className="cover" style={{ backgroundImage: `url(${picture})` }}></div>
      </div>
      <div className="body">
        <p className="title">{title}</p>
        <div className="detail">
          <span className="duration">
            {"Environ " + duration + " jours"}
          </span>
          <span className="price">
            {"à partir de "}
            <span className="priceValue">{price}</span>
            {" €"}
          </span>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="header">
        Evaneos
      </header>
      <div className="itinerary-container">
        <Card
          id={1479}
          picture="https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg"
          title="Taj Mahal, palais, tigres et dunes"
          price={1410}
          duration={15}
        />
        <Card
          id={15318}
          picture="https://static1.evcdn.net/images/reduction/712229_w-1000_h-625_q-60_m-crop.jpg"
          title="Bouddhas et pierres de lune"
          price={1070}
          duration={12}
        />
      </div>
    </div>
  );
}

export default App;
