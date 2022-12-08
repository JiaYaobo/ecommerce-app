import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const MenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: linear-gradient(to right, #c2e59c, #64b3f4);
  position: fixed;
  top: 90px;
  left: -300px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 1s ease;
  opacity: 0.95;
  &.active {
    left: 0;
  }
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  color: #6d6666;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const MenuItemContainer = styled.li`
  margin-top: 15px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItemTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;

const MenuItemSubItem = styled.span`
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    font-weight: 500;
  }
`;

const Menu = ({ menuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();

  const handleClick = (e, callback) => {
    e.preventDefault();
    setMenuOpen(false);
    callback && callback();
  };

  const Logout = () => {
    logout(dispatch);
  };

  return (
    <MenuContainer className={menuOpen && "active"}>
      <MenuList>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <MenuItemTitle>Home</MenuItemTitle>
            </Link>
          </MenuItem>
        </MenuItemContainer>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem>
            <Link
              to="/products/all"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItemTitle>Explore</MenuItemTitle>
            </Link>
          </MenuItem>
        </MenuItemContainer>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem>
            <Link to="/me" style={{ textDecoration: "none", color: "inherit" }}>
              <MenuItemTitle>Your Account</MenuItemTitle>
            </Link>
          </MenuItem>
        </MenuItemContainer>
        <MenuItemContainer onClick={(e) => handleClick(e, Logout)}>
          <MenuItem>
            <MenuItemTitle>Log out</MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
