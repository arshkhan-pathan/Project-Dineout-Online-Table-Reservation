import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import axios from "axios";

import Typography from "@mui/material/Typography";
import ReviewSummmary from "@/sections/restaurant/home/ReivewSummary";
import { useGetReviewsQuery } from "@/store/api/restaurant";
import baseApi from "@/store/api/base";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const Reviews = () => {
  const user = useSelector(selectCurrentUser);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState("");

  const onFilterChange = (filter) => {
    setSelectedFilters(filter);
  };

  useEffect(() => {
    console.log('selected filter: ', selectedFilters)
  }, [selectedFilters]);

  const { data, isError, isLoading, refetch } = useGetReviewsQuery({ id: user?.id, pageNumber, selectedFilters }, { refetchOnMountOrArgChange: true });
  console.log(data);

  const onPageChange = (event, value) => {
    console.log('on page change ', event, value);
    setPageNumber(value);
  }

  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <ReviewSummmary reviews={data?.results} count={data?.count} onPageChange={onPageChange} selectedFilters={selectedFilters} onFilterChange={onFilterChange} />
        </Box>
      </Box>
    </div>
  );
};

export default Reviews;
