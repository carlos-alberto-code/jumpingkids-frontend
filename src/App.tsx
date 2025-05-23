import { Box } from "@mui/material";
import "./App.css";
import Layout from "./components/asignment/Layout";

function App() {
  // La lista de ejercicios se moverá a los componentes internos más adelante

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Layout />
    </Box>
  );
}

export default App;
