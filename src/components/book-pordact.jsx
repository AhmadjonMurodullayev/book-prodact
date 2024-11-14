// BookProduct Component
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Stack, Rating } from '@mui/material';

export default function BookProduct({ id, title, subtitle, authors, genre, rating, image }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2, height: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: 220 }}
        image={image}
        alt={`${title} cover`}
      />
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle1" color="text.secondary" noWrap>
              {subtitle}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary" mt={1}>
            By: {authors}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Genre: {genre}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Rating value={rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">
              {rating}
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}
