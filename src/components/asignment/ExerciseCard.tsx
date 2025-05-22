import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Card, Tooltip, Typography } from "@mui/material";
import React from "react";

interface ExerciseCardProps {
  title: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ title }) => {
  return (
    <Card
      sx={{
        borderRadius: "8px",
        width: "100%",
        p: 2,
        transition: "background-color 0.2s",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.03)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontSize: "1.0rem",
            fontWeight: 300,
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        <Tooltip title="Ejercicio">
          <AccessTimeIcon fontSize="medium" color="action" />
        </Tooltip>
      </Box>
    </Card>
  );
};

export default ExerciseCard;
