import styled from "styled-components";
import { Rating } from "@material-ui/lab";
import { format } from "timeago.js";
import { ThumbUpAltOutlined } from "@material-ui/icons";
import { publicRequest } from "../requestMethods";
import { useState } from "react";

const ReviewContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  margin: 10px 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin: 5px 5px;
`;

const Username = styled.span``;

const UserRating = styled.div``;

const ReviewTime = styled.span`
  color: grey;
`;

const ReviewLikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LikeNum = styled.span`
  margin-left: 5px;
`;

const ReviewContent = styled.div`
  font-weight: 400;
`;

const Comment = ({ item }) => {
  const [like, setLike] = useState(item.comment_likes);
  const handleLike = async () => {
    await publicRequest.post(`/comment/like/${item.comment_id}`);
    setLike(like + 1);
  };
  return (
    <ReviewContainer>
      <UserInfo>
        <UserProfile
          src={
            "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
          }
        />
        <Username>{item.user_name}</Username>
      </UserInfo>
      <UserRating>
        <Rating name="read-only" value={item.comment_rating} readOnly />
      </UserRating>
      <ReviewTime>{format(item.created_at)}</ReviewTime>
      <ReviewLikeContainer>
        <ReviewContent>{item.comment_text}</ReviewContent>
        <LikeContainer>
          <ThumbUpAltOutlined onClick={handleLike} />
          <LikeNum>{like}</LikeNum>
        </LikeContainer>
      </ReviewLikeContainer>
    </ReviewContainer>
  );
};

export default Comment;
