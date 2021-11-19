import { Rating } from "@material-ui/lab";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
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
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

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

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Hr = styled.hr`
  color: grey;
  padding: 5px 0;
`;

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

const Product = () => {
  const [value, setValue] = useState(2);
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>A Product</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            corrupti, aliquid unde, earum illum necessitatibus officiis debitis
            molestiae esse sed dolorem incidunt quaerat alias quod illo officia
            itaque? Tempora, quis.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Hr />
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
              reprehenderit voluptatum voluptates delectus modi cum corporis
              inventore sequi eaque officia cupiditate, ea quidem vitae
              mollitia, minima excepturi, recusandae at veritatis.
            </ReviewContent>
          </ReviewContainer>
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
              reprehenderit voluptatum voluptates delectus modi cum corporis
              inventore sequi eaque officia cupiditate, ea quidem vitae
              mollitia, minima excepturi, recusandae at veritatis.
            </ReviewContent>
          </ReviewContainer>
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
              reprehenderit voluptatum voluptates delectus modi cum corporis
              inventore sequi eaque officia cupiditate, ea quidem vitae
              mollitia, minima excepturi, recusandae at veritatis.
            </ReviewContent>
          </ReviewContainer>
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
              reprehenderit voluptatum voluptates delectus modi cum corporis
              inventore sequi eaque officia cupiditate, ea quidem vitae
              mollitia, minima excepturi, recusandae at veritatis.
            </ReviewContent>
          </ReviewContainer>
        </Reviews>
      </CommentContainer>
    </Container>
  );
};

export default Product;
