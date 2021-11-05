import styled from "styled-components";

const MenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: linear-gradient(to right, #c2e59c, #64b3f4);
  position: fixed;
  top: 0;
  left: -300px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

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
  color: white;
  width: 60%;
`;

const MenuItemContainer = styled.li`
  margin-bottom: 25px;

  &:hover {
    font-weight: 500;
  }
`;

const MenuItem = styled.a`
  font-size: inherit;
  color: inherit;
  text-decoration: none;
`;

const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  };

  return (
    <MenuContainer className={menuOpen && "active"}>
      <MenuList>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem href="#">Home</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem href="#">Department</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem href="#">Your Account</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer onClick={(e) => handleClick(e)}>
          <MenuItem href="#">Log Out</MenuItem>
        </MenuItemContainer>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
