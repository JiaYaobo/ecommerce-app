import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 20px;
`;

const MoneyContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Sub = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  const inTransOrders = useSelector((state) => state.transOrder.inTransOrders);
  const inFinishedOrders = useSelector(
    (state) => state.finishedOrder.inFinishedOrders
  );

  const [transTotal, setTransTotal] = useState(0);
  const [finishedTotal, setFinishedTotal] = useState(0);

  function calTransTotal() {
    let sum = 0;
    for (let order of inTransOrders) {
      sum += order.order_total;
    }
    setTransTotal(sum);
  }

  function calFinishedTotal() {
    let sum = 0;
    for (let order of inFinishedOrders) {
      sum += order.order_total;
    }
    setFinishedTotal(sum);
  }

  useEffect(() => {
    calTransTotal();
    calFinishedTotal();
  }, []);
  return (
    <Container>
      <Item>
        <Title>Transition Orders</Title>
        <MoneyContainer>
          <Money>${transTotal.toFixed(2)}</Money>
          <MoneyRate>{inTransOrders.length} goods</MoneyRate>
        </MoneyContainer>
        <Sub>Orders In Transition</Sub>
      </Item>
      <Item>
        <Title>Finished Orders</Title>
        <MoneyContainer>
          <Money>${finishedTotal.toFixed(2)}</Money>
          <MoneyRate>{inFinishedOrders.length} goods</MoneyRate>
        </MoneyContainer>
        <Sub>Orders Finished</Sub>
      </Item>
      <Item>
        <Title>Total</Title>
        <MoneyContainer>
          <Money>${(transTotal + finishedTotal).toFixed(2)}</Money>
          <MoneyRate>
            {inFinishedOrders.length + inTransOrders.length} goods
          </MoneyRate>
        </MoneyContainer>
        <Sub>All Orders</Sub>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
