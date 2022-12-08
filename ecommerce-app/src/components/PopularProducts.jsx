import { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const getPopProds = async () => {
    const res = await publicRequest.get(`/product/featured_products/10`);
    const data = await res.data;
    setProducts([...data]);
  };
  useEffect(() => {
    getPopProds();
  }, []);
  return (
    <Container>
      {products?.map((item) => (
        <Product item={item} key={item.goods_id} />
      ))}
    </Container>
  );
};

export default PopularProducts;
