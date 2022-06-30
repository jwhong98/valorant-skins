import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import { MainContainer } from "./MainElements";

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/bundles")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const createCard = (data) => {
    return (
      <Card
        key={data.uuid}
        displayName={data.displayName}
        displayIcon={data.displayIcon}
      />
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <NavBar />
        <MainContainer>{items.map(createCard)}</MainContainer>
      </>
    );
  }
};

export default Main;
