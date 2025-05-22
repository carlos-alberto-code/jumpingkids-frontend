import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import type { Exercise } from "./types";

interface ExerciseListProps {
  initialExercises: Exercise[];
  onExerciseSelected: (exercise: Exercise) => void;
  onExerciseCompleted?: (exerciseId: number) => void;
}

const ExerciseList = ({ initialExercises }: ExerciseListProps) => {
  // Track exercises
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // Initialize state on component mount or when initial exercises change
  useEffect(() => {
    setExercises(initialExercises);
  }, [initialExercises]);

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
        overflow: "hidden", // Asegura que el contenedor no tenga overflow
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto", // Esto permite el scroll
          height: "100%",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        }}
      >
        {exercises.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 2 }}
          >
            No hay ejercicios disponibles.
          </Typography>
        ) : (
          exercises.map((exercise) => (
            <Box key={exercise.id} sx={{ mb: 2 }}>
              <ExerciseCard title={exercise.title} />
            </Box>
          ))
        )}
      </Box>
    </Paper>
  );
};

export default ExerciseList;
