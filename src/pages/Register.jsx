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
    username: "",
    home_address: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <Container>
      <Wrapper>
        <Title>CREATE YOUR ACOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input
            name="username"
            placeholder="username"
            value={values.username}
            onChange={onChange}
          />
          <Input
            name="email"
            placeholder="email"
            onChange={onChange}
            value={values.email}
          />
          <Input
            name="home_address"
            placeholder="city"
            onChange={onChange}
            value={values.home_address}
          />
          <Input
            name="mobile"
            placeholder="mobile"
            onChange={onChange}
            value={values.mobile}
          />
          <Input
            name="password"
            placeholder="password"
            onChange={onChange}
            value={values.password}
          />
          <Input
            name="confirmPassword"
            placeholder="confirm password"
            onChange={onChange}
            value={values.confirmPassword}
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
