import React from "react";
import { Typography, Paper } from "@mui/material";
import { useGetBookingInvoiceQuery } from "@/store/api/restaurants";

const InvoiceDetails = ({ bookingId }) => {
  const { data: invoice } = useGetBookingInvoiceQuery(bookingId);
  console.log(invoice);
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Invoice #{invoice?.id}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Customer: {invoice?.customer}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Amount: ${invoice?.amount}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Created At: {invoice?.created_at}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Restaurant: {invoice?.restaurant.name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Booking Details:
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        Booking ID: {invoice?.booking_details.booking_id}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        Date: {invoice?.booking_details.date}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        Start Time: {invoice?.booking_details.start_time}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        End Time: {invoice?.booking_details.end_time}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        Guests: {invoice?.booking_details.guests}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        Additional Details: {invoice?.booking_details.additional_details}
      </Typography>
    </Paper>
  );
};

export default InvoiceDetails;
