import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartOrder from "../components/CartOrder";
import { addToTrans, addToWait } from "../redux/apiCalls";
import { StyledLink } from "../components/styled-components/StyledLink";
const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const inCartOrders = useSelector((state) => state.cartOrder.inCartOrders);
  const inCheckOrderIds = useSelector(
    (state) => state.cartOrder.inCheckOrderIds
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [shipCost, setShipCost] = useState(0);
  function loadTotalAndShip() {
    let sum = 0;
    let ssum = 0;
    for (let orderId of inCheckOrderIds) {
      console.log(orderId);
      console.log(inCartOrders);
      let order = inCartOrders.filter((o) => o.order_id === orderId)[0];
      sum = sum + order.order_total;
      ssum = ssum + order.goods_ship_cost;
    }
    setCartTotal(sum);
    setShipCost(ssum);
  }
  const handleCheckOrder = async (event) => {
    event.preventDefault();
    for await (let orderId of inCheckOrderIds) {
      addToWait(dispatch, orderId);
    }
  };
  useEffect(() => {}, [inCartOrders]);

  useEffect(() => {
    loadTotalAndShip();
  }, [inCartOrders, inCheckOrderIds]);
  return (
    <Container>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <StyledLink to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </StyledLink>
          <TopTexts>
            <TopText>Shopping Bag ({inCartOrders.length})</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleCheckOrder}>
            CHECK UP NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {inCartOrders.map((item, index) => (
              <CartOrder
                orderId={item.order_id}
                key={item.order_id}
                index={index}
              />
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cartTotal} </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$ {shipCost} </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice> $ {0} </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {shipCost + cartTotal} </SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckOrder}>CHECK UP</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
