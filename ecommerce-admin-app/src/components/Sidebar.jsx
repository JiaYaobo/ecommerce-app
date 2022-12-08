import styled from "styled-components";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { StyledLink } from "./styled-components/StyledLink";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(186, 187, 187);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(240, 255, 255);
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <StyledLink to="/">
              <ListItem>
                <LineStyle
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Home
              </ListItem>
            </StyledLink>
            <StyledLink to="/analytics">
              <ListItem>
                <Timeline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                User Analytics
              </ListItem>
            </StyledLink>
            <StyledLink to="/feature">
              <ListItem>
                <TrendingUp
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Store Feature
              </ListItem>
            </StyledLink>
          </List>
        </Menu>
        <Menu>
          <Title>Orders</Title>
          <List>
            <StyledLink to="/waitOrders">
              <ListItem>
                <LineStyle
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Wait Orders
              </ListItem>
            </StyledLink>
            <StyledLink to="/transOrders">
              <ListItem>
                <Timeline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Trans Orders
              </ListItem>
            </StyledLink>
            <StyledLink to="/finishedOrders">
              <ListItem>
                <TrendingUp
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Finished Orders
              </ListItem>
            </StyledLink>
          </List>
        </Menu>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <StyledLink to="/vips">
              <ListItem>
                <Timeline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Vips
              </ListItem>
            </StyledLink>
            <StyledLink to="/products">
              <ListItem>
                <TrendingUp
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Products
              </ListItem>
            </StyledLink>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
