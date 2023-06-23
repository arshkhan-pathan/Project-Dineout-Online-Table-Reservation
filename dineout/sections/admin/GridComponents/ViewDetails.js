import {
  Box,
  Grid,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";

export const renderButtonCell = (params, handleButtonClick) => {
  const restaurantId = params.row.id;
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleButtonClick(restaurantId)}
    >
      View Details
    </Button>
  );
};
