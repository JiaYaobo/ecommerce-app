import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {
  deleteWaitOrder,
  loadWaitOrders,
  waitToTrans,
} from "../redux/apiCalls";
import { useEffect } from "react";

const Container = styled.div`
  flex: 4;
`;

const WaitOrderListItem = styled.div`
  display: flex;
  align-items: center;
`;

const WaitOrderListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const WaitOrderList = () => {
  const inWaitOrders = useSelector((state) => state.waitOrder.inWaitOrders);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    loadWaitOrders(dispatch, currentUser.user_id);
  }, []);

  const handleConfirm = (orderId) => {
    waitToTrans(dispatch, orderId);
  };

  const handleDelete = (order_id) => {
    deleteWaitOrder(dispatch, order_id);
    window.location.reload();
  };

  const columns = [
    { field: "order_id", headerName: "Order ID", width: 200 },
    {
      field: "goods_id",
      headerName: "Goods ID",
      width: 200,
      renderCell: (params) => {
        return <WaitOrderListItem>{params.row.goods_id}</WaitOrderListItem>;
      },
    },
    { field: "goods_num", headerName: "Quantity", width: 200 },
    {
      field: "goods_ship_cost",
      headerName: "Ship",
      width: 150,
    },
    {
      field: "order_total",
      headerName: "Total",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <WaitOrderListEdit
              onClick={() => handleConfirm(params.row.order_id)}
            >
              Confirm
            </WaitOrderListEdit>
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
        rows={inWaitOrders}
        getRowId={(row) => row.order_id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
};

export default WaitOrderList;
