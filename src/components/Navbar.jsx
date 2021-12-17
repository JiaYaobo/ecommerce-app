import { Avatar, Badge } from "@material-ui/core";
import { NotificationsNone, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StyledLink } from "./styled-components/StyledLink";
import { StyledSearch } from "./styled-components/StyledSearch";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background-color: teal;
    transform-origin: left;
    transition: all 2s ease;
  }

  &.active {
    span {
      &:first-child {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
`;

const Line1 = styled.span``;

const Line2 = styled.span``;

const Line3 = styled.span``;

const Language = styled.span`
  margin-left: 20px;
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 5px;
`;

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const inCartOrders = useSelector((state) => state.cartOrder.inCartOrders);
  const { currentUser } = useSelector((state) => state.user);

  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {}, [inCartOrders]);
  useEffect(() => {}, [currentUser]);
  const RightElemnts = currentUser ? (
    <>
      <MenuItem>Hello, {currentUser.user_name} </MenuItem>
      <StyledLink to="/me">
        <Avatar sx={{ width: 16, height: 16 }}>
          {currentUser.user_name[0]}
        </Avatar>
      </StyledLink>
      <MenuItem>
        <StyledLink to="/message">
          <Badge color="primary">
            <NotificationsNone />
          </Badge>
        </StyledLink>
        <StyledLink to="/cart" style={{ textDecoration: "none" }}>
          <Badge badgeContent={inCartOrders.length} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </StyledLink>
      </MenuItem>
    </>
  ) : (
    <>
      <StyledLink to="/login">
        <MenuItem>SIGN IN</MenuItem>
      </StyledLink>
    </>
  );
  return (
    <Container>
      <Wrapper>
        <Left>
          <Hamburger
            className={menuOpen && "active"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Line1></Line1>
            <Line2></Line2>
            <Line3></Line3>
          </Hamburger>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              name="search"
              value={searchInput}
              onChange={(e) => onChange(e)}
            />
            <StyledLink to={`/search?q=${searchInput}`}>
              <StyledSearch />
            </StyledLink>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOES' CABINET</Logo>
        </Center>
        <Right>{RightElemnts}</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
