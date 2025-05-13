import "./App.css";
import { Box } from "@mui/material";
import LoginForm from "./components/form/LoginForm";

function App() {
  const handleLogin = async ({
    email,
    password,
    rememberMe,
  }: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    // Aquí iría tu lógica de autenticación real
    console.log("Intentando login con:", { email, password, rememberMe });

    // Simular una llamada API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Si la autenticación es exitosa:
    if (email === "usuario@ejemplo.com" && password === "contraseña123") {
      console.log("Login exitoso!");
      window.location.href = "/dashboard";
    } else {
      // Si falla, lanzar un error para que el formulario lo maneje
      throw new Error("Credenciales inválidas");
    }
  };

  const handleForgotPassword = () => {
    console.log("Redirigiendo a recuperación de contraseña");
    // Implementar navegación a la página de recuperación
  };

  const handleRegister = () => {
    console.log("Redirigiendo a registro");
    // Implementar navegación a la página de registro
  };

  return (
    <Box>
      <LoginForm
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onRegister={handleRegister}
        title="Bienvenido de nuevo"
        submitButtonText="Acceder"
        initialEmail="usuario@ejemplo.com"
        // logoComponent={<Logo height={60} />}
      />
    </Box>
  );
}

export default App;
