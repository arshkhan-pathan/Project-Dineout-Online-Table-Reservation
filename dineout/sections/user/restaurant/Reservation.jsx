// packages
import { useState } from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useCheckAvailibilityQuery } from "@/store/api/restaurants";
import { useRouter } from "next/router";
import Chip from "@mui/material/Chip";
import Payment from "@/components/Payment";

// styles
const StyledWrapper = styled(Box)(({ theme }) => ({
  width: "330px",
  marginInline: "auto",
  // height: '500px',
  boxShadow: theme.shadows[5],
  borderRadius: 4,
  marginBlock: "1px",
  position: "sticky",
  top: "30px",
  right: "20px",
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.8),
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: 4,
  borderTopLeftRadius: 4,
}));

const StyledContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.8),
  height: "100%",
  maxHeight: "380px",
  overflowY: "scroll",
  backgroundColor: "whitesmoke",
}));

const StyledFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.8),
}));

const StyledDatePicker = styled(DatePicker)({
  width: "100%",
  marginBottom: 10,
});

const Reservation = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [guests, setGuests] = useState(0);
  const { restaurantId } = router.query;
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (item) => {
    setSelectedChip(item);
    // Perform any additional actions with the selected item
    console.log("Selected Chip:", item[0][0]);
  };
  const { data: slots, refetch } = useCheckAvailibilityQuery(
    {
      restaurantId: restaurantId,
      date: selectedDate,
      num_guest: guests,
    },
    { refetchOnMountOrArgChange: true }
  );
  console.log(slots);

  const onGuestIncrement = () => {
    setGuests((prev) => prev + 1);
  };
  const onGuestDecrement = () =>
    setGuests((prev) => (prev === 0 ? prev : prev - 1));

  const today = new Date();
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(today.getMonth() + 1);

  const handleDateChange = (date) => {
    const year = date.year();
    const month = String(date.month() + 1).padStart(2, "0"); // Months are zero-based, so add 1 and pad with leading zeros if needed
    const day = String(date.date()).padStart(2, "0"); // Pad day with leading zeros if needed

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setSelectedDate(formattedDate);
  };

  const disableDate = (date) => {
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00 to compare the dates only

    return (
      currentDate > oneMonthFromNow ||
      (currentDate < today && !isSameDate(currentDate, today))
    );
  };

  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const newDate = new Date(selectedDate);
  const formattedDate = newDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeSlots = slots?.time;

  return (
    <StyledWrapper>
      <StyledHeader>
        <Typography fontWeight="bold">Make a Reservation</Typography>
      </StyledHeader>
      <StyledContent>
        {selectedDate && (
          <Typography sx={{ mb: 2, fontWeight: "bold" }}>
            {formattedDate}
          </Typography>
        )}

        <StyledDatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          disablePast
          shouldDisableDate={disableDate}
        />

        {selectedDate && (
          <Box>
            <Typography gutterBottom>Select Guest/s</Typography>
            <Typography gutterBottom variant="body2" sx={{ opacity: 0.7 }}>
              Choose the number of guests going
            </Typography>

            <Box
              sx={{
                gap: "3px",
                padding: 1,
                bgcolor: "#dbdbdbfa",
                borderRadius: 1,
                padding: "5px 15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Guests:{" "}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <IconButton onClick={onGuestDecrement} size="small">
                  <RemoveCircleOutline color="primary" />
                </IconButton>
                <Typography variant="body2" fontWeight="bold">
                  {guests}
                </Typography>
                <IconButton onClick={onGuestIncrement} size="small">
                  <AddCircleOutline color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        )}
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={1}>
            {timeSlots?.length > 0 &&
              timeSlots.map((item, index) => (
                <Grid item xs={4}>
                  <Chip
                    sx={{
                      borderRadius: 1,
                      width: "100%",
                      height: "100%",
                      paddingBlock: "13px",
                    }}
                    key={index}
                    label={item[0][0]}
                    clickable
                    onClick={() => handleChipClick(item)}
                    color={selectedChip === item ? "primary" : "default"}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </StyledContent>{" "}
      <StyledFooter>
        {restaurantId && selectedChip && selectedDate && (
          <Payment
            restaurantId={restaurantId}
            start_time={selectedChip[0][0]}
            end_time={selectedChip[0][1]}
            userId={5}
            date={selectedDate}
            guests={guests}
            table={selectedChip[1][0]}
          ></Payment>
        )}
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Reservation;
