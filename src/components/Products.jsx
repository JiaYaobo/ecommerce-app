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
  const [filterSortProducts, setFilterSortProducts] = useState([]);

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
      // setFilterSortProducts([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const getProdsByFiltersAndSort = async () => {
    console.log(props.filters);
    let filters = {};
    let sort = props.sort;
    filters.brand = props.filters.brand;
    filters.sex = props.filters.sex;
    filters.function = props.filters.function;
    switch (props.filters.price) {
      case "All":
        console.log("all price prods");
        filters.min_price = 0;
        filters.max_price = 1000000;
        break;
      case "1":
        filters.min_price = 0;
        filters.max_price = 100;
        break;
      case "2":
        filters.min_price = 100;
        filters.max_price = 300;
        break;
      case "3":
        filters.min_price = 300;
        filters.max_price = 500;
        break;
      case "4":
        filters.min_price = 500;
        filters.max_price = 800;
        break;
      case "5":
        filters.min_price = 800;
        filters.max_price = 1000;
        break;
      case "6":
        filters.min_price = 1000;
        filters.max_price = 10000000;
        break;
      case "7":
        filters.min_price = 0;
        filters.max_price = 1000000;
      default:
        break;
    }
    switch (filters.sex) {
      case "All":
        filters.sex = "U";
        break;
      default:
        break;
    }
    switch (filters.brand) {
      case "nike":
        break;
      default:
        break;
    }
    console.log(products);
    setFilterSortProducts(
      products.filter(
        (p) =>
          p.goods_price >= filters.min_price &&
          p.goods_price <= filters.max_price
      )
    );
  };

  // const filterProducts = (filters,prod)=>{
  //   if(prod.goods_price>=filters.min_price && getProdsByFiltersAndSort.goods_price<=filters.max_price){
  //     if (prod.goods_sex === filters.goods_sex){
  //       if(prod.goods_brand === filters.goods_brand)
  //     }
  //   }
  // }

  useEffect(() => {
    if (!props.popular && products.length != 0) {
      getProdsByFiltersAndSort();
    }
  }, [props.filters, props.sort, products]);
  useEffect(() => {
    if (props.cat === "all") {
      getAllProds();
    } else if (props.storeId) {
      getStoreProds();
    }
  }, [props.cat]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterSortProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        {currentProducts?.map((item) => (
          <Product item={item} key={item.goods_id} />
        ))}
      </Container>
      <MyPagination
        productsPerPage={productsPerPage}
        totalProducts={filterSortProducts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
