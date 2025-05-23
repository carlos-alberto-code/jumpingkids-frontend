import { Box, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

/**
 * Layout principal para la pantalla de asignaciones de ejercicios
 *
 * Este componente organiza la estructura de dos columnas descrita en los requisitos:
 * - Columna Principal (65%): Para el área de trabajo del ejercicio
 * - Columna Secundaria (35%): Para la lista de ejercicios y progreso
 */
const Layout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        height: "100%",
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Columna Principal (65%) - Área de trabajo */}
        <Grid
          sx={{
            flexGrow: 1,
            width: { xs: "100%", md: "65%" },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              border: "1px dashed blue",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Area de trabajo del ejercicio */}
            <Box sx={{ p: 1, border: "1px dashed red", flexGrow: 1 }}>
              Área de trabajo del ejercicio (ExerciseWorkArea)
            </Box>
          </Paper>
        </Grid>

        {/* Columna Secundaria (35%) - Panel de progreso y lista de ejercicios */}
        <Grid
          sx={{
            width: { xs: "100%", md: "35%" },
            height: { xs: "auto", md: "100%" },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              border: "1px dashed green",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Indicador de progreso */}
            <Box sx={{ p: 1, mb: 2, border: "1px dashed orange" }}>
              Indicador de progreso (ProgressIndicator)
            </Box>

            {/* Lista de ejercicios */}
            <Box sx={{ p: 1, border: "1px dashed purple", flexGrow: 1 }}>
              Lista de ejercicios (ExerciseList)
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
