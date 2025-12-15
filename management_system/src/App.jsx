import "./App.css";
import { ModeToggle } from "../components/mode-toggle";
import QueueDisplay from "./components/QueueDisplay";
import { useEffect, useState } from "react";

function App() {
  const STORAGE_KEY = "SENPAI";

  const [queue, setQueue] = useState(() => {
    const storedQueue = localStorage.getItem(STORAGE_KEY);
    return storedQueue ? JSON.parse(storedQueue) : []
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
  }, [queue]);


  const addToQueue = (data) => {
    setQueue([...queue, { ...data, id: Date.now(), status: "Waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const removeTask = (id) => {
    setQueue(queue.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="fixed top-0 right-0 p-5">
        <ModeToggle />
      </div>
      <div className="flex flex-col pt-[20vh] items-center h-dvh">
        <h1 className="text-3xl font-semibold">Queue Management System</h1>
        <div>
          {/* Display */}
          <div className="mt-10">
            <QueueDisplay
              onAdd={addToQueue}
              queue={queue}
              updateStatus={updateStatus}
              removeTask={removeTask}
              setQueue={setQueue}
              STORAGE_KEY={STORAGE_KEY}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
