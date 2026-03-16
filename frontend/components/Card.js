import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { useRouter } from "next/router";

const MAX_WORDS = 5;

const RenderTitle = ({ title }) => {
  const words = title.split(" ");
  const truncated = words.length > MAX_WORDS;
  const displayTitle = truncated ? words.slice(0, MAX_WORDS).join(" ") + "…" : title;

  if (truncated) {
    return (
      <Tooltip title={title} placement="bottom-end" arrow>
        <Typography
          component="h4"
          sx={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 600,
            fontSize: "19px",
            lineHeight: 1.25,
            color: "#1A1210",
          }}
        >
          {displayTitle}
        </Typography>
      </Tooltip>
    );
  }

  return (
    <Typography
      component="h4"
      sx={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontWeight: 600,
        fontSize: "19px",
        lineHeight: 1.25,
        color: "#1A1210",
      }}
    >
      {title}
    </Typography>
  );
};

const ratingColor = (r) => {
  if (r >= 4) return "#2E6B3E";
  if (r >= 3) return "#C8922A";
  return "#B53A2A";
};

const Card = ({
  id,
  name,
  locality,
  ratings,
  images,
  city,
  showExtra,
  avg_cost,
  cuisines,
}) => {
  const router = useRouter();
  const joinedCuisines = cuisines
    .slice(0, 2)
    .map((tag) => tag.name)
    .join(" · ");

  return (
    <MuiCard
      elevation={0}
      sx={{
        cursor: "pointer",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.13)",
        },
      }}
      onClick={() => router.push(`/restaurants/${id}`)}
    >
      <CardActionArea component="div" sx={{ display: "block" }}>
        {/* Image container with 16:9 ratio */}
        <Box sx={{ position: "relative", paddingTop: "60%", overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={images[0]?.image}
            alt={name}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.38s ease",
              ".MuiCard-root:hover &": {
                transform: "scale(1.05)",
              },
            }}
          />
          {/* Rating badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              right: 10,
              backgroundColor: ratingColor(ratings),
              color: "white",
              borderRadius: "4px",
              padding: "3px 9px",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              lineHeight: 1.4,
            }}
          >
            ★ {ratings}
          </Box>
        </Box>

        <CardContent sx={{ p: "14px 16px 16px" }}>
          <RenderTitle title={name} />
          <Typography
            sx={{
              fontSize: "13px",
              color: "#7A6E66",
              fontFamily: "var(--font-body)",
              mt: "4px",
              mb: showExtra ? "8px" : 0,
            }}
          >
            {locality} · {city}
          </Typography>

          {showExtra && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: "8px",
                borderTop: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#9A8878",
                  fontFamily: "var(--font-body)",
                }}
              >
                {joinedCuisines}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#9A8878",
                  fontFamily: "var(--font-body)",
                  flexShrink: 0,
                  ml: 1,
                }}
              >
                ₹{avg_cost} for 2
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
