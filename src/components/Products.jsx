import { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import MyPagination from "./MyPagination";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(50);

  const getAllProds = async () => {
    const res = await publicRequest.get(`/product/products/all`);
    const data = await res.data;
    setProducts([...data]);
  };

  const getStoreProds = async () => {
    try {
      const res = await publicRequest.get(
        `/product/products/store/${props.storeId}`
      );
      const data = await res.data;
      setProducts([...data]);
    } catch (err) {
      console.log(err);
    }
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
  useEffect(() => {
    if (props.all) {
      getAllProds();
    } else if (props.storeId) {
      getStoreProds();
    }
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  return (
    <>
      <Container>
        {currentProducts?.map((item) => (
          <Product item={item} key={item.goods_id} />
        ))}
      </Container>
      <MyPagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
