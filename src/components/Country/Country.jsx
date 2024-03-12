import { useState } from "react";
import "./Country.css";


const Country = ({ country, handleVisitedCountry }) => {
  //console.log(country);
 // console.log(handleVisitedCountry);

  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
     setVisited(!visited);
  }

  return (
    <div className={`country ${visited? 'visitedStyle': 'notVisitedStyle'}`}>
      <h3 style={{color: visited? 'black': 'purple'}}>Name: {name.common} </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>

      <button onClick={()=>{handleVisitedCountry(country)}} className="btn">Mark As Visited</button>
      <br />

      <button onClick={handleVisited} className="btn">{visited? 'Visited': 'Going'}</button>
      {visited? "I Have Visited This Country": "I Want To Visit"}
    </div>
  );
};

export default Country;
