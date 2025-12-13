import "./App.css";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle.tsx";
import { Input } from "../components/ui/input";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [definedCount, setDefinedCount] = useState(0);
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="absolute top-0 right-0 m-5">
        <ModeToggle />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl font-semibold">Counter</h1>
        <h2>Current count : {count}</h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 [&_button]:cursor-pointer">
            <Button
              variant="outline"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Increment
            </Button>
            <Button
              variant="outline"
              onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
            >
              Decrement
            </Button>
            <Button
              variant="outline"
              onClick={() => (setCount(0), setDefinedCount(0))}
            >
              Reset
            </Button>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Enter Number"
              className="outline-none focus:outline-none focus:ring-0"
              value={definedCount}
              onChange={(e) => setDefinedCount(Number(e.target.value))}
            />
            <Button
              variant="outline"
              className="cursor-pointer"
              type="number"
              onClick={() => (setCount(Number(definedCount)), setDefinedCount(0))}
            >
              Set as {definedCount}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
