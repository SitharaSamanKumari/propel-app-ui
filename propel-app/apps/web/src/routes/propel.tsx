import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/propel")({
  component: PropelComponent,
});

function PropelComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold">Welcome to Propel!</h1>
      <p className="mt-4 text-center">
        This is the main application page. You can start building your app here.
      </p>
    </div>
  );
}