import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../utils/hook";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { updateUserInfo } from "../redux/userRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/8537318/pexels-photo-8537318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Edit = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [newInfo, setNewInfo] = useState({});
  const dispatch = useDispatch();
  async function updateAUserInfo() {
    try {
      const res = await publicRequest.post(
        `/member/update/${currentUser.user_id}`,
        values
      );
      setNewInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  const updateFunc = () => {
    updateAUserInfo();
    dispatch(updateUserInfo(newInfo));
  };
  const { onChange, onSubmit, values } = useForm(updateFunc, {
    user_name: currentUser.user_name,
    user_province: currentUser.user_province,
    user_city: currentUser.user_city,
    user_mobile: currentUser.user_mobile,
  });

  return (
    <Container>
      <Wrapper>
        <Title>EDIT YOUR INFO</Title>
        <Form onSubmit={onSubmit}>
          <Input
            name="user_name"
            placeholder={currentUser.user_name}
            value={values.user_name}
            onChange={onChange}
          />
          <Input
            name="user_province"
            placeholder={currentUser.user_province}
            onChange={onChange}
            value={values.user_province}
          />
          <Input
            name="user_city"
            placeholder="city"
            onChange={onChange}
            value={values.user_city}
          />
          <Input
            name="user_mobile"
            placeholder={currentUser.user_mobile}
            onChange={onChange}
            value={values.user_mobile}
          />
          <Agreement>
            CHECK YOUR INFO AGAIN BEFORE SUBMIT. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Vel iure aliquam sint placeat
            perferendis consequatur eius facilis et error maiores odit quia
            quasi, ullam, deleniti, pariatur nulla asperiores porro possimus.{" "}
          </Agreement>
          <Button type="submit">SUBMIT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Edit;
