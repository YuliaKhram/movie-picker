"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  fallback?: (error: Error) => React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary component for catching and displaying errors.
 *
 * Catches errors in the component tree and displays a fallback UI instead.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback?.(this.state.error!) || (
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              color: "#d32f2f",
            }}
          >
            <h1>Something went wrong</h1>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                textAlign: "left",
                maxWidth: "60ch",
                margin: "1rem auto",
              }}
            >
              {this.state.error?.message}
            </pre>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
