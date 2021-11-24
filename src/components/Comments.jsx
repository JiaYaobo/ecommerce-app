import styled from "styled-components";
import { Rating } from "@material-ui/lab";
import Comment from "./Comment";
import { useState } from "react";

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const OverallReviews = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const OverallTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const RatingDetail = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

const RatingBar = styled.div`
  display: flex;
`;

const Reviews = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const ReviewsTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Comments = () => {
  const [value, setValue] = useState(2);
  return (
    <CommentContainer>
      <OverallReviews>
        <OverallTitle>Customer Reviews</OverallTitle>
        <Rating name="read-only" value={value} />
        <RatingDetail>5 out of 5</RatingDetail>
        <RatingBar>
          <Rating name="read-only" value={5} />
          <RatingDetail>50%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={4} />
          <RatingDetail>10%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={3} />
          <RatingDetail>10%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={2} />
          <RatingDetail>20%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={1} />
          <RatingDetail>10%</RatingDetail>
        </RatingBar>
      </OverallReviews>
      <Reviews>
        <ReviewsTitle>Reviews from users</ReviewsTitle>
        <Comment />
        <Comment />
        <Comment />
      </Reviews>
    </CommentContainer>
  );
};

export default Comments;
