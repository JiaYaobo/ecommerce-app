import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import ShipInfo from "../components/ShipInfo";

const Container = styled.div``;

const Ship = () => {
  const params = useParams();
  const inTransOrders = useSelector((state) => state.transOrder.inTransOrders);
  const order = inTransOrders.filter((o) => o.order_id == params.orderId)[0];
  return (
    <Container>
      <ShipInfo storeId={order.store_id} expTime={order.order_expect_time} />
    </Container>
  );
};

export default Ship;
