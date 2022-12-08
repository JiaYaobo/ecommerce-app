import { Add, ArrowDownwardOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { StyledLink } from "../components/styled-components/StyledLink";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { publicRequest } from "../requestMethods";
import Comments from "../components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/apiCalls";
import { Button } from "@material-ui/core";
import TDShoe from "../components/TDShoe";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ShowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const StoreEnter = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-decoration: underline;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Stock = styled.span`
  font-weight: 200;
  font-size: 18px;
  margin-left: 20px;
`;

const Discount = styled.span``;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;

  &.chosen {
    border: 2px solid teal;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  & > .button {
    cursor: pointer;
  }
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const SubmitButton = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ShipContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ShipTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const ShipAmount = styled.span`
  margin-left: 10px;
`;

const Hr = styled.hr`
  color: grey;
  margin-bottom: 10px;
`;

const Product = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const colorSets = ["black", "blue", "red", "yellow", "green", "purple"];
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(40);
  const [ship, setShip] = useState(10);
  const [color, setColor] = useState("black");
  const [tdOrPlain, setTdOrPlain] = useState(0);
  const [discount, setDiscount] = useState(0);
  const params = useParams();
  const handleAddClick = () => {
    setAmount(amount + 1);
  };
  const handleRemoveClick = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let order = {
      user_id: currentUser?.user_id,
      store_id: product?.store_id,
      goods_id: product?.goods_id,
      goods_num: amount,
      goods_ship_cost: ship,
      goods_size: size,
      goods_color: color,
      order_total: (amount * product?.goods_price * (100 - discount)) / 100,
      order_expect_time: 3,
    };
    addToCart(dispatch, order);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await publicRequest.get(`/product/${params.productId}`);
      const data = await res.data;
      setProduct(data);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchDiscount = async () => {
      const res = await publicRequest.get(
        `/vip/discount/${currentUser.user_id}/${params.productId}`
      );
      const data = await res.data;
      console.log(data);
      const dis = data.length === 0 ? 0 : data[0].discount;
      setDiscount(dis);
    };
    fetchDiscount();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ShowContainer>
          <ButtonContainer>
            <Button variant="contained" onClick={() => setTdOrPlain(0)}>
              PLAIN
            </Button>
            <Button variant="contained" onClick={() => setTdOrPlain(1)}>
              3D
            </Button>
          </ButtonContainer>
          <ImgContainer>
            {tdOrPlain === 0 ? (
              <Image src={product?.goods_image} />
            ) : (
              <TDShoe />
            )}
          </ImgContainer>
        </ShowContainer>
        <InfoContainer>
          <Title>{product?.goods_name}</Title>
          <StyledLink to={`/store/${product?.store_id}`}>
            <StoreEnter>ENTER STORE</StoreEnter>
          </StyledLink>
          <Desc>{product?.goods_info}</Desc>
          <Price>$ {product?.goods_price * amount}</Price>
          <ArrowDownwardOutlined />
          <Discount>{discount} %</Discount>
          <Stock>stock : {product?.goods_stock}</Stock>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {colorSets.map((c) => (
                <FilterColor
                  color={c}
                  onClick={() => setColor(c)}
                  className={color === c && "chosen"}
                />
              ))}
            </Filter>
            <Filter onChange={handleSizeChange}>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36</FilterSizeOption>
                <FilterSizeOption>37</FilterSizeOption>
                <FilterSizeOption>38</FilterSizeOption>
                <FilterSizeOption>39</FilterSizeOption>
                <FilterSizeOption>40</FilterSizeOption>
                <FilterSizeOption>41</FilterSizeOption>
                <FilterSizeOption>42</FilterSizeOption>
                <FilterSizeOption>43</FilterSizeOption>
                <FilterSizeOption>44</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove className="button" onClick={handleRemoveClick} />
              <Amount>{amount}</Amount>
              <Add className="button" onClick={handleAddClick} />
            </AmountContainer>
            <SubmitButton onClick={handleSubmit}>Add to Cart</SubmitButton>
          </AddContainer>
          <ShipContainer>
            <ShipTitle>Expected Ship Cost: </ShipTitle>
            <ShipAmount>$ {ship}</ShipAmount>
          </ShipContainer>
        </InfoContainer>
      </Wrapper>
      <Hr />
      <Comments productId={params.productId} />
    </Container>
  );
};

export default Product;
