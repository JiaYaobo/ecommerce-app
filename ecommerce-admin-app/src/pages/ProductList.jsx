import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../redux/apiCalls";

const Container = styled.div`
  flex: 4;
`;

const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

const ProductListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const ProductList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    loadProducts(dispatch, currentUser.user_id);
  }, []);

  const columns = [
    { field: "goods_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImg src={params.row.goods_image} alt="" />
            {params.row.goods_name}
          </ProductListItem>
        );
      },
    },
    { field: "goods_stock", headerName: "Stock", width: 200 },
    {
      field: "goods_status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "goods_price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.goods_id}>
              <ProductListEdit>Edit</ProductListEdit>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={products}
        getRowId={(row) => row.goods_id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
