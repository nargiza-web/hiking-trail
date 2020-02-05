import React from 'react';
import './App.css';

function App() {

  const getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => console.log(position))
    }
  }

  getLocation()

  return (
    <div className="App">
      <h1>Welcome to Hiking Trail</h1>
      <button>SAVE</button>
    </div>
  );
}

export default App;
