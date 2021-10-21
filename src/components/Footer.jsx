import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOGO</Logo>
        <Desc>Lorem ipsum dolor sit amet, con Lorem</Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <GitHub />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>item1</ListItem>
          <ListItem>item2</ListItem>
          <ListItem>item3</ListItem>
          <ListItem>item4</ListItem>
          <ListItem>item5</ListItem>
          <ListItem>item5</ListItem>
          <ListItem>item5</ListItem>
          <ListItem>sadas</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room /> some address
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone /> some phone number
        </ContactItem>
        <ContactItem>
          {" "}
          <Email /> some email
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
