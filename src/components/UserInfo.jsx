import { useSelector } from "react-redux";
import styled from "styled-components";
import { StyledLink } from "./styled-components/StyledLink";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #8d8585;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 1px solid teal;
  object-fit: cover;
`;

const Name = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Province = styled.span`
  font-size: 24px;
  margin-bottom: 10px;
`;

const City = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Mobile = styled.span`
  font-size: 20px;
  margin-bottom: 40px;
`;

const Edit = styled.button`
  width: 200px;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  background-color: #117446;
  color: white;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Save = styled.button`
  width: 200px;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  margin-bottom: 10px;
`;

const UserInfo = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Avatar src="https://pic1.zhimg.com/v2-44cf2c3fbd46260759691520e8c09dd4_r.jpg?source=1940ef5c" />
        <Name>
          {" "}
          <b>Username : </b> {currentUser?.user_name}
        </Name>
        <Address>
          <Province>
            {" "}
            <b>Province : </b> {currentUser?.user_province}
          </Province>
          <City>
            {" "}
            <b>City : </b> {currentUser?.user_city}
          </City>
        </Address>
        <Mobile>
          {" "}
          <b>Contact : </b> {currentUser?.user_mobile}
        </Mobile>
        <StyledLink to="/edit">
          <Edit>EDIT</Edit>
        </StyledLink>
      </Wrapper>
    </Container>
  );
};

export default UserInfo;
