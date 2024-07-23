import CalendarView from "./CalendarView";
import "./App.css";
import { CursorController } from "./CursorController";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />

      <CalendarView className="fixed top-24 left-20 right-20 bottom-36 z-10 overflow-hidden" />
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
    </>
  );
}

export default App;
