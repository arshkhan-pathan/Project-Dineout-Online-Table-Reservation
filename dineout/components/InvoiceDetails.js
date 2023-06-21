import React from "react";
import { Typography, Paper } from "@mui/material";
import { useGetBookingInvoiceQuery } from "@/store/api/restaurants";

const InvoiceDetails = ({ bookingId }) => {
  const { data: invoice } = useGetBookingInvoiceQuery(bookingId);
  console.log(invoice);
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Invoice #{invoice?.id}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        <b>Customer:</b> {invoice?.customer_name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        <b>Amount:</b> ₹ {invoice?.amount}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        <b>Created At:</b> {invoice?.created_at}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        <b>Restaurant:</b> {invoice?.restaurant.name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        <b>Booking Details:</b>
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        <b>Booking ID:</b> {invoice?.booking_details.booking_id}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        <b>Date:</b> {invoice?.booking_details.date}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        <b>Start Time:</b> {invoice?.booking_details.start_time}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        <b>End Time:</b> {invoice?.booking_details.end_time}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        <b>Guests:</b> {invoice?.booking_details.guests}
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        <b>Additional Details:</b> {invoice?.booking_details.additional_details}
      </Typography>
    </Paper>
  );
};

export default InvoiceDetails;
