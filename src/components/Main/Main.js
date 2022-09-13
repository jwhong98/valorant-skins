import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Detail from "../Detail/Detail";
import NavBar from "../NavBar/NavBar";
import { MainContainer, MainWrap } from "./MainElements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://valorant-api.com/v1/bundles")
      .then((res) => res.json())
      .then(
        (result) => {
          // remove Give Back, Pride, and Run It Back bundles from displaying
          const filtered = result.data.filter(
            (bundle) =>
              bundle.displayName !== "Give Back" &&
              bundle.displayName !== "Pride" &&
              bundle.displayName !== "Run It Back" &&
              bundle.displayName !== "Luxe"
          );
          //sort result.data alphabetically by displayName
          filtered.sort((a, b) =>
            a.displayName > b.displayName
              ? 1
              : b.displayName > a.displayName
              ? -1
              : 0
          );
          setIsLoaded(true);
          setItems(
            filtered.filter((bundle) => {
              if (query === "") {
                return bundle;
              } else if (
                bundle.displayName.toLowerCase().includes(query.toLowerCase())
              ) {
                return bundle;
              }
              // return filtered;
            })
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [query]);

  const renderDetail = (n) => {
    setName(n);
  };

  const onOpen = (e) => {
    setImg(e);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
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
        {isOpen && <ImageZoom onClick={onClose} img={img} />}
        <NavBar setQuery={setQuery} />
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <MainWrap>{items.map(createCard)}</MainWrap>
              </MainContainer>
            }
          />
          <Route
            path={`/skins/${name.replace(/\s+/g, "")}`}
            element={<Detail displayName={name} onClick={onOpen} />}
          />
        </Routes>
      </Router>
    );
  }
};

export default Main;
