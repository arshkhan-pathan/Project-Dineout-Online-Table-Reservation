import React from "react";

import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  Pagination,
  CardContent,
  Box,
} from "@mui/material";
import Rating from "@mui/lab/Rating";

const Review = ({
  reviewerName,
  reviewerAvatar,
  rating,
  reviewText,
  reviewDate,
}) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={reviewerAvatar} />}
        title={reviewerName}
        subheader={reviewDate} // Replace 'reviewDate' with the actual variable containing the date
        sx={{paddingTop: 4}}
      />
      <CardContent sx={{paddingTop: 0, paddingLeft: 4}}>
        <Typography variant="body1" gutterBottom>
          The quality of the item exceeded my expectations.
        </Typography>
        <Rating name="rating" value={rating} readOnly />
      </CardContent>
    </Card>
  );
};

const ReviewSummmary = ({
  reviews,
  currentPage,
  totalPages,
  onPageChange,
  count,
}) => {
  console.log(reviews);
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
      {reviews?.map((review) => (
        <Review
          key={review.id}
          reviewerName={review.customer_name}
          reviewerAvatar={"xyz.com"}
          rating={review.rating}
          reviewText={review.comment}
          reviewDate={review.created_at}
        />
      ))}
      {reviews?.map((review) => (
        <Review
          key={review.id}
          reviewerName={review.customer_name}
          reviewerAvatar={"xyz.com"}
          rating={review.rating}
          reviewText={review.comment}
          reviewDate={review.created_at}
        />
      ))}
      {reviews?.map((review) => (
        <Review
          key={review.id}
          reviewerName={review.customer_name}
          reviewerAvatar={"xyz.com"}
          rating={review.rating}
          reviewText={review.comment}
          reviewDate={review.created_at}
        />
      ))}
      {reviews?.map((review) => (
        <Review
          key={review.id}
          reviewerName={review.customer_name}
          reviewerAvatar={"xyz.com"}
          rating={review.rating}
          reviewText={review.comment}
          reviewDate={review.created_at}
        />
      ))}
      <Pagination
        count={Math.ceil(count / 5)}
        page={currentPage}
        onChange={onPageChange}
      />
    </Box>
  );
};

export default ReviewSummmary;
