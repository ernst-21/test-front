import React from 'react';
import './App.css';
import {CardList} from "./modules/trip/components/List";

function App() {

  return (
    <div className="App">
      <header className="header">
        Evaneos
      </header>
      <div className="itinerary-container">
          <CardList />
      </div>
    </div>
  );
}

export default App;
