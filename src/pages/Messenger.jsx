import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const ChatMenu = styled.div``;

const ChatMenuWrapper = styled.div``;

const ChatMenuInput = styled.input``;

const ChatBox = styled.div``;

const ChatBoxWrapper = styled.div``;

const ChatBoxTop = styled.div``;

const ChatBoxBottom = styled.div``;

const TextArea = styled.textarea``;

const Button = styled.button``;

const Messenger = () => {
  return (
    <Container>
      <Wrapper>
        <ChatMenu>
          <ChatMenuWrapper>
            <ChatMenuInput />
          </ChatMenuWrapper>
        </ChatMenu>
      </Wrapper>
      <ChatBox>
        <ChatBoxWrapper>
          <ChatBoxTop></ChatBoxTop>
          <ChatBoxBottom>
            <TextArea></TextArea>
            <Button></Button>
          </ChatBoxBottom>
        </ChatBoxWrapper>
      </ChatBox>
    </Container>
  );
};

export default Messenger;
