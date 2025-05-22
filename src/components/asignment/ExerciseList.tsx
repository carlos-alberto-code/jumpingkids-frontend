import { Box, Paper, Typography } from "@mui/material";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import ProgressIndicator from "./ProgressIndicator";
import type { Exercise } from "./types";

interface ExerciseListProps {
  initialExercises: Exercise[];
  onExerciseSelected: (exercise: Exercise) => void;
  onExerciseCompleted?: (exerciseId: number) => void;
}

export interface ExerciseListRef {
  completeExercise: (exerciseId: number) => void;
}

const ExerciseList = forwardRef<ExerciseListRef, ExerciseListProps>(
  ({ initialExercises, onExerciseSelected, onExerciseCompleted }, ref) => {
    // Track pending and completed exercises
    const [pendingExercises, setPendingExercises] = useState<Exercise[]>([]);
    const [completedExercises, setCompletedExercises] = useState<Exercise[]>(
      []
    );
    const [totalExerciseCount, setTotalExerciseCount] = useState<number>(0);

    // Initialize state on component mount or when initial exercises change
    useEffect(() => {
      setPendingExercises(initialExercises);
      setTotalExerciseCount(initialExercises.length);
    }, [initialExercises]);

    // Calculate progress percentage
    const progressPercentage =
      totalExerciseCount > 0
        ? (completedExercises.length / totalExerciseCount) * 100
        : 0;

    // Handle selecting the next exercise
    const selectNextExercise = useCallback(() => {
      if (pendingExercises.length > 0) {
        const nextExercise = pendingExercises[0];
        onExerciseSelected(nextExercise);
      }
    }, [pendingExercises, onExerciseSelected]);
  
    // Handle completing an exercise (exposed as public method)
    const completeExercise = useCallback((exerciseId: number) => {
      const exerciseToComplete = pendingExercises.find(
        (ex) => ex.id === exerciseId
      );
  
      if (exerciseToComplete) {
        // Remove from pending
        setPendingExercises(
          pendingExercises.filter((ex) => ex.id !== exerciseId)
        );
  
        // Add to completed
        setCompletedExercises([...completedExercises, exerciseToComplete]);
  
        // Notify parent component if callback provided
        if (onExerciseCompleted) {
          onExerciseCompleted(exerciseId);
        }
  
        // Auto-select next exercise if available
        if (pendingExercises.length > 1) {
          selectNextExercise();
        }
      }
    }, [pendingExercises, completedExercises, onExerciseCompleted, selectNextExercise]);

    // Expose the completeExercise method
    useImperativeHandle(
      ref,
      () => ({
        completeExercise,
      }),
      [completeExercise]
    );

    return (
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom align="center">
          Ejercicios
        </Typography>

        <ProgressIndicator
          value={progressPercentage}
          completedCount={completedExercises.length}
          totalCount={totalExerciseCount}
        />

        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {},
            pt: 1,
            mt: 2,
          }}
        >
          {pendingExercises.length === 0 ? (
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 2 }}
            >
              {completedExercises.length > 0
                ? "¡Felicidades! Has completado todos los ejercicios."
                : "No hay ejercicios disponibles."}
            </Typography>
          ) : (
            pendingExercises.map((exercise, index) => (
              <Box
                key={exercise.id}
                sx={{ mb: 2 }}
                onClick={() => onExerciseSelected(exercise)}
              >
                <ExerciseCard title={exercise.title} isFirst={index === 0} />
              </Box>
            ))
          )}
        </Box>
      </Paper>
    );
  }
);

export default ExerciseList;
