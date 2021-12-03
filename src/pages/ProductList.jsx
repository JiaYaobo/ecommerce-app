import styled from "styled-components";
import Products from "../components/Products";
import { useState, useEffect } from "react";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const SelectText = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({
    brand: "All",
    sex: "All",
    price: "All",
    function: "All",
  });
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Title>All Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <SelectText>Brand:</SelectText>
          <Select name="brand" onChange={handleFilters}>
            <Option selected>All</Option>
            <Option>Anta</Option>
            <Option>LiNing</Option>
            <Option>Nike</Option>
            <Option>New Balance</Option>
            <Option>XTEP</Option>
          </Select>
          <SelectText>Sex:</SelectText>
          <Select name="sex" onChange={handleFilters}>
            <Option selected>All</Option>
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
          <SelectText>Price:</SelectText>
          <Select name="price" onChange={handleFilters}>
            <Option selected>All</Option>
            <Option>0-100</Option>
            <Option>100-300</Option>
            <Option>300-500</Option>
            <Option>500-800</Option>
            <Option>800-1000</Option>
            <Option>1000+</Option>
          </Select>
          <SelectText>Function:</SelectText>
          <Select name="function" onChange={handleFilters}>
            <Option selected>All</Option>
            <Option>Sports</Option>
            <Option>Leisure</Option>
            <Option>Basketball</Option>
            <Option>FootBall</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products all sort={sort} filters={filters} />
    </Container>
  );
};

export default ProductList;
