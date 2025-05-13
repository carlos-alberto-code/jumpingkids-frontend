import { Button, TextField, Box, Typography, Container } from '@mui/material';

function MyComponent() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bienvenido a mi aplicación
        </Typography>
        <TextField label="Nombre" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </Container>
  );
}

export default MyComponent;