import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

function RenderCancel(params, deleteBookings) {
  const bookingId = params.row.id;
  const handleCancelBooking = (value) => {
    console.log(value, "line 31");
    const data = { id: value, role: { role: 3 } };
    console.log(data);
    deleteBookings(data)
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("Cancelled");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.data.error);
      });
  };
  return (
    <Button
      variant="outlined"
      size="small"
      onClick={() => handleCancelBooking(bookingId)}
    >
      Cancel
    </Button>
  );
}

export default RenderCancel;
