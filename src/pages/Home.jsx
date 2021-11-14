import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { useState } from "react";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Slider />
      <Categories />
      <Products />
    </Container>
  );
};

export default Home;
