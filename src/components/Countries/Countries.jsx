import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountrys, setVisitedCountrys] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  // Visited Flag
  const handleVisitedFlag = (flages) => {
      //console.log(flages);
      const newVisitedFlag = [...visitedFlags, flages]
      setVisitedFlags(newVisitedFlag)
  }

  // Visited country
   const handleVisitedCountry = (country) => {
    //console.log('Add this to your visited countrys');
     //console.log(country.name.common);
     const newVisitedCountry = [...visitedCountrys, country]
     setVisitedCountrys(newVisitedCountry);
  }

  return (
    <div>
      <h3>Lists:{countries.length} </h3>
      <div>
        <h3>Visited Flag: </h3>
           {
            visitedFlags.map((imgs, idx) => {
              return <img key={idx} src={imgs}></img>
            })
           }
      </div>
     
     <div>
      <h5>Visited Country List: {visitedCountrys.length}</h5>
      <ul>
          {
            visitedCountrys.map(country => {
              return <li key={country.cca3}>{country.name.common}</li>
            })
          }
      </ul>
     </div>


      <div className="country-container">
      {
        countries.map((country) => {
         return <Country
          key={country.cca3} 
          handleVisitedCountry = {handleVisitedCountry}
          handleVisitedFlag = {handleVisitedFlag}
          country={country}>
          </Country>
        })
      }
      </div>
    </div>
  );
};

export default Countries;
