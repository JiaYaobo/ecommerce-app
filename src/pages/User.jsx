import styled from "styled-components";
import { Tabs, Tab, Box } from "@material-ui/core";
import { useState } from "react";

const Container = styled.div``;

const User = () => {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="All Orders" />
          <Tab value="two" label="In Transit" />
          <Tab value="three" label="Finsihed" />
          <Tab value="four" label="User Stats" />
        </Tabs>
      </Box>
    </Container>
  );
};

export default User;
