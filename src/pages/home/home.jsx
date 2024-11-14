// Home Component
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Bar from "../../components/bar";
import { useBookGet } from "../../service/useBookGet";
import BookProduct from "../../components/book-pordact";

export default function Home() {
  const { data, isLoading } = useBookGet();

  return (
    <Stack direction="row" sx={{ height: "92vh", overflowY: "auto" }}>
      <Bar />

      <Stack sx={{ flexGrow: 1, p: 5, overflowY: "auto" }}>
        {isLoading ? (
          <Typography variant="h4" align="center">
            Loading...
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {data?.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={4} key={item.id}>
                <BookProduct {...item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </Stack>
  );
}
