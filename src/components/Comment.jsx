import styled from "styled-components";
import { Rating } from "@material-ui/lab";
const ReviewContainer = styled.div`
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
  margin-right: 10px;
`;

const Username = styled.span``;

const UserRating = styled.div``;

const ReviewTime = styled.span`
  color: grey;
`;

const ReviewContent = styled.div`
  font-weight: 400;
`;
const Comment = () => {
  return (
    <ReviewContainer>
      <UserInfo>
        <UserProfile src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
        <Username>Leo</Username>
      </UserInfo>
      <UserRating>
        <Rating name="read-only" value={1} />
      </UserRating>
      <ReviewTime>2019.2.18</ReviewTime>
      <ReviewContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        reprehenderit voluptatum voluptates delectus modi cum corporis inventore
        sequi eaque officia cupiditate, ea quidem vitae mollitia, minima
        excepturi, recusandae at veritatis.
      </ReviewContent>
    </ReviewContainer>
  );
};

export default Comment;
