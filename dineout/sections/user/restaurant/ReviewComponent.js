import React from "react";
import { Box, Typography, Rating, Button, TextField } from "@mui/material";

function ReviewComponent({
  reviewText,
  setReviewText,
  rating,
  setRating,
  handleReviewSubmit,
}) {
  return (
    <Box sx={{ p: "16px 24px" }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Write a Review
      </Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        size="large"
        sx={{ marginBottom: "10px" }}
      />
      <TextField
        id="review-text"
        label="Your Review"
        variant="outlined"
        fullWidth
        multiline
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        sx={{ marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        onClick={handleReviewSubmit}
        sx={{ bgcolor: "#3595ff" }}
      >
        <Typography sx={{ color: "white" }}>Submit Review</Typography>
      </Button>
    </Box>
  );
}

export default ReviewComponent;
