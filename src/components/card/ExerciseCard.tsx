import React from 'react';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Card, Chip, Grid, Stack, Tooltip, Typography } from "@mui/material";

interface ExerciseCardProps {
  title: string;
  gifUrl: string;
  category: string;
  duration: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  gifUrl,
  category,
  duration,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "18px",
        width: "100%",
        p: 2,
        position: "relative",
      }}
    >
      <Grid container spacing={2} alignItems="center" columns={12}>
        {/* Primera columna - GIF */}
        <Grid size={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={gifUrl}
              alt={title}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* Segunda columna - Título y Tags */}
        <Grid size={{ xs: 7, sm: 8, md: 8, lg: 9 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                mb: 1,
                fontSize: "1.125rem",
                fontWeight: 600,
                textAlign: "left",
                width: "100%",
              }}
            >
              {title}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip
                label={category}
                variant="filled"
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "0.875rem",
                  backgroundColor: "transparent",
                  mb: 0.5,
                }}
              />
              <Chip
                label={duration}
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "0.875rem",
                  backgroundColor: "transparent",
                  mb: 0.5,
                }}
              />
            </Stack>
          </Box>
        </Grid>

        {/* Tercera columna - Ícono */}
        <Grid 
          size={{ xs: 2, sm: 2, md: 2, lg: 1 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "#666",
              p: 1,
            }}
          >
            <Tooltip title="En espera">
              <AccessTimeIcon fontSize="medium" />
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ExerciseCard;