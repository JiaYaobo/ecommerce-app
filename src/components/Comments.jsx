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
  const [fiveRating] = useState(5);
  const [fourRating] = useState(4);
  const [threeRating] = useState(3);
  const [twoRating] = useState(2);
  const [oneRating] = useState(1);
  const [comments, setComments] = useState([]);
  const [rateData, setRateData] = useState({});

  const loadComments = async () => {
    const res = await publicRequest.get(`/comment/comments/${props.productId}`);
    const data = await res.data;
    setComments([...data]);
  };
  useEffect(() => {
    loadComments();
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await publicRequest.get(
          "/comment/overview/" + props.productId
        );
        const data = await res.data;
        setRateData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRatings();
  }, []);
  return (
    <CommentContainer>
      <OverallReviews>
        <OverallTitle>Customer Reviews</OverallTitle>
        <Rating name="read-only" value={rateData.total} />
        <RatingDetail>{rateData?.total.toFixed(1)} out of 5</RatingDetail>
        <RatingBar>
          <Rating name="read-only" value={fiveRating} />
          <RatingDetail>{rateData?.star5}</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={fourRating} />
          <RatingDetail>{rateData?.star4}</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={threeRating} />
          <RatingDetail>{rateData?.star3}</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={twoRating} />
          <RatingDetail>{rateData?.star2}</RatingDetail>
        </RatingBar>
        <RatingBar>
          <Rating name="read-only" value={oneRating} />
          <RatingDetail>{rateData?.star1}</RatingDetail>
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
