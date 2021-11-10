import { ArrowDownward } from "@material-ui/icons";
import React from "react";
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
  return (
    <Container>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>$1,111</Money>
          <MoneyRate>
            -11 <ArrowDownward />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>$1,111</Money>
          <MoneyRate>
            -11 <ArrowDownward />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>$1,111</Money>
          <MoneyRate>
            -11 <ArrowDownward />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
