import "./App.css";
import { Box } from "@mui/material";
import LoginForm from "./components/form/LoginForm";
import ExerciseCard from "./components/card/ExerciseCard";

function App() {
  return (
    <Box>
      <LoginForm></LoginForm>
      <ExerciseCard
        title="Elevaciones Laterales"
        gifUrl="https://fitcron.com/wp-content/uploads/2021/04/02871301-Dumbbell-Arnold-Press-II_Shoulders_720.gif"
        category="Fuerza"
        duration="30s"
      >        
      </ExerciseCard>
    </Box>
  );
}

export default App;
