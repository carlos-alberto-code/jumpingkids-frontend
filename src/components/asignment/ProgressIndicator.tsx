import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

interface ProgressIndicatorProps {
  value: number;
  completedCount: number;
  totalCount: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  value,
  completedCount,
  totalCount,
}) => {

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Progreso
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Math.round(value)}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          "& .MuiLinearProgress-bar": {
          },
        }}
      />
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 1 }}
      >
        {completedCount}/{totalCount} completados
      </Typography>
    </Box>
  );
};

export default ProgressIndicator;
