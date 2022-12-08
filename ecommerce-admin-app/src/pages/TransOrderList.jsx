import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { deleteTransOrder, loadTransOrders } from "../redux/apiCalls";

const Container = styled.div`
  flex: 4;
`;

const TransOrderListItem = styled.div`
  display: flex;
  align-items: center;
`;

const TransOrderListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const TransOrderList = () => {
  const inTransOrders = useSelector((state) => state.transOrder.inTransOrders);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    loadTransOrders(dispatch, currentUser.user_id);
  }, []);

  const handleDelete = (order_id) => {
    deleteTransOrder(dispatch, order_id);
    window.location.reload();
  };

  const columns = [
    { field: "order_id", headerName: "ORDER ID", width: 200 },
    {
      field: "goods_id",
      headerName: "Goods ID",
      width: 200,
      renderCell: (params) => {
        return <TransOrderListItem>{params.row.goods_id}</TransOrderListItem>;
      },
    },
    { field: "order_total", headerName: "Total", width: 200 },
    {
      field: "order_expect_time",
      headerName: "Expected Time",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              style={{ color: "red", curor: "pointer" }}
              onClick={() => handleDelete(params.row.order_id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={inTransOrders}
        getRowId={(row) => row.order_id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
};

export default TransOrderList;
