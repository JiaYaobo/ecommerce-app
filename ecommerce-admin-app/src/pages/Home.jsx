import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  loadWaitOrders,
  loadFinishedOrders,
  loadTransOrders,
  loadProducts,
  getVips,
} from "../redux/apiCalls";

const Container = styled.div`
  flex: 4;
`;

const Home = () => {
  const [sdata, setSData] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function loadStoreOrders() {
    loadTransOrders(dispatch, currentUser.user_id);
    loadFinishedOrders(dispatch, currentUser.user_id);
    loadWaitOrders(dispatch, currentUser.user_id);
    loadProducts(dispatch, currentUser.user_id);
    getVips(dispatch, currentUser.user_id);
  }

  useEffect(() => {
    const fetchSeasonData = async () => {
      try {
        const res = await publicRequest.get(
          "/stats/season_stats/store/" + currentUser.user_id
        );
        const data = await res.data;
        setSData([...data]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSeasonData();
  }, []);

  useEffect(() => {
    currentUser && loadStoreOrders();
  }, [currentUser]);
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={sdata} title="Season Sales" grid dataKey="sale" />
    </Container>
  );
};

export default Home;
