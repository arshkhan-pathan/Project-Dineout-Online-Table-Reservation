import { useState } from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Accordtion = ({ summary, details }) => {
  const [expended, setExpended] = useState(true);

  const onToggle = () => {
    setExpended((prev) => !prev);
  };

  return (
    <Box sx={{ mb: 0.5 }}>
      <MuiAccordion
        square
        disableGutters
        defaultExpanded
        TransitionProps={{ unmountOnExit: true }}
        onChange={onToggle}
        elevation={0}
        sx={{
          border: "1px solid rgba(201,79,53,0.10)",
          borderRadius: "6px !important",
          "&:before": { display: "none" },
          overflow: "hidden",
        }}
      >
        <AccordionSummary
          expandIcon={
            expended ? (
              <RemoveIcon sx={{ width: 14, color: "#C94F35" }} />
            ) : (
              <AddIcon sx={{ width: 14, color: "#C94F35" }} />
            )
          }
          sx={{
            minHeight: 44,
            backgroundColor: "#FDFAF6",
            "& .MuiAccordionSummary-content": { my: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5A4E44",
            }}
          >
            {summary}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ pt: 1.5, pb: 2, px: 2, backgroundColor: "#FFFFFF" }}>
          {details}
        </AccordionDetails>
      </MuiAccordion>
    </Box>
  );
};

export default Accordtion;
