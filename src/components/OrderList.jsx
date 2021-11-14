import styled from "styled-components";
import Order from "./Order";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderList = () => {
  return (
    <Container>
      <Order />
      <Order />
      <Order />
      <Order />
    </Container>
  );
};

export default OrderList;
