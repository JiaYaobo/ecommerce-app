import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/apiCalls";
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

const NewProduct = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(createNewProd, {
    goods_image: "",
    goods_info: "",
    goods_name: "",
    goods_brand: "anta",
    goods_price: 100,
    goods_stock: 100,
    goods_func: "",
    goods_status: 1,
    goods_sex: "M",
  });

  function createNewProd() {
    addProduct(currentUser.user_id, values, dispatch);
  }

  return (
    <Container>
      <Title>New Product</Title>
      <Form onSubmit={onSubmit}>
        <Item>
          <label>Image</label>
          <input
            name="goods_image"
            type="text"
            placeholder="url link"
            onChange={onChange}
            value={values.goods_image}
          />
        </Item>
        <Item>
          <label>Name</label>
          <input
            name="goods_name"
            type="text"
            placeholder="Apple Airpods"
            onChange={onChange}
            value={values.goods_name}
          />
        </Item>
        <Item>
          <label>Description</label>
          <input
            name="goods_info"
            type="text"
            placeholder="description..."
            onChange={onChange}
            value={values.goods_info}
          />
        </Item>
        <Item>
          <label>Price</label>
          <input
            name="goods_price"
            type="number"
            placeholder="100"
            onChange={onChange}
            value={values.goods_price}
          />
        </Item>
        <Item>
          <label>Stock</label>
          <input
            name="goods_stock"
            type="number"
            placeholder="100"
            onChange={onChange}
            value={values.goods_stock}
          />
        </Item>
        <Item>
          <label>Brand</label>
          <select
            name="goods_brand"
            onChange={onChange}
            value={values.goods_brand}
          >
            <option value={"anta"}>anta</option>
            <option value={"adidas"}>adidas</option>
            <option value={"xtep"}>xtep</option>
            <option value={"nb"}>new balance</option>
          </select>
        </Item>
        <Item>
          <label>Functions</label>
          <input
            name="goods_func"
            type="text"
            placeholder="ABCDEFG"
            onChange={onChange}
            value={values.goods_func}
          />
        </Item>
        <Item>
          <label>OnSale</label>
          <select
            name="goods_status"
            onChange={onChange}
            value={values.goods_status}
          >
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </Item>
        <Item>
          <label>Sex</label>
          <select name="goods_sex" onChange={onChange} value={values.goods_sex}>
            <option value={"M"}>Male</option>
            <option value={"F"}>Female</option>
            <option value={"U"}>All</option>
          </select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
