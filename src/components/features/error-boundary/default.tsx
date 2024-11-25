
import { Button } from "@/components/shared/ui/button";
import { X } from "lucide-react";

export function DefaultErrorBoundary({ error, handleReset }: { error: Error | null, handleReset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-6 text-center">
        <div className="mb-4">
          <X className="h-12 w-12 text-destructive mx-auto" />
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Oops! Something went wrong
        </h1>

        <div className="mb-4 text-muted-foreground">
          {error?.message || 'An unexpected error occurred'}
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={handleReset}
          >
            Try again
          </Button>

          <Button
            onClick={() => window.location.href = '/'}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
