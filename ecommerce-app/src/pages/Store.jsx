import styled from "styled-components";
import Products from "../components/Products";
import { useParams } from "react-router";
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { MessageOutlined } from "@material-ui/icons";
import { StyledLink } from "../components/styled-components/StyledLink";
import { useSelector } from "react-redux";

const Container = styled.div``;

const StoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StoreName = styled.h1`
  margin: 20px;
`;

const FilterSortContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
  margin-right: 20px;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
`;
const Store = () => {
  const [storeInfo, setStoreInfo] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const params = useParams();
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
  const getStoreInfo = async () => {
    const res = await publicRequest.get(`/store/store_info/${params.storeId}`);
    const data = await res.data;
    setStoreInfo(data);
  };

  const handleContact = async () => {
    try {
      await publicRequest.post(
        `/chat/create_conversation/${currentUser.user_id}/${params.storeId}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (params.storeId) {
      getStoreInfo();
    }
  }, []);
  return (
    <Container>
      <StoreContainer>
        <StoreName>
          {" "}
          <b>Store : </b> {storeInfo?.user_name}
        </StoreName>
        <StyledLink to="/message">
          <MessageOutlined
            style={{ cursor: "pointer" }}
            onClick={handleContact}
          />
        </StyledLink>
      </StoreContainer>
      <FilterSortContainer>
        <FilterContainer>
          <FilterText>Filter Products:</FilterText>
          <FormControl
            variant="standard"
            style={{ minWidth: 120, marginRight: "10px" }}
          >
            <InputLabel id="brand-input-label">Brand</InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              name="brand"
              label="Brand"
              value={filters.brand}
              onChange={handleFilters}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"NIKE"}>Nike</MenuItem>
              <MenuItem value={"NB"}>New Balance</MenuItem>
              <MenuItem value={"ADIDAS"}>Adidas</MenuItem>
              <MenuItem value={"ANTA"}>Anta</MenuItem>
              <MenuItem value={"XTEP"}>XTEP</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            style={{ minWidth: 120, marginRight: "10px" }}
          >
            <InputLabel id="sex-input-label">Sex</InputLabel>
            <Select
              labelId="sex-select-label"
              id="sex-select"
              value={filters.sex}
              label="Sex"
              name="sex"
              onChange={handleFilters}
            >
              <MenuItem value={"M"}>Male</MenuItem>
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            style={{ minWidth: 120, marginRight: "10px" }}
          >
            <InputLabel id="function-input-label">Function</InputLabel>
            <Select
              labelId="function-select-label"
              id="function-select"
              value={filters.function}
              label="Function"
              name="function"
              onChange={handleFilters}
            >
              <MenuItem value={"A"}>Sports</MenuItem>
              <MenuItem value={"B"}>Leisure</MenuItem>
              <MenuItem value={"C"}>Walk</MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            style={{ minWidth: 120, marginRight: "10px" }}
          >
            <InputLabel id="price-input-label">Price</InputLabel>
            <Select
              labelId="price-select-label"
              id="price-select"
              value={filters.price}
              label="Price"
              name="price"
              onChange={handleFilters}
            >
              <MenuItem value={"1"}>0-100</MenuItem>
              <MenuItem value={"2"}>100-300</MenuItem>
              <MenuItem value={"3"}>300-500</MenuItem>
              <MenuItem value={"4"}>500-800</MenuItem>
              <MenuItem value={"5"}>800-1000</MenuItem>
              <MenuItem value={"6"}>1000+</MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
            </Select>
          </FormControl>
        </FilterContainer>
        <SortContainer>
          <FilterText>Sort Products:</FilterText>
          <FormControl
            variant="standard"
            style={{ minWidth: 120, marginRight: "10px" }}
          >
            <InputLabel id="sort-input-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sort}
              label="Sort"
              name="sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value={"newest"}>Newest</MenuItem>
              <MenuItem value={"asc"}>Price Asc</MenuItem>
              <MenuItem value={"desc"}>Price Desc</MenuItem>
            </Select>
          </FormControl>
        </SortContainer>
      </FilterSortContainer>
      <Products storeId={params.storeId} sort={sort} filters={filters} />
    </Container>
  );
};

export default Store;
