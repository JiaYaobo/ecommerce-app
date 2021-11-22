import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from "../redux/apiCalls";

const Container = styled.div``;

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.order);
  if (error) {
    console.log(error);
  }

  function loadUserOrders() {
    loadOrders(dispatch, currentUser.user_id);
  }

  useEffect(() => {
    currentUser && loadUserOrders();
  }, [currentUser]);

  return (
    <Container>
      <Slider />
      <Categories />
      <Products />
    </Container>
  );
};

export default Home;
