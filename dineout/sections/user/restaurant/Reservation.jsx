// packages
import { useEffect, useState } from 'react';
import { Box, Typography, styled, Button, Grid, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

// styles
const StyledWrapper = styled(Box)(({ theme }) => ({
    width: '330px',
    marginInline: 'auto',
    // height: '500px',
    boxShadow: theme.shadows[5],
    borderRadius: 4,
    marginBlock: theme.spacing(2)
}));

const StyledHeader = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.8),
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
}));

const StyledContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.8),
    height: '100%',
    maxHeight: '430px',
    overflowY: 'scroll',
    backgroundColor: 'whitesmoke',
}));

const StyledFooter = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.8),
}));

const StyledDatePicker = styled(DatePicker)({
    width: '100%',
    marginBottom: 10
});

const Reservation = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [guests, setGuests] = useState(0);

    const onGuestIncrement = () => setGuests(prev => prev + 1);
    const onGuestDecrement = () => setGuests(prev => prev - 1);

    const today = new Date();
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(today.getMonth() + 1);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const disableDate = (date) => {
        return date < today || date > oneMonthFromNow;
    };

    const newDate = new Date(selectedDate);
    const formattedDate = newDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <StyledWrapper>
            <StyledHeader>
                <Typography fontWeight="bold">Make a Reservation</Typography>
            </StyledHeader>
            <StyledContent>
                {selectedDate && (
                    <Typography sx={{ mb: 2, fontWeight: 'bold' }}>{formattedDate}</Typography>
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
                        <Typography gutterBottom variant='body2' sx={{ opacity: 0.7 }}>Choose the number of guests going</Typography>

                        <Box sx={{padding:1, bgcolor: '#dbdbdbfa', borderRadius: 1}}>
                            <Typography sx={{fontWeight: 'bold'}} variant='body2'>Guests: </Typography>
                            <Box>
                                <IconButton onClick={onGuestDecrement}>
                                    <RemoveCircleOutline />
                                </IconButton>
                                <IconButton>
                                    {guests}
                                </IconButton>
                                <IconButton onClick={onGuestIncrement}>
                                    <AddCircleOutline />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                )}
            </StyledContent>

            <StyledFooter>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    color='primary'
                    sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                >Continue</Button>
            </StyledFooter>
        </StyledWrapper>
    );
};

export default Reservation;
