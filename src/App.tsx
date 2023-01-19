import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import SingleCoinPage from "./pages/SingleCoinPage";
import Error404 from "./pages/404";

import McDuck from "resources/gif/McDuck.gif"
import GlobalContext from "./components/contexts/CoinsContext";
import Toaster from "./components/toaster/Toaster";


function App() {
  return (
      <GlobalContext>
          <Toaster/>
          <Router>
            <div className="App">
              <Header/>
                <main>
                  <Routes>

                      <Route path={'/'}>

                          <Route index element={<MainPage/>}/>

                          <Route path={"about"} element={<AboutUs/>}/>

                          <Route path={"contacts"} element={<Contacts/>}/>

                          <Route path={":bitcoinID"} element={<SingleCoinPage/>}/>

                          <Route path={"404"} element={<Error404/>}/>

                          <Route path={"*"} element={<Error404/> }/>

                      </Route>

                  </Routes>
                </main>

            </div>
          </Router>
      </GlobalContext>
  );
}

export default App;
