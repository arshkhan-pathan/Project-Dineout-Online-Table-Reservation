import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  Pagination,
} from "@mui/material";
import Rating from "@mui/lab/Rating";

const Review = ({ reviewerName, reviewerAvatar, rating, reviewText }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={reviewerAvatar} />}
        title={reviewerName}
      />
      <Typography variant="body1" gutterBottom>
        {reviewText}
      </Typography>
      <Rating name="rating" value={rating} readOnly />
    </Card>
  );
};

const ReviewSummmary = ({ currentPage, totalPages, onPageChange }) => {
  const generateDummyReviews = (count) => {
    const reviews = [];

    for (let i = 1; i <= count; i++) {
      const review = {
        id: i,
        reviewerName: `Reviewer ${i}`,
        reviewerAvatar: `https://example.com/avatar-${i}.jpg`,
        rating: Math.floor(Math.random() * 5) + 1,
        reviewText: `This is review ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      };

      reviews.push(review);
    }

    return reviews;
  };

  // Usage
  const reviews = generateDummyReviews(20);
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Sort by Ratings:
      </Typography>
      {/* Add sorting header here */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
      />
      {reviews.map((review) => (
        <Review
          key={review.id}
          reviewerName={review.reviewerName}
          reviewerAvatar={review.reviewerAvatar}
          rating={review.rating}
          reviewText={review.reviewText}
        />
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
      />
    </div>
  );
};

export default ReviewSummmary;
