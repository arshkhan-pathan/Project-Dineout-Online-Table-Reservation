import { Grid, Box } from '@mui/material';
import Widget from '../../Widget';

const Summery = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3} xl={3}>
                    <Widget />
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={3}>
                    <Widget />
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={3}>
                    <Widget />
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={3}>
                    <Widget />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Summery
