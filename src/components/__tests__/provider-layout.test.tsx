import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryProvider } from "@/providers/query-provider";
import { ErrorBoundary } from "@/components/error-boundary";

function Thrower() {
  throw new Error("boom");
}

describe("Provider/Layout wiring", () => {
  test("QueryProvider renders children", () => {
    render(
      <QueryProvider>
        <div>hello-query</div>
      </QueryProvider>,
    );

    expect(screen.getByText("hello-query")).toBeInTheDocument();
  });

  test("ErrorBoundary shows fallback on error", () => {
    render(
      <ErrorBoundary>
        {/* @ts-expect-error: intentionally throwing in render */}
        <Thrower />
      </ErrorBoundary>,
    );

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/boom/)).toBeInTheDocument();
  });
});
