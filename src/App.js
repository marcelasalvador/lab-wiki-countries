import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import countriesData from "./countries.json"

import { Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {

  const [countries, useCountries] = useState(countriesData) 
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList countries={countries}/>
        <Routes> 
          <Route path="/:id" element={ <CountryDetails countries={countries}/>}> </Route>
        </Routes>
       
        </div>
      </div>
    </div>
  );
}

export default App;
