import CalendarView from "./CalendarView";
import "./App.css";
import { CursorController } from "./CursorController";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
import { Snackbar } from "@mui/joy";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/joy/Button';

function App() {
  const [snackbarState, setSnackbarState] = useState(false);

  return (
    <>
      <NavigationBar />

      <CalendarView
        snackbarState={snackbarState}
        setSnackbarState={setSnackbarState}
      />
      <div className="relative h-screen">
        <div className="gradient-background absolute inset-0 z-[-1]">
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 w-full flex justify-center">
        <img src="/scroll_icon.png" alt="Scroll Icon" />
      </div>

      <CursorController />

      <Snackbar
        variant="soft"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarState}
        onClose={() => {
          setSnackbarState(false);
        }}
        startDecorator={<CheckCircleOutlineIcon />}
        endDecorator={
          <Button
            onClick={() => setSnackbarState(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
        key={"top" + "center"}
        color="success"
        size="sm"
        autoHideDuration={3000}
      >
        Appointment has been successfully booked!
      </Snackbar>
    </>
  );
}

export default App;
