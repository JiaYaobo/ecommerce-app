import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { StyledLink } from "../components/styled-components/StyledLink";
import { publicRequest } from "../requestMethods";
import { useForm } from "../utils/hook";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const VipTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VipTitle = styled.h1``;

const VipAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;

const Options = styled.option``;

const FormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Vip = () => {
  const params = useParams();
  const [vip, setVip] = useState({});

  useEffect(() => {
    const fetchVip = async () => {
      try {
        const res = await publicRequest.get("/vip/info/" + params.vipId);
        const data = res.data;
        setVip(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVip();
  }, []);

  const { onChange, onSubmit, values } = useForm(updateVip, {
    vip_type: 1,
    discount: 0,
  });

  function updateVip() {
    const updtVip = async () => {
      try {
        await publicRequest.post("/vip/update/" + params.vipId, values);
      } catch (err) {
        console.log(err);
      }
    };
    updtVip();
  }

  return (
    <Container>
      <VipTitleContainer>
        <VipTitle>{vip?.user_name}</VipTitle>
        <StyledLink to="/new_vip">
          <VipAddButton>ADD + </VipAddButton>
        </StyledLink>
      </VipTitleContainer>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <FormLabel>Type</FormLabel>
          <Select
            id="vip_type"
            name="vip_type"
            value={values.vip_type}
            onChange={onChange}
          >
            <Options>1</Options>
            <Options>2</Options>
            <Options>3</Options>
          </Select>
          <FormLabel>Discount</FormLabel>
          <FormInput
            name="discount"
            type="number"
            value={values.discount}
            onChange={onChange}
          />
          <Button type="submit">Update</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Vip;
