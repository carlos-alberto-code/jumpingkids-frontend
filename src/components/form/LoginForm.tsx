import React, { useState } from "react";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";

interface LoginFormProps {
  // Callbacks
  onLogin: (credentials: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => Promise<void>;
  onForgotPassword?: () => void;
  onRegister?: () => void;

  // Configuración
  title?: string;
  submitButtonText?: string;
  initialEmail?: string;
  disableRememberMe?: boolean;

  // Visual components
    logoComponent?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onForgotPassword,
  onRegister,
  title = "Iniciar Sesión",
  submitButtonText = "Iniciar Sesión",
  initialEmail = "",
  disableRememberMe = false,
  logoComponent
}) => {
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });

    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Por favor ingrese un email válido");
      return;
    }

    try {
      setIsLoading(true);

      // Use the callback provided by the parent
      await onLogin({
        username: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
    } catch (err) {
      setError("Error al iniciar sesión. Verifique sus credenciales.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          maxWidth: "400px",
          width: "100%",
          mx: 2,
        }}
      >
        {logoComponent && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            {logoComponent}
          </Box>
        )}

        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 3 }}
        >
          {title}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {!disableRememberMe && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    color="primary"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                }
                label="Recordarme"
              />
              {onForgotPassword && (
                <Link
                  href="#"
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    onForgotPassword();
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              )}
            </Box>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              submitButtonText
            )}
          </Button>

          {onRegister && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                ¿No tienes una cuenta?{" "}
                <Link
                  href="#"
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    onRegister();
                  }}
                >
                  Regístrate aquí
                </Link>
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
