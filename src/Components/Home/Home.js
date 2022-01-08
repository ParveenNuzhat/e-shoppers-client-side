import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Slider from "../Slider/Slider";
import Categories from "../AllList/Categories/Categories";

const Home = () => {
  const [highlights, setHighlights] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setHighlights(data));
  }, []);

  return (
    <div>
      <SearchBar></SearchBar>
      <Navigation></Navigation>
      <Slider></Slider>
      <Container className="my-5 p-5">
        <Row md={4}>
          {highlights.map((highlight) => (
            <div className="d-flex">
              <Col md={3}>
                <img src={highlight.img} alt="" className="w-75 img-fluid" />
              </Col>
              <Col md={9}>
                <h5 style={{ color: "tomato", fontWeight: "bold" }}>
                  {highlight.title}
                </h5>
                <p>{highlight.description}</p>
              </Col>
            </div>
          ))}
        </Row>
      </Container>
      <Categories></Categories>
    </div>
  );
};

export default Home;
