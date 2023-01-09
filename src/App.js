import axios from "axios";
import React, { useState, useEffect } from "react";
import { dummyData } from "./components/dummyData";
import Karakter from "./components/Karakter";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [choosenName, setChoosenName] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setData(response.data);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClickName(name) {
    setChoosenName(name);
  }

  return (
    <div className="App">
      <div>
        <Karakter
          data={data}
          handleClickName={handleClickName}
          choosenName={choosenName}
        />
      </div>
    </div>
  );
};

export default App;

// gender: male
// Height: 172
// Mass: 77
// BirthYear: 19BBY
// Eye Color: blue
// Hair Color: blond
// Skin Color: fair
