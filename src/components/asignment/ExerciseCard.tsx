import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Card, Tooltip, Typography } from "@mui/material";
import React from "react";

interface ExerciseCardProps {
  title: string;
  isFirst?: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  isFirst = false,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "18px",
        width: "100%",
        p: 2,
        position: "relative",
        borderLeft: isFirst
          ? (theme) => `4px solid ${theme.palette.primary.main}`
          : "none",
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
          variant="h6"
          component="div"
          sx={{
            fontSize: "1.125rem",
            fontWeight: isFirst ? 600 : 400,
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        <Tooltip title="En espera">
          <AccessTimeIcon
            fontSize="medium"
            color={isFirst ? "primary" : "action"}
          />
        </Tooltip>
      </Box>
    </Card>
  );
};

export default ExerciseCard;
