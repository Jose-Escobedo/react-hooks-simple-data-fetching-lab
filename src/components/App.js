// create your App component here
import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [startData, setData] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <h3>Loading...</h3>;
  return <img src={startData} alt="A Random Dog"></img>;
};

export default App;
