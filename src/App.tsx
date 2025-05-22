import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./App.css";
import ExerciseList, {
  type ExerciseListRef,
} from "./components/asignment/ExerciseList";
import type { Exercise } from "./components/asignment/types";

function App() {
  // Estado para almacenar el ejercicio seleccionado actualmente
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );

  // Lista de ejercicios de ejemplo
  const sampleExercises: Exercise[] = [
    { id: 1, title: "Sentadillas" },
    { id: 2, title: "Flexiones de brazo" },
    { id: 3, title: "Abdominales" },
    { id: 4, title: "Estiramiento de piernas" },
    { id: 5, title: "Saltos" },
  ];

  // Referencia para acceder al método completeExercise
  const exerciseListRef = useRef<ExerciseListRef>(null);

  // Función que se ejecuta al seleccionar un ejercicio
  const handleExerciseSelected = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    console.log(`Ejercicio seleccionado: ${exercise.title}`);
  };

  // Función que se ejecuta al completar un ejercicio
  const handleExerciseCompleted = (exerciseId: number) => {
    console.log(`Ejercicio completado: ${exerciseId}`);
  };

  // Función para marcar el ejercicio actual como completado
  const completeCurrentExercise = () => {
    if (selectedExercise && exerciseListRef.current) {
      exerciseListRef.current.completeExercise(selectedExercise.id);
      setSelectedExercise(null);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Jumping Kids - Ejercicios
      </Typography>

      <Grid container spacing={3}>
        {/* Lista de ejercicios */}
        <Grid sx={{xs: "12", md: "4"}}>
          <ExerciseList
            ref={exerciseListRef}
            initialExercises={sampleExercises}
            onExerciseSelected={handleExerciseSelected}
            onExerciseCompleted={handleExerciseCompleted}
          />
        </Grid>

        {/* Área de visualización del ejercicio seleccionado */}
        <Grid sx={{xs: 12, md: 8}}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedExercise ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {selectedExercise.title}
                </Typography>

                <Box
                  sx={{
                    width: "80%",
                    height: "300px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    Aquí se mostraría el contenido del ejercicio
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={completeCurrentExercise}
                >
                  Completar ejercicio
                </Button>
              </Box>
            ) : (
              <Typography variant="body1" color="text.secondary">
                Selecciona un ejercicio de la lista para comenzar
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
