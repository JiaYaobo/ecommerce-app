import { ArrowDownward } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

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
  const { currentUser } = useSelector((state) => state.user);
  const [ydata, setYData] = useState(null);
  const [vip, setVip] = useState(0);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    const fetchVipNum = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/vip_stats/store/" + currentUser.user_id
        );
        const data = await res.data;
        setVip(data.vip_num);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVipNum();
  }, []);

  useEffect(() => {
    const fetchOrderNum = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/order_stats/store/" + currentUser.user_id
        );
        const data = await res.data;
        setOrder(data.order_num);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrderNum();
  }, []);

  useEffect(() => {
    const fetchYearSales = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/year_stats/store/" + currentUser.user_id
        );
        const data = await res.data;
        setYData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYearSales();
  }, []);
  return (
    <Container>
      <Item>
        <Title>VIP</Title>
        <MoneyContainer>
          <Money>{vip}</Money>
        </MoneyContainer>
        <Sub>Vip Num</Sub>
      </Item>
      <Item>
        <Title>ORDER</Title>
        <MoneyContainer>
          <Money>{order}</Money>
        </MoneyContainer>
        <Sub>Order Num</Sub>
      </Item>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>${Math.round(ydata?.sales_total_year)}</Money>
        </MoneyContainer>
        <Sub>Sales all year</Sub>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
