import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShipInfo from "../components/ShipInfo";

const Container = styled.div``;

const Ship = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ShipInfo />
      <Footer />
    </Container>
  );
};

export default Ship;
