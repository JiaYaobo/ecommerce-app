import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 85%;
`;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default TabPanel;
