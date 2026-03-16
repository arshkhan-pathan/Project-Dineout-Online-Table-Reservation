import { TextField } from "@mui/material";

const SearchField = ({ searchQuery, onChange }) => {
  return (
    <TextField
      label="Search"
      fullWidth
      size="small"
      margin="none"
      sx={{
        mb: 1.5,
        "& .MuiOutlinedInput-root": {
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          borderRadius: "5px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(201,79,53,0.40)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C94F35",
          },
        },
        "& .MuiInputLabel-root": {
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          "&.Mui-focused": { color: "#C94F35" },
        },
      }}
      type="search"
      value={searchQuery}
      onChange={onChange}
    />
  );
};

export default SearchField;
