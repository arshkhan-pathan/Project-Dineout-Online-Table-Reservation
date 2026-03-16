// packages
import { useState, useEffect } from "react";
import { Box, Grid, FormControlLabel, Checkbox } from "@mui/material";
// components
import SearchField from "@/components/SearchField";
// utils
import convertToString from "@/utils/convertToString";

const FilterDetails = ({ setSelectedFilters, title, getData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const { data } = getData();

  const onChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const onSelect = (event) => {
    const { value } = event.target;
    const updatedCheckboxes = [...selectedItems];

    if (updatedCheckboxes.includes(value)) {
      // Deselect the checkbox
      const index = updatedCheckboxes.indexOf(value);
      updatedCheckboxes.splice(index, 1);
    } else {
      // Select the checkbox
      updatedCheckboxes.push(value);
    }

    setSelectedItems(updatedCheckboxes);
  };

  useEffect(() => {
    setSelectedFilters((prev) => ({
      ...prev,
      [title]: convertToString(selectedItems),
    }));
  }, [selectedItems]);

  const filteredData = data?.filter((item) =>
    item?.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Box>
      <SearchField searchQuery={searchQuery} onChange={onChange} />

      <Grid container>
        {filteredData?.map((item) => (
          <Grid item xs={12} key={item?.id}>
            <FormControlLabel
              gutterBottom
              control={
                <Checkbox
                  size="small"
                  checked={selectedItems.includes(item?.name)}
                  onChange={onSelect}
                  value={item?.name}
                  sx={{
                    color: "rgba(201,79,53,0.35)",
                    "&.Mui-checked": { color: "#C94F35" },
                    p: "4px 8px 4px 0",
                  }}
                />
              }
              label={item?.name}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#5A4E44",
                },
                mb: 0,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilterDetails;
