import React from "react";

import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  Pagination,
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
      />
      <Typography variant="body1" gutterBottom>
        {reviewText}
      </Typography>
      <Rating name="rating" value={rating} readOnly />
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
    <div>
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
    </div>
  );
};

export default ReviewSummmary;
