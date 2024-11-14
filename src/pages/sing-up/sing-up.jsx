import { Button, Container, Stack, TextField, Typography, Box } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../service/useRegister';

export const SignUp = () => {
  const { handleSubmit, register } = useForm();
  const { mutate } = useRegister();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/main-layout');
      }
    });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: 'background.paper',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={2} mb={2}>
            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              {...register('name', { required: true })}
            />
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              fullWidth
              {...register('email', { required: true })}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
              {...register('password', { required: true })}
            />
          </Stack>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};
