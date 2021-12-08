import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Conversation from "../components/Conversation";
import Message from "../components/Message";
import { io } from "socket.io-client";

const Container = styled.div`
  height: 600px;
  display: flex;
`;

const ChatMenu = styled.div`
  flex: 1;
`;

const ChatMenuWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

const ChatMenuInput = styled.input`
  width: 90%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid gray;
`;

const ChatBox = styled.div`
  flex: 4;
`;

const ChatBoxWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

const ChatBoxTop = styled.div`
  height: 70%;
  overflow-y: scroll;
  padding-right: 10px;
`;

const ChatBoxBottom = styled.div`
  height: 20%;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 90px;
  padding: 10px;
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: teal;
  color: white;
`;

const NoConversations = styled.div`
  position: absolute;
  top: 10%;
  font-size: 50px;
  color: rgb(212, 208, 208);
  cursor: default;
`;

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arriveMessage, setArriveMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();
  const fetchConversations = async () => {
    try {
      const res = await publicRequest.get(
        `/chat/conversations_all/${currentUser.user_id}`
      );
      const data = await res.data;
      console.log(data);
      setConversations(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender_id: currentUser.user_id,
      receiver_id: currentChat.store_id,
      message_text: newMessage,
      conversation_id: currentChat.conversation_id,
    };
    try {
      const res = await publicRequest.post(`/chat/messages`, message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArriveMessage({
        sender_id: data.sender_id,
        message_text: data.message_text,
        created_at: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", currentUser.user_id);
    // socket.current.on("getUsers", (users) => {
    //   setOnlineUsers(
    //     user.followings.filter((f) => users.some((u) => u.userId === f))
    //   );
    //   console.log(onlineUsers);
    // });
  }, [currentUser]);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await publicRequest.get(
          "/chat/messages/" + currentChat.conversation_id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <ChatMenu>
        <ChatMenuWrapper>
          <ChatMenuInput type="text" placeholder="Search for stores" />
          {conversations.length !== 0 &&
            conversations?.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation
                  conversationId={c.conversation_id}
                  currentUser={currentUser}
                  key={c.conversation_id}
                />
              </div>
            ))}
        </ChatMenuWrapper>
      </ChatMenu>
      <ChatBox>
        <ChatBoxWrapper>
          {currentChat ? (
            <>
              <ChatBoxTop>
                {" "}
                {messages?.map((m) => (
                  <div ref={scrollRef}>
                    <Message
                      message={m}
                      own={m?.sender_id === currentUser.user_id}
                    />
                  </div>
                ))}
              </ChatBoxTop>
              <ChatBoxBottom>
                <TextArea
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></TextArea>
                <Button onClick={handleSubmit}>SEND</Button>
              </ChatBoxBottom>
            </>
          ) : (
            <NoConversations>Open a conversation</NoConversations>
          )}
        </ChatBoxWrapper>
      </ChatBox>
    </Container>
  );
};

export default Messenger;
