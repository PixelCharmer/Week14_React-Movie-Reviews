import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

// the star rating for used in the reviews

export default function StarRating() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}