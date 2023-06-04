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


const Card = ({ id, name, locality, ratings, images }) => {
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
                    image={images[0]?.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography component="h4" sx={{ fontWeight: 'bold' }}>{name}</Typography>
                            <Typography sx={{ fontSize: 12 }}>{locality}</Typography>
                        </Box>
                        <Chip label={ratings} color="success" sx={{ borderRadius: 1, height: 25 }} />
                    </Box>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
};

export default Card;
