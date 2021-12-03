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

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const getAllProds = async () => {
    const res = await publicRequest.get(`/product/products/all`);
    const data = await res.data;
    setProducts([...data]);
  };
  const getProdsByFiltersAndSort = async () => {
    let filters = {};
    let sort = props.sort;
    filters.brand = props.filters.brand;
    filters.sex = props.filters.sex;
    filters.function = props.filters.function;
    switch (props.filters.price) {
      case "All":
        filters.min_price = 0;
        filters.max_price = 1000000;
        break;
      case "0-100":
        filters.min_price = 0;
        filters.max_price = 100;
        break;
      case "100-300":
        filters.min_price = 100;
        filters.max_price = 300;
        break;
      case "300-500":
        filters.min_price = 100;
        filters.max_price = 300;
        break;
      case "500-800":
        filters.min_price = 500;
        filters.max_price = 800;
        break;
      default:
        break;
    }
    console.log(filters);
    console.log(sort);
  };

  useEffect(() => {
    if (!props.popular) {
      getProdsByFiltersAndSort();
    }
  }, [props?.filters, props?.sort]);
  useEffect(() => {}, []);
  return (
    <Container>
      {products?.map((item) => (
        <Product item={item} key={item.goods_id} />
      ))}
    </Container>
  );
};

export default Products;
