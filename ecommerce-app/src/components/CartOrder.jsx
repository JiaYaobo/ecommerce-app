import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledLink } from "./styled-components/StyledLink";
import { publicRequest } from "../requestMethods";
import { Remove, Add, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeOneOnCartOrder,
  addOneOnCartOrder,
  deleteFromOrder,
} from "../redux/apiCalls";
import { Checkbox } from "@material-ui/core";
import { addOrderInCheck, removeOrderInCheck } from "../redux/cartOrderRedux";
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  & > .button {
    cursor: pointer;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const StoreName = styled.span``;

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
  & > .button {
    cursor: pointer;
  }
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

const CartOrder = ({ orderId, index }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});
  const inCartOrders = useSelector((state) => state.cartOrder.inCartOrders);
  const handleCheck = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      dispatch(addOrderInCheck(orderId));
    } else {
      dispatch(removeOrderInCheck(orderId));
    }
    setChecked(event.target.checked);
  };
  const getCartOrder = async () => {
    try {
      const res = await publicRequest.get(`/order/product_info/${orderId}`);
      setOrderInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveClick = () => {
    removeOneOnCartOrder(dispatch, orderId);
  };
  const handleAddClick = () => {
    addOneOnCartOrder(dispatch, orderId);
  };
  const handleDeleteClick = () => {
    deleteFromOrder(dispatch, orderId);
  };
  useEffect(() => {
    getCartOrder();
  }, []);
  return (
    <>
      <Product>
        <ProductDetail>
          <Checkbox
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Image src={orderInfo?.goods_image} />
          <Details>
            <StyledLink to={`/product/${inCartOrders[index]?.goods_id}`}>
              <ProductName>
                {" "}
                <b>Product : </b> {orderInfo?.goods_name}
              </ProductName>
            </StyledLink>
            <ProductId>
              {" "}
              <b>ID : </b> {inCartOrders[index]?.goods_id || 0}
            </ProductId>
            <StyledLink to={`/store/${orderInfo?.store_id}`}>
              <StoreName>
                <b>Store : </b>
                {orderInfo?.user_name}
              </StoreName>
            </StyledLink>
            <ProductColor color={inCartOrders[index]?.goods_color} />
            <ProductSize>
              {" "}
              <b>Size : </b> {inCartOrders[index]?.goods_size}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Remove className="button remove" onClick={handleRemoveClick} />
            <ProductAmount>{inCartOrders[index]?.goods_num}</ProductAmount>
            <Add className="button add" onClick={handleAddClick} />
          </ProductAmountContainer>
          <ProductPrice>$ {inCartOrders[index]?.order_total}</ProductPrice>
        </PriceDetail>
        <Delete className="button delete" onClick={handleDeleteClick} />
      </Product>
      <Hr />
    </>
  );
};

export default CartOrder;
