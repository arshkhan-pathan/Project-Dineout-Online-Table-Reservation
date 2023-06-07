import React from "react";
import Review from "../Review";
import { Typography } from "@mui/material";

function ReviewSection({ reviews }) {
  return (
    <div>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", margin: "10px 15px" }}
      >
        Reviews
      </Typography>
      {reviews?.map((review) => {
        return (
          <>
            <Review
              reviewerName={review?.customer_name}
              rating={review?.rating}
              reviewText={review?.comment}
              reviewDate={review?.created_at}
            />
          </>
        );
      })}
    </div>
  );
}

export default ReviewSection;
