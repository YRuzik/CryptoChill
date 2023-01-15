import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import SingleCoinPage from "./pages/SingleCoinPage";
import Error404 from "./pages/404";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>

            <main>
              <Routes>

                <Route path={"/"} element={<MainPage/>}/>

                <Route path={"/about"} element={<AboutUs/>}/>

                <Route path={"/contacts"} element={<Contacts/>}/>

                <Route path={"/:bitcoinID"} element={<SingleCoinPage/>}/>

                <Route path={"*"} element={<Error404/>}/>

              </Routes>
            </main>

        </div>
      </Router>
  );
}

export default App;
