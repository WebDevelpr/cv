import { AlertTriangle } from "lucide-react";
import { type FallbackProps } from "react-error-boundary";

import { Button } from "@/components/ui/button";

const NotFoundPage = ({ resetErrorBoundary, error }: FallbackProps) => {
  return (
    <section className="from-background to-muted/30 flex h-dvh flex-col items-center justify-center rounded-lg bg-linear-to-b p-6">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <div className="rounded-full bg-red-100 p-6">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>

        <h2 className="text-3xl font-bold tracking-tight">Щось пішло так</h2>

        <p className="text-muted-foreground">
          Сталася неочікувана помилка. Ймовірно, це тимчасова проблема, яку ми
          виправляємо.
        </p>

        <div className="bg-muted w-full overflow-auto rounded-md p-4 text-left text-sm">
          <p className="font-mono text-red-500">
            {error.message || "Unknown error"}
          </p>
          {error.digest && (
            <p className="text-muted-foreground mt-2 font-mono text-xs">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <Button onClick={resetErrorBoundary}>Спробуйте знову</Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
