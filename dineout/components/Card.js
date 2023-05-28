// packages
import {
    Box,
    Card as MuiCard,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Chip,
} from '@mui/material';
import { useRouter } from 'next/router';


const Card = ({ id, name, locality, rating, banner }) => {
    const router = useRouter();

    return (
        <MuiCard
            key={id}
            elevation={0}
            sx={{
                transition: 'box-shadow 0.2s',
                '&:hover': {
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.2), 0px 2px 4px rgba(0,0,0,0.14), 0px 1px 8px rgba(0,0,0,0.12)',
                },
            }}
            onClick={() => router.push(`/restaurants/${id}`)}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={banner}
                    alt="green iguana"
                // sx={{
                //   height: 168,
                //   display: 'inline-block',
                //   overflow: 'hidden',
                //   width: 272,
                //   borderRadius: 0,
                //   '& img': {
                //     height: 168,
                //     width: 272,
                //     objectFit: 'cover',
                //     borderRadius: 0,
                //     overflow: 'hidden',
                //     display: 'block',
                //     transition: 'transform 0.6s',
                //   },
                //   '&:hover img': {
                //     transform: 'scale(1.2)',
                //     transformOrigin: '50% 50%',
                //   }
                // }}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography component="h4" sx={{ fontWeight: 'bold' }}>{name}</Typography>
                            <Typography sx={{ fontSize: 12 }}>{locality}</Typography>
                        </Box>
                        <Chip label={rating} color="success" sx={{ borderRadius: 1, height: 25 }} />
                    </Box>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
};

export default Card;
