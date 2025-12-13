import "./App.css";
import { Button } from "../components/ui/button";
import {ModeToggle} from "../components/mode-toggle"

function App() {
  return (
    <>
    <div className="fixed top-0 right-0 p-5">
      <ModeToggle />
    </div>
      <div className="flex justify-center items-center h-dvh">
        <Button variant="outline">Senpai</Button>
      </div>
    </>
  );
}

export default App;
