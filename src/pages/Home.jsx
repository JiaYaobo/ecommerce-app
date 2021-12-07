import Categories from "../components/Categories";
import Slider from "../components/Slider";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCartOrders,
  loadFinishedOrders,
  loadTransOrders,
  loadWaitOrders,
} from "../redux/apiCalls";
import PopularProducts from "../components/PopularProducts";

const Container = styled.div``;

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function loadUserOrders() {
    loadCartOrders(dispatch, currentUser.user_id);
    loadTransOrders(dispatch, currentUser.user_id);
    loadFinishedOrders(dispatch, currentUser.user_id);
    loadWaitOrders(dispatch, currentUser.user_id);
  }

  useEffect(() => {
    currentUser && loadUserOrders();
  }, [currentUser]);

  return (
    <Container>
      <Slider />
      <Categories />
      <PopularProducts />
    </Container>
  );
};

export default Home;
