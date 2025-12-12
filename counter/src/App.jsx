import "./App.css";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle.tsx";
import { Input } from "../components/ui/input"

function App() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="absolute top-0 right-0 m-5">
        <ModeToggle />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl font-semibold">Counter</h1>
        <h2>Current count : 0</h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button variant="outline">Increment</Button>
            <Button variant="outline">Decrement</Button>
            <Button variant="outline">Reset</Button>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Enter Number" className="outline-none focus:outline-none focus:ring-0" />
            <Button variant="outline">Set as 0</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
