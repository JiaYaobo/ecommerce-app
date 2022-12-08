import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  flex: 4;
`;

const Analytics = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await publicRequest.get("/stats/province");
        const data = await res.data;
        setStats(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStats();
  }, []);
  const columns = [
    { field: "user_province", headerName: "Province", width: 200 },
    {
      field: "cost_average",
      headerName: "Average",
      width: 200,
    },
    { field: "cost_max", headerName: "Max", width: 200 },
    {
      field: "cost_min",
      headerName: "Min",
      width: 200,
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={stats}
        getRowId={(row) => row.user_province}
        disableSelectionOnClick
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </Container>
  );
};

export default Analytics;
