import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App.tsx", () => {
  it("renders", () => {
    render(<App />);
    const got = screen.getByRole("main");
    expect(got).toBeTruthy();
  });
});
