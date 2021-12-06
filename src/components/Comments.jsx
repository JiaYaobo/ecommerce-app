import styled from "styled-components";
import { Rating } from "@material-ui/lab";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

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

const Comments = (props) => {
  const [totalRating, setTotalRating] = useState(2);
  const [fiveRating, setFiveRating] = useState(2);
  const [fourRating, setFourRating] = useState(2);
  const [threeRating, setThreeRating] = useState(2);
  const [twoRating, setTwoRating] = useState(2);
  const [oneRating, setOneRating] = useState(2);
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const res = await publicRequest.get(`/comment/comments/${props.productId}`);
    const data = await res.data;
    setComments([...data]);
  };
  useEffect(() => {
    loadComments();
  }, []);
  return (
    <CommentContainer>
      <OverallReviews>
        <OverallTitle>Customer Reviews</OverallTitle>
        <Rating name="read-only" value={totalRating} />
        <RatingDetail>{totalRating} out of 5</RatingDetail>
        <RatingBar>
          <Rating name="read-only" value={fiveRating} />
          <RatingDetail>50%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={fourRating} />
          <RatingDetail>10%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={threeRating} />
          <RatingDetail>10%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={twoRating} />
          <RatingDetail>20%</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={oneRating} />
          <RatingDetail>10%</RatingDetail>
        </RatingBar>
      </OverallReviews>
      <Reviews>
        <ReviewsTitle>Reviews from users ({comments.length})</ReviewsTitle>
        {comments.map((item) => (
          <Comment item={item} key={item.comment_id} />
        ))}
      </Reviews>
    </CommentContainer>
  );
};

export default Comments;
