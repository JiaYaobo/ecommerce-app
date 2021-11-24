import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { Remove, Add } from "@material-ui/icons";
const Product = styled.div`
  display: flex;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartOrder = ({ orderId, key }) => {
  const [orderInfo, setOrderInfo] = useState({});
  const getCartOrder = async () => {
    try {
      const res = await publicRequest.get(
        `/order/cart_product_info/${orderId}`
      );
      setOrderInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCartOrder();
  }, []);
  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={orderInfo?.goods_image} />
          <Details>
            <ProductName>
              {" "}
              <b>Product : </b> {orderInfo?.goods_name}
            </ProductName>
            <ProductId>
              {" "}
              <b>ID : </b> {orderInfo?.goods_id}
            </ProductId>
            <ProductColor color="black" />
            <ProductSize>
              {" "}
              <b>Size : </b> XL{" "}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add />
            <ProductAmount>{orderInfo?.goods_num}</ProductAmount>
            <Remove />
          </ProductAmountContainer>
          <ProductPrice>$ {orderInfo?.order_total}</ProductPrice>
        </PriceDetail>
      </Product>
      <Hr />
    </>
  );
};

export default CartOrder;
