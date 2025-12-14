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
import {
  Sheet,
  SheetTrigger,
} from "../../components/ui/sheet";
import QueueCard from "./QueueCard";
import QueueForm from "./QueueForm";

const QueueDisplay = () => {
  return (
    <div className="w-200 h-full">
      <Card className="border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Bank Task Manager</CardTitle>
            <CardAction>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="default" className="cursor-pointer">
                    Add New Task
                  </Button>
                </SheetTrigger>
                  <QueueForm />
              </Sheet>
            </CardAction>
          </div>
        </CardHeader>
        <div className="px-5">
          <ScrollArea className="max-h-120 w-full rounded-md border py-4">
            <CardContent className="flex flex-col gap-5">
              <QueueCard />
            </CardContent>
          </ScrollArea>
        </div>
      </Card>
    </div>
  );
};

export default QueueDisplay;
