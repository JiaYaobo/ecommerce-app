import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShipInfo from "../components/ShipInfo";
import { useState } from "react";
import Menu from "../components/Menu";

const Container = styled.div``;

const Ship = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Announcement />
      <ShipInfo />
      <Footer />
    </Container>
  );
};

export default Ship;
