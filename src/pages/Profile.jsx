import styled from "styled-components";
import { Tabs, Tab, Box } from "@material-ui/core";
import { useState } from "react";
import TabPanel from "../components/TabPanel";
import Chart from "../components/Chart";
import { userData } from "../dummyData";
import FeaturedInfo from "../components/FeaturedInfo";
import UserInfo from "../components/UserInfo";
import OrderList from "../components/OrderList";

const Container = styled.div`
  display: flex;
`;

const Profile = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allyProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

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
          <Tab label="In Transit" {...allyProps(1)} />
          <Tab label="Finsihed" {...allyProps(2)} />
          <Tab label="User Stats" {...allyProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <OrderList />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FeaturedInfo />
          <Chart data={userData} title="Analytics" grid dataKey="Active User" />
        </TabPanel>
      </Box>
      <UserInfo />
    </Container>
  );
};

export default Profile;
