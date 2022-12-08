import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import styled from "styled-components";
import { StyledLink } from "./styled-components/StyledLink";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  z-index: 88;
  top: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: teal;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0;
  background-color: crimson;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ECOMMERCE ADMIN</Logo>
        </Left>
        <Right>
          <StyledLink to="/messenger">
            <IconContainer>
              <NotificationsNone />
              <IconBadge>1</IconBadge>
            </IconContainer>
          </StyledLink>
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
