import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingTitle = styled.span`
  margin-right: 20px;
`;

const CommentBox = ({ open, setOpen, orderId, setCommentStatus }) => {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    let comment = {
      order_id: orderId,
      comment_rating: rating,
      comment_text: text,
    };

    const res = await publicRequest.post("/comment/", comment);
    setCommentStatus(1);
    setOpen(false);
  };
  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>COMMENT</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Thanks a lot, what's your feeling of this shopping experience? Please
          let us know such that we can offer you a better service
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="comment form"
          label="Comment"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setText(e.target.value)}
        />
        <RatingContainer>
          <RatingTitle>Rate : </RatingTitle>
          <Rating value={rating} onChange={(e) => setRating(e.target.value)} />
        </RatingContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentBox;
