import React from "react";
import RestaurantLayout from "@/layouts/restaurant";
import MangerAdminProfile from "@/components/MangerAdminProfile";
function profile() {
  return (
    <>
      <RestaurantLayout>
        <MangerAdminProfile></MangerAdminProfile>
      </RestaurantLayout>
    </>
  );
}

export default profile;
