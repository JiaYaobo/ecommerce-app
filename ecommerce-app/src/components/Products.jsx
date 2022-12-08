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
    } catch (err) {
      console.log(err);
    }
  };

  const getSearchProds = async () => {
    try {
      const res = await publicRequest.post("/product/search_goods/search", {
        query: props.search,
      });
      const data = await res.data;
      setProducts([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const priceCons = (price, min_price, max_price) => {
    return price >= min_price && price <= max_price;
  };

  const sexCons = (sex, limit) => {
    if (limit === "U") {
      return true;
    } else {
      return sex.toLowerCase().includes(limit.toLowerCase());
    }
  };

  const brandCons = (brand, limit) => {
    if (limit === "All") {
      return true;
    } else {
      return brand.toLowerCase().includes(limit.toLowerCase());
    }
  };

  const funcCons = (func, limit) => {
    if (limit === "All") {
      return true;
    } else {
      console.log(func);
      return func.toLowerCase().includes(limit.toLowerCase());
    }
  };

  const filterProducts = (filters, prod) => {
    return (
      priceCons(prod.goods_price, filters.min_price, filters.max_price) &&
      brandCons(prod.goods_brand, filters.brand) &&
      sexCons(prod.goods_sex, filters.sex) &&
      funcCons(prod.goods_func, filters.function)
    );
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
    setFilterSortProducts(products.filter((p) => filterProducts(filters, p)));
    if (sort === "newest") {
      setFilterSortProducts((prev) =>
        [...prev].sort((a, b) => a.created_at - b.created_at)
      );
    } else if (sort === "asc") {
      setFilterSortProducts((prev) =>
        [...prev].sort((a, b) => a.goods_price - b.goods_price)
      );
    } else {
      setFilterSortProducts((prev) =>
        [...prev].sort((a, b) => b.goods_price - a.goods_price)
      );
    }
  };

  useEffect(() => {
    if (!props.popular && products.length != 0) {
      getProdsByFiltersAndSort();
    }
  }, [props.filters, props.sort, products]);
  useEffect(() => {
    if (props.cat && props.cat === "all") {
      getAllProds();
    } else if (props.storeId) {
      getStoreProds();
    } else if (props.search) {
      console.log(props.search);
      getSearchProds();
    }
  }, [props.search]);

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
