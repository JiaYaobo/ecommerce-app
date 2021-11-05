import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useState } from "react";
import Menu from "../components/Menu";

const Container = styled.div``;

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
