import { format } from "timeago.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  &.own {
    align-items: flex-end;
  }

  &.own .messageText {
    background-color: rgb(231, 225, 225);
    color: black;
  }
`;

const MessageTop = styled.div`
  display: flex;
`;

const MessageImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const MessageText = styled.p`
  padding: 10px;
  border-radius: 20px;
  background-color: teal;
  color: white;
  max-width: 300px;
`;

const MessageBottom = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const Message = ({ message, own }) => {
  return (
    <Container className={own ? "message own" : "message"}>
      <MessageTop>
        <MessageImg src="https://images.pexels.com/photos/5612320/pexels-photo-5612320.jpeg?cs=srgb&dl=pexels-thirdman-5612320.jpg&fm=jpg" />
        <MessageText className={"messageText"}>
          {message?.message_text}
        </MessageText>
      </MessageTop>
      <MessageBottom>{format(message?.created_at)}</MessageBottom>
    </Container>
  );
};

export default Message;
