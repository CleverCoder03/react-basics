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
import { Badge } from "../../components/ui/badge"

const QueueCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Name: Senpai</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam.
        </CardDescription>
        <CardAction>
          <div className="[&_p]:text-sm">
            <p>Status: Waiting...</p> <p>Priority: <Badge variant="destructive">VIP</Badge></p>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <h1>Service: Loan</h1>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-end w-full gap-4">
          <Button variant="secondary">Serve</Button>
          <Button variant="destructive">
            <Trash2 />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QueueCard;
