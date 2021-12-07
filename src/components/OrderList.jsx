import styled from "styled-components";
import Order from "./Order";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderList = (props) => {
  const inTransOrders = useSelector((state) => state.transOrder.inTransOrders);
  const inFinishedOrders = useSelector(
    (state) => state.finishedOrder.inFinishedOrders
  );
  const inWaitOrders = useSelector((state) => state.waitOrder.inWaitOrders);

  const [orders, setOrders] = useState([]);
  useEffect(() => {}, [inTransOrders, inFinishedOrders]);
  useEffect(() => {
    if (props.all) {
      setOrders((prev) => [
        ...inWaitOrders,
        ...inTransOrders,
        ...inFinishedOrders,
      ]);
    } else if (props.trans) {
      setOrders((prev) => [...inTransOrders]);
    } else if (props.finished) {
      setOrders((prev) => [...inFinishedOrders]);
    } else if (props.wait) {
      setOrders((prev) => [...inWaitOrders]);
    }
  }, [props, inTransOrders, inFinishedOrders, inWaitOrders]);

  return (
    <Container>
      {orders.map((o) => (
        <Order key={o.order_id} order={o} />
      ))}
    </Container>
  );
};

export default OrderList;
