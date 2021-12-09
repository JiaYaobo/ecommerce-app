import styled from "styled-components";
import { StyledLink } from "./styled-components/StyledLink";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  confirmTransOrder,
  cancelTransOrder,
  cancelWaitOrder,
} from "../redux/apiCalls";
import CommentBox from "./CommentBox";
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StoreName = styled.span``;

const OrderStatus = styled.span``;

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GoodsImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const GoodsName = styled.span``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 300;
`;

const TotalCost = styled.span``;

const TotalNum = styled.span``;

const ColorContainer = styled.div`
  display: flex;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => {
    if (props.buttonType === "confirm") {
      return "green";
    } else if (props.buttonType === "check") {
      return "brown";
    } else if (props.buttonType === "cancel") {
      return "crimson";
    } else {
      return "purple";
    }
  }};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;

const Order = (props) => {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [commentStatus, setCommentStatus] = useState(
    props.order.comment_status
  );
  const getProductInfo = async () => {
    try {
      const res = await publicRequest.get(
        `/order/product_info/${props.order.order_id}`
      );
      const data = await res.data;
      setProductInfo((prev) => ({ ...data }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickConfirm = (e) => {
    confirmTransOrder(dispatch, props.order.order_id);
  };

  const handleClickCancel = (e) => {
    cancelWaitOrder(dispatch, props.order.order_id);
  };

  const handleClickComment = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <Container>
      <Top>
        <StoreName>
          <b>Store : </b>
          {productInfo?.user_name}
        </StoreName>
        <OrderStatus>
          <b>Status : </b>
          {props.order.order_status == 2 ? "in trans" : "finished"}
        </OrderStatus>
      </Top>
      <Middle>
        <StyledLink to={`/product/${productInfo.goods_id}`}>
          <GoodsImg src={productInfo?.goods_image} alt={"loading"} />
        </StyledLink>
        <GoodsName>{productInfo?.goods_name}</GoodsName>
        <Detail>
          <TotalCost>
            <b>Total : </b> $ {props.order.order_total}
          </TotalCost>
          <TotalNum>
            {" "}
            <b>Total Num : </b>
            {props.order.goods_num}
          </TotalNum>
          <ColorContainer>
            <b>Color : </b>
            <Color color={props.order.goods_color} />
          </ColorContainer>
        </Detail>
      </Middle>
      <Bottom>
        {props.order.order_status === 1 && (
          <>
            <Button buttonType="cancel" onClick={handleClickCancel}>
              CANCEL
            </Button>
          </>
        )}
        {props.order.order_status === 2 && (
          <>
            <Button buttonType="confirm" onClick={handleClickConfirm}>
              CONFIRM
            </Button>
            <StyledLink to={`/order/${props.order.order_id}/ship`}>
              <Button buttonType="check">CHECK</Button>
            </StyledLink>
          </>
        )}
        {props.order.order_status === 3 && (
          <>
            <Button
              buttonType="comment"
              onClick={handleClickComment}
              disabled={commentStatus === 1 ? true : false}
            >
              {commentStatus === 1 ? "FINISHED" : "COMMENT"}
            </Button>
            <CommentBox
              open={open}
              setOpen={setOpen}
              orderId={props.order.order_id}
              setCommentStatus={setCommentStatus}
            />
          </>
        )}
      </Bottom>
    </Container>
  );
};

export default Order;
