import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { deleteFinishedOrder, loadFinishedOrders } from "../redux/apiCalls";
import { useEffect } from "react";

const Container = styled.div`
  flex: 4;
`;

const FinishedOrderListItem = styled.div`
  display: flex;
  align-items: center;
`;

const FinishedOrderListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const FinishedOrderList = () => {
  const inFinishedOrders = useSelector(
    (state) => state.finishedOrder.inFinishedOrders
  );
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    loadFinishedOrders(dispatch, currentUser.user_id);
  }, []);

  const handleDelete = (order_id) => {
    deleteFinishedOrder(dispatch, order_id);
    window.location.reload();
  };

  const columns = [
    { field: "order_id", headerName: "Order ID", width: 200 },
    {
      field: "goods_id",
      headerName: "Goods ID",
      width: 200,
      renderCell: (params) => {
        return (
          <FinishedOrderListItem>{params.row.goods_id}</FinishedOrderListItem>
        );
      },
    },
    { field: "order_total", headerName: "Total", width: 200 },
    {
      field: "comment_status",
      headerName: "Comment",
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
              sx={{ color: "red", curor: "pointer" }}
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
        rows={inFinishedOrders}
        getRowId={(row) => row.order_id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
};

export default FinishedOrderList;
