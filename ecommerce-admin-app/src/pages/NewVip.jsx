import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { useForm } from "../utils/hook";

const Container = styled.div`
  flex: 4;
  margin-left: 100px;
`;

const Title = styled.h1``;

const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }

  & > input {
    padding: 10px;
  }

  & > select {
    padding: 10px;
  }
`;

const Form = styled.form`
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const NewVip = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { onChange, onSubmit, values } = useForm(createVip, {
    user_email: "",
    vip_type: 1,
    discount: 0,
  });

  function createVip() {
    const crtVip = async () => {
      try {
        await publicRequest.post("/vip/" + currentUser.user_id, values);
      } catch (err) {
        console.log(err);
      }
    };
    crtVip();
    window.location.reload();
  }

  return (
    <Container>
      <Title>New Vip</Title>
      <Form onSubmit={onSubmit}>
        <Item>
          <label>Email</label>
          <input
            name="user_email"
            type="text"
            placeholder="fake@fake.com"
            onChange={onChange}
            value={values.user_email}
          />
        </Item>
        <Item>
          <label>Type</label>
          <select name="vip_type" onChange={onChange} value={values.vip_type}>
            <option value={1}>Gold</option>
            <option value={2}>Silver</option>
            <option value={3}>Bronze</option>
          </select>
        </Item>
        <Item>
          <label>Discount</label>
          <input
            name="discount"
            type="number"
            onChange={onChange}
            value={values.discount}
          />
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};

export default NewVip;
