import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import CoinsTable from "./components/coinsTable/CoinsTable";

function App() {
  return (
    <div className="App">
      <Header/>
        <CoinsTable/>
    </div>
  );
}

export default App;
