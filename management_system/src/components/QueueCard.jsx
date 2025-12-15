import { Trash2 } from "lucide-react";
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
import { Badge } from "../../components/ui/badge";

const QueueCard = ({ queue, updateStatus, removeTask }) => {
  return (
    <>
      {queue.length === 0 ? (
        <Card className="h-[200px] flex justify-center items-center">
          <CardContent>
            <p>No current task available</p>
          </CardContent>
        </Card>
      ) : (
        queue.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>Name: {task.username}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
              <CardAction>
                <div className="[&_p]:text-sm">
                  <p>
                    Status: <span className={`${task.status === "Serving" ? "text-yellow-400" : ""} ${task.status === "Completed" ? "text-green-400" : ""}`}>{task.status}</span>
                  </p>{" "}
                  <p>
                    Priority:{" "}
                    <Badge
                      variant={
                        task.priority === "VIP"
                          ? "destructive"
                          : task.priority === "Senior Citizen"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </p>
                </div>
              </CardAction>
            </CardHeader>
            <CardContent>
              <h1>Service: {task.service}</h1>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-end w-full gap-4">
                {task.status === "Waiting" && (
                  <Button
                    onClick={() => updateStatus(task.id, "Serving")}
                    variant="outline"
                  >
                    Serve
                  </Button>
                )}

                {task.status === "Serving" && (
                  <Button
                    onClick={() => updateStatus(task.id, "Completed")}
                    variant="secondary"
                  >
                    Complete
                  </Button>
                )}
                <Button
                  variant="destructive"
                  onClick={() => removeTask(task.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </>
  );
};

export default QueueCard;
