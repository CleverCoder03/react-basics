import { Button } from "../../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Sheet, SheetTrigger } from "../../components/ui/sheet";
import QueueCard from "./QueueCard";
import QueueForm from "./QueueForm";

const QueueDisplay = ({
  onAdd,
  queue,
  updateStatus,
  removeTask,
  STORAGE_KEY,
  setQueue,
}) => {
  return (
    <div className="md:w-200 h-full">
      <Card className="border-0">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <CardTitle>Bank Task Manager</CardTitle>
            <CardAction>
              <div className="flex items-center justify-center w-dvw md:w-full">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="default"
                      size="sm"
                      className="cursor-pointer"
                    >
                      Add New Task
                    </Button>
                  </SheetTrigger>
                  <QueueForm onAdd={onAdd} />
                </Sheet>
                <Button
                  variant="destructive"
                  className="ml-2 md:ml-4"
                  size="sm"
                  onClick={() => {
                    localStorage.removeItem(STORAGE_KEY);
                    setQueue([]);
                  }}
                >
                  Clear All
                </Button>
              </div>
            </CardAction>
          </div>
        </CardHeader>
        <div className="px-5">
          <ScrollArea className="h-120 w-dvw md:w-full rounded-md border py-4">
            <CardContent className="flex flex-col gap-5 px-2">
              <QueueCard
                queue={queue}
                updateStatus={updateStatus}
                removeTask={removeTask}
              />
            </CardContent>
          </ScrollArea>
        </div>
      </Card>
    </div>
  );
};

export default QueueDisplay;
