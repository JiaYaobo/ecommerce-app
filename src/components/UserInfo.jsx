import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.span``;

const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

const Province = styled.span``;

const City = styled.span``;

const Mobile = styled.span``;

const UserInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Avatar src="https://pic1.zhimg.com/v2-44cf2c3fbd46260759691520e8c09dd4_r.jpg?source=1940ef5c" />
        <Name>Tom</Name>
        <Address>
          <Province>Heilongjiang</Province>
          <City>Mudanjiang</City>
          <Mobile>+85 188888888</Mobile>
        </Address>
      </Wrapper>
    </Container>
  );
};

export default UserInfo;
