import { Box, Container } from "@mui/material";
import "./App.css";
import ExerciseList from "./components/asignment/ExerciseList";
import type { Exercise } from "./components/asignment/types";

function App() {
  // Lista de ejercicios de ejemplo (10 ejercicios)
  const sampleExercises: Exercise[] = [
    { id: 1, title: "Sentadillas" },
    { id: 2, title: "Flexiones de brazo" },
    { id: 3, title: "Abdominales" },
    { id: 4, title: "Estiramiento de piernas" },
    { id: 5, title: "Saltos" },
    { id: 6, title: "Estiramiento de brazos" },
    { id: 7, title: "Jumping jacks" },
    { id: 8, title: "Burpees" },
    { id: 9, title: "Plancha" },
    { id: 10, title: "Trote en el lugar" },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <ExerciseList
          initialExercises={sampleExercises}
          onExerciseSelected={() => {}}
          onExerciseCompleted={() => {}}
        />
      </Box>
    </Container>
  );
}

export default App;
