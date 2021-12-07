import styled from "styled-components";
import { Tabs, Tab, Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import TabPanel from "../components/TabPanel";
import Chart from "../components/Chart";
import { userData } from "../dummyData";
import FeaturedInfo from "../components/FeaturedInfo";
import UserInfo from "../components/UserInfo";
import OrderList from "../components/OrderList";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTransOrders,
  loadFinishedOrders,
  loadWaitOrders,
} from "../redux/apiCalls";
const Container = styled.div`
  display: flex;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const allyProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  useEffect(() => {
    loadTransOrders(dispatch, currentUser.user_id);
    loadFinishedOrders(dispatch, currentUser.user_id);
    loadWaitOrders(dispatch, currentUser.user_id);
  }, []);

  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", flex: "4" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="All Orders" {...allyProps(0)} />
          <Tab label="Waiting" {...allyProps(1)} />
          <Tab label="In Transit" {...allyProps(2)} />
          <Tab label="Finsihed" {...allyProps(3)} />
          <Tab label="User Stats" {...allyProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <OrderList all />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OrderList wait />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OrderList trans />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <OrderList finished />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FeaturedInfo />
          <Chart data={userData} title="Analytics" grid dataKey="Active User" />
        </TabPanel>
      </Box>
      <UserInfo />
    </Container>
  );
};

export default Profile;
