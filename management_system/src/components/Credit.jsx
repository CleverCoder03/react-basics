import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export const Credit = () => {
  return (
    <Card className="w-90 md:w-200">
  <CardHeader>
    <CardTitle>About This Project</CardTitle>
    <CardDescription>
      This Queue Management System was built as a hands-on project to practice
      modern React development, component-driven UI design, and state management.
      The goal was to create a clean, functional, and scalable interface while
      experimenting with real-world patterns.
    </CardDescription>
  </CardHeader>

  <CardHeader>
    <CardTitle>Tech Stack</CardTitle>
    <CardDescription>
      React, Bun, pnpm, Tailwind CSS, shadcn/ui, Radix UI, Zod, React Hook Form,
      Git, GitHub, and Vercel.
    </CardDescription>
  </CardHeader>

  <CardHeader>
    <CardTitle>Credits</CardTitle>
    <CardDescription className="space-y-2">
      <p>
        Designed and developed by <span className="font-medium">Vishal Mishra</span>.
      </p>
      <p>
        Follow me on{" "}
        <a
          href="https://x.com/CleverCoder0"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-primary"
        >
          X (Twitter)
        </a>{" "}
        for tech updates and learnings.
      </p>
      <p>
        View my work and projects on my{" "}
        <a
          href="https://vishalmishra.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-primary"
        >
          Portfolio
        </a>.
      </p>
    </CardDescription>
  </CardHeader>
</Card>

  );
};
