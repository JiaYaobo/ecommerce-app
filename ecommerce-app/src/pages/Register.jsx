import styled from "styled-components";
import { useForm } from "../utils/hook";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://evanevanstours.com/blog/wp-content/uploads/2019/04/running-shoes-flat-lay-scaled.jpg")
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

const Register = () => {
  const createMember = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/register", values);
    } catch (e) {
      console.log(e);
    }
  };

  function registerMember() {
    createMember();
  }

  const { onChange, onSubmit, values } = useForm(registerMember, {
    user_name: "",
    user_province: "",
    user_city: "",
    user_mobile: "",
    user_email: "",
    user_password: "",
  });
  return (
    <Container>
      <Wrapper>
        <Title>CREATE YOUR ACOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input
            name="user_name"
            placeholder="username"
            value={values.user_name}
            onChange={onChange}
          />
          <Input
            name="user_email"
            placeholder="email"
            onChange={onChange}
            value={values.user_email}
          />
          <Input
            name="user_province"
            placeholder="Province"
            onChange={onChange}
            value={values.user_province}
          />
          <Input
            name="user_city"
            placeholder="City"
            onChange={onChange}
            value={values.user_city}
          />
          <Input
            name="user_mobile"
            placeholder="mobile"
            onChange={onChange}
            value={values.user_mobile}
          />
          <Input
            name="user_password"
            placeholder="password"
            onChange={onChange}
            value={values.user_password}
          />
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            sequi, delectus reiciendis cupiditate reprehenderit debitis ipsum,
            quasi voluptate hic aspernatur sint asperiores doloremque tempora
            impedit dolores excepturi quibusdam quidem exercitationem?
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
