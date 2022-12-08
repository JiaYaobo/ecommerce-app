import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { StyledLink } from "../components/styled-components/StyledLink";
import { getVips } from "../redux/apiCalls";

const Container = styled.div`
  flex: 4;
`;

const VipListItem = styled.div`
  display: flex;
  align-items: center;
`;

const VipListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const VipListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const VipList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const vips = useSelector((state) => state.vip.vips);
  const dispatch = useDispatch();

  useEffect(() => {
    getVips(dispatch, currentUser.user_id);
  }, []);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "user_id", headerName: "ID", width: 90 },
    {
      field: "Vip",
      headerName: "Vip",
      width: 200,
      renderCell: (params) => {
        return (
          <VipListItem>
            <VipListImg src={params.row.user_profile} alt="" />
            {params.row.user_name}
          </VipListItem>
        );
      },
    },
    { field: "vip_type", headerName: "Type", width: 200 },
    {
      field: "discount",
      headerName: "Discount",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <StyledLink to={"/vip/" + params.row.user_id}>
              <VipListEdit>Edit</VipListEdit>
            </StyledLink>
            <DeleteOutline
              className="VipListDelete"
              onClick={() => handleDelete(params.row.user_id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={vips}
        getRowId={(row) => row.user_id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
};

export default VipList;
