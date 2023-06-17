import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import withAuth from "@/HOC/withAuth";
import ReviewSummmary from "@/sections/restaurant/home/ReivewSummary";
import { useGetReviewsQuery } from "@/store/api/restaurant";
import RestaurantLayout from "@/layouts/restaurant";

const Reviews = () => {
  const user = useSelector(selectCurrentUser);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState("");

  const onFilterChange = (filter) => {
    setSelectedFilters(filter);
  };

  useEffect(() => {
    console.log("selected filter: ", selectedFilters);
  }, [selectedFilters]);

  const { data, isError, isLoading, refetch } = useGetReviewsQuery(
    { id: user?.id, pageNumber, selectedFilters },
    { refetchOnMountOrArgChange: true }
  );
  console.log(data);

  const onPageChange = (event, value) => {
    console.log("on page change ", event, value);
    setPageNumber(value);
  };

  return (
    <div>
      <RestaurantLayout title="Reviews">
        <ReviewSummmary
          reviews={data?.results}
          count={data?.count}
          onPageChange={onPageChange}
          selectedFilters={selectedFilters}
          onFilterChange={onFilterChange}
        />
      </RestaurantLayout>
    </div>
  );
};

export default withAuth(Reviews, [2], "/restaurant/login");
