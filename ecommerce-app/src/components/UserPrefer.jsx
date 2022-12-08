import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const Sub = styled.span`
  font-size: 15px;
  color: gray;
`;

const UserPrefer = () => {
  const [favProd, setFavProd] = useState({});
  const [favStore, setFavStore] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const [favBrand, setFavBrand] = useState({});

  useEffect(() => {
    const fetchFavProd = async () => {
      try {
        const res = await publicRequest.get(
          "/member/fav/" + currentUser.user_id
        );
        const data = await res.data;
        setFavProd(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFavProd();
  }, []);

  useEffect(() => {
    const fetchFavStore = async () => {
      try {
        const res = await publicRequest.get(
          "/member/fav_store/" + currentUser.user_id
        );
        const data = await res.data;
        setFavStore(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFavStore();
  }, []);

  useEffect(() => {
    const fetchFavBrand = async () => {
      try {
        const res = await publicRequest.get(
          "/member/fav_brand/" + currentUser.user_id
        );
        const data = await res.data;
        setFavBrand(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFavBrand();
  }, []);

  return (
    <Container>
      <Item>
        <Title>Favorite Product</Title>
        <Image src={favProd?.goods_image} />
        <Sub>{favProd?.goods_name}</Sub>
      </Item>
      <Item>
        <Title>Favorite Store</Title>
        <Image src={favStore?.user_profile} />
        <Sub>{favStore?.user_name}</Sub>
      </Item>
      <Item>
        <Title>Favorite Brand</Title>
        <Sub>{favBrand.goods_brand}</Sub>
      </Item>
    </Container>
  );
};

export default UserPrefer;
