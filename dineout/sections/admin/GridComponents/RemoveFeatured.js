import CloseIcon from "@mui/icons-material/Close";
import { Tooltip, IconButton } from "@mui/material";
import { toast } from "react-hot-toast";

export const removeFeatured = (params, deleteFeaturedRestaurant) => {
  const onRemoveFeatured = () => {
    deleteFeaturedRestaurant(params.row.id);
    toast.success("Removed Restaurant Successfully");
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onRemoveFeatured}>
        <CloseIcon sx={{ color: "red " }} />
      </IconButton>
    </Tooltip>
  );
};
