import React, { useState, useEffect } from "react";
import axios from "axios";

const UserInput = ({ value, onChange }) => {
  return (
    <div>
      <span>find countries</span>
      <input value={value} onChange={onChange} />
    </div>
  );
};

const Display = ({ countries }) => {
  let showAll = true;
  if (countries.length > 1) {
    showAll = false;
  }
  const show = showAll ? { display: "block" } : { display: "none" };
  const countryElements = countries.map((country, index) => (
    <div key={index}>
      {showAll ? <h1>{country.name}</h1> : <h3>{country.name}</h3>}
      <div style={show}>
        <p>
          <b>capital:</b> {country.capital}
        </p>
        <p>
          <b>population:</b> {country.population}
        </p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((language, index) => (
            <li key={index}>{language.name}</li>
          ))}
        </ul>

        <img
          width="250px"
          className={show}
          src={country.flag}
          alt="country flag"
        ></img>
      </div>
    </div>
  ));

  return <div>{countryElements};</div>;
};
const App = () => {
  const [userInput, setUserInput] = useState(""); //for controlled state
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (userInput === "") {
      return;
    }
    //api called one time
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const jsonData = response.data;
      setCountries(
        jsonData.filter((country) => country.name.indexOf(userInput) > -1)
      );
    });
  }, [userInput]);

  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <UserInput value={userInput} onChange={onChangeHandler} />
      {userInput !== "" ? (
        <Display countries={countries} />
      ) : (
        <p>enter a country name</p>
      )}
    </>
  );
};

export default App;
