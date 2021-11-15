import styled from "styled-components";
import { StyledLink } from "./styled-components/StyledLink";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StoreName = styled.span``;

const OrderStatus = styled.span``;

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GoodsImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const GoodsName = styled.span``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalCost = styled.span``;

const TotalNum = styled.span``;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => {
    if (props.buttonType === "confirm") {
      return "green";
    } else if (props.buttonType === "check") {
      return "brown";
    } else {
      return "crimson";
    }
  }};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;

const Order = () => {
  return (
    <Container>
      <Top>
        <StoreName>Shoes</StoreName>
        <OrderStatus>Status</OrderStatus>
      </Top>
      <Middle>
        <GoodsImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <GoodsName>A Shoe</GoodsName>
        <Detail>
          <TotalCost>$ 20</TotalCost>
          <TotalNum>Total : 1</TotalNum>
        </Detail>
      </Middle>
      <Bottom>
        <Button buttonType="confirm">CONFIRM</Button>
        <StyledLink to="/order/1/ship">
          <Button buttonType="check">CHECK</Button>
        </StyledLink>
        <Button buttonType="cancel">CANCEL</Button>
      </Bottom>
    </Container>
  );
};

export default Order;
