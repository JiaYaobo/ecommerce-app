import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../utils/hook";
import { StyledLink } from "../components/styled-components/StyledLink";

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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.button`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  if (error) {
    console.log(error);
  }
  const { onChange, onSubmit, values } = useForm(LoginUser, {
    user_email: "",
    user_password: "",
  });

  function LoginUser() {
    login(dispatch, values);
  }

  return (
    <Container>
      <Wrapper>
        <Title>LOG IN YOUR ACCOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input
            name="user_email"
            placeholder="email"
            onChange={onChange}
            value={values.user_email}
          />
          <Input
            name="user_password"
            placeholder="password"
            onChange={onChange}
            value={values.user_password}
          />
          <Button disabled={isFetching}>LOG in</Button>
          <Link>FORGOT PASSWORD?</Link>
          <StyledLink to="/register">
            <Link>SIGN UP</Link>
          </StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
