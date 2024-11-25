import { ErrorBoundary } from "@/components/features/error-boundary"

/**
 * @description: HOC for error boundary
 * @param Component: React.ComponentType<P>
 * @param fallback: React.ReactNode
 * @returns React.ComponentType<P>
 * @example
 * const MyComponent = WithErrorBoundary(
 *  <YourComponent />, 
 *  <CustomErrorUI />
 * )
 */
export function WithErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) {
  return function (props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }
}

