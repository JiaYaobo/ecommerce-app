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
        <Logo>SHOES' CABINET</Logo>
        <Desc>Group HomeWork For 2021 Introduce to DataBase</Desc>
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
        <Title>Group Members</Title>
        <List>
          <ListItem>贾耀博</ListItem>
          <ListItem>董佳蓉</ListItem>
          <ListItem>周昊男</ListItem>
          <ListItem>陆静宜</ListItem>
          <ListItem>林书瑜</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room /> <b>Group Number : </b> 2019202265
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone /> The full homework is published on Github
        </ContactItem>
        <ContactItem>
          {" "}
          <Email /> Any Questions contact ybjia@ruc.edu.cn
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
