import React from 'react'
import { DefaultErrorBoundary } from './default'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to service like Sentry React
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null
    })
  }

  render() {
    const { hasError, error } = this.state
    const { children, fallback } = this.props

    if (hasError) {
      // IF has custom fallback UI
      // Here we can use fallback UI with each specific component
      if (fallback) {
        return fallback
      }

      // Default Error UI
      return (
        <DefaultErrorBoundary
          error={error}
          handleReset={this.handleReset}
        />
      )
    }

    return children
  }
}

