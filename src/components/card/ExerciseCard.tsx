import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Card, Chip, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";

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
        display: "flex",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "600px",
        p: 2,
        position: "relative",
        alignItems: "center",
        height: "120px",
      }}
    >
      <Box
        sx={{
          width: "80px",
          height: "90px",
          flexShrink: 0,
          mr: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

      {/* Content section - Title and chips */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexGrow: 1,
          padding: 0, // Remove padding
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            mb: 1,
            fontSize: "18px",
            fontWeight: 600,
            color: "#333",
            textAlign: "left",
            width: "100%",
          }}
        >
          {title}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Chip
            label={category}
            variant="outlined"
            sx={{
              borderRadius: "8px", // Less rounded, more rectangular
              border: "1px solid #ddd",
              height: "32px",
              fontSize: "14px",
              backgroundColor: "transparent",
            }}
          />
          <Chip
            label={duration}
            variant="outlined"
            sx={{
              borderRadius: "8px", // Less rounded, more rectangular
              border: "1px solid #ddd",
              height: "32px",
              fontSize: "14px",
              backgroundColor: "transparent",
            }}
          />
        </Stack>
      </Box>

      {/* Clock icon on right */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          color: "#666",
        }}
      >
        <Tooltip title="En espera">
          <AccessTimeIcon fontSize="medium" />
        </Tooltip>
      </Box>
    </Card>
  );
};

export default ExerciseCard;
