import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: rgb(240, 238, 238);
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.span`
  font-weight: 500;
  margin-left: 5px;
`;

const Conversation = ({ conversationId }) => {
  const [store, setStore] = useState({});
  useEffect(() => {
    const fetchStore = async () => {
      const res = await publicRequest.get(`/chat/store_info/${conversationId}`);
      const data = await res.data;
      setStore(data);
    };
    fetchStore();
  }, []);
  return (
    <Container>
      <Image src="https://images.pexels.com/photos/2894230/pexels-photo-2894230.jpeg?cs=srgb&dl=pexels-eunhyuk-ahn-2894230.jpg&fm=jpg" />
      <Name>{store?.user_name}</Name>
    </Container>
  );
};

export default Conversation;
