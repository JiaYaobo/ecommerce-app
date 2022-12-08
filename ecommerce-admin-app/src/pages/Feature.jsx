import styled from "styled-components";
import { Rating } from "@material-ui/lab";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  flex: 4;
  display: flex;
`;

const HotSales = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  padding: 10px;
`;

const Tittle = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const HotSalesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Rank = styled.span`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-right: 10px;
  color: gold;
  border: solid 2px teal;
  border-radius: 50%;
`;

const HotSalesImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const HotSalesName = styled.span``;

const StoreRating = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

const BestRatingGoods = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  padding: 10px;
`;

const GoodsImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const GoodsName = styled.span``;

const Feature = () => {
  const [top3, setTop3] = useState([]);
  const [rating, setRating] = useState(0);
  const [bestGoods, setBestGoods] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchTop3 = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/store/top3/" + currentUser.user_id
        );
        const data = await res.data;
        setTop3(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTop3();
  }, []);

  useEffect(() => {
    const fetchBstGds = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/store/best_goods/" + currentUser.user_id
        );
        const data = await res.data;
        setBestGoods(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBstGds();
  }, []);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/store/avg_rate/" + currentUser.user_id
        );
        const data = await res.data;
        setRating(data.rating_all);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRating();
  }, []);

  return (
    <Container>
      <HotSales>
        <Tittle>Top 3 Goods</Tittle>
        <HotSalesItem>
          <Rank>1</Rank>
          <HotSalesImg src={top3[0]?.goods_image} />
          <HotSalesName>{top3[0]?.goods_name}</HotSalesName>
        </HotSalesItem>
        <HotSalesItem>
          <Rank>2</Rank>
          <HotSalesImg src={top3[1]?.goods_image} />
          <HotSalesName>{top3[1]?.goods_name}</HotSalesName>
        </HotSalesItem>
        <HotSalesItem>
          <Rank>3</Rank>
          <HotSalesImg src={top3[2]?.goods_image} />
          <HotSalesName>{top3[2]?.goods_name}</HotSalesName>
        </HotSalesItem>
      </HotSales>
      <StoreRating>
        <Tittle>Store Average Rating</Tittle>
        <Rating value={rating} readOnly style={{ marginTop: "20px" }} />
      </StoreRating>
      <BestRatingGoods>
        <Tittle>Best Rating Goods</Tittle>
        <GoodsImg src={bestGoods?.good_image} />
        <GoodsName>{bestGoods?.goods_name}</GoodsName>
      </BestRatingGoods>
    </Container>
  );
};

export default Feature;
