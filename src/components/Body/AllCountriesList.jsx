import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import "./Body.css";

const AllCountriesList = () => {
  const [fullData, SetFullData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    SetFullData(data);
  };



  //   useEffect(() => {
  //     fetch("https://restcountries.com/v3.1/all")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         SetFullData(data);
  //       });
  //   }, []);

  // const fetchData = ()=>{
  //     fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then( (data) =>{
  //         SetFullData(data);
  //     } )
  // }

  return (
    <div className="countries-container">
      <CountryCard />
      {fullData.map((country) => {
        return (
          <CountryCard
            Name={country?.name?.common}
            key={country.name.common}
            popu={country.population.toLocaleString("hi-IN")}
            region={country.region}
            capital={country.capital?.[0]}
            flagimg={country.flags.svg}
          />
        );
      })}
    </div>
  );
};

export default AllCountriesList;
