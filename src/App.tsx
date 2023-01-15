import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import CoinsTable from "./components/coinsTable/CoinsTable";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path={'/'} element={<CoinsTable />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
