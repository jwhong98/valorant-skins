import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Detail from "../Detail/Detail";
import NavBar from "../NavBar/NavBar";
import { MainContainer } from "./MainElements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://valorant-api.com/v1/bundles")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          //sort result.data alphabetically by displayName and set it to items
          setItems(
            result.data.sort((a, b) =>
              a.displayName > b.displayName
                ? 1
                : b.displayName > a.displayName
                ? -1
                : 0
            )
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const renderDetail = (n) => {
    setName(n);
  };

  const createCard = (data) => {
    return (
      <Card
        key={data.uuid}
        displayName={data.displayName}
        displayIcon={data.displayIcon}
        renderDetail={renderDetail}
      />
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<MainContainer> {items.map(createCard)} </MainContainer>}
          />
          <Route
            path={`/skins/${name.replace(/\s+/g, "")}`}
            element={<Detail displayName={name} />}
          />
        </Routes>
      </Router>
    );
  }
};

export default Main;
