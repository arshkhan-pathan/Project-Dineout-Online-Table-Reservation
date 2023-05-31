// @mui
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';
// components
// import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(0),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
}));

export default function AppWidgetSummary({sx, ...other}) {
    return (
        <Card
            sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                color: (theme) => theme.palette.primary.main,
                bgcolor: 'whitesmoke',
                ...sx,
            }}
            {...other}
        >
            <StyledIcon sx={{fontSize: '20px'}}>Icon</StyledIcon>

            <Typography variant="h3" gutterBottom>1200K</Typography>

            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Today Earnings
            </Typography>
        </Card>
    );
}
