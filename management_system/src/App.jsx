import "./App.css";
import { Button } from "../components/ui/button";
import {ModeToggle} from "../components/mode-toggle"
import QueueDisplay from "./components/QueueDisplay";

function App() {
  return (
    <>
    <div className="fixed top-0 right-0 p-5">
      <ModeToggle />
    </div>
      <div className="flex flex-col pt-[20vh] items-center h-dvh">
        <h1 className="text-3xl font-semibold">Queue Management System</h1>
        <div>
          {/* FORM */}
          <div>

          </div>
          {/* Display */}
          <div className="mt-10">
            <QueueDisplay />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
