import { Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useBookGet } from "../service/useDataget";

export default function Bar() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { data, isLoading } = useBookGet(selectedGenres.length > 0 ? selectedGenres.join(",") : null);

  const handleGenreChange = (event) => {
    const genre = event.target.name;
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <Stack
      direction="row"
      sx={{
        width: "80%",
        backgroundColor: "#7dc4e3",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <Box sx={{ width: "250px", p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Filter by Genre
        </Typography>
        {["Fiction", "Non-fiction", "Science", "Technology", "Fantasy"].map((genre) => (
          <FormControlLabel
            key={genre}
            control={
              <Checkbox
                checked={selectedGenres.includes(genre)}
                onChange={handleGenreChange}
                name={genre}
              />
            }
            label={genre}
          />
        ))}
      </Box>

      <Box sx={{ flex: 1, padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Book List
        </Typography>
        {isLoading ? (
          <Typography variant="h6" gutterBottom>
            Loading...
          </Typography>
        ) : (
          data?.map((item) => (
            <Box key={item.id} sx={{ marginBottom: "15px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
              <Typography variant="h6" color="primary">
                {item.title}
              </Typography>
              <Typography variant="body1">
                <strong>Author:</strong> {item.author}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Genre:</strong> {item.genre}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Technology:</strong> {item.technology || "N/A"}
              </Typography>
            </Box>
          ))
        )}
      </Box>
    </Stack>
  );
}
