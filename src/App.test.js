import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders New Transaction link", () => {
  render(<App />);
  const linkElement = screen.getByText(/New Transaction/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Dashboard link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/);
  expect(linkElement).toBeInTheDocument();
});

test("renders All Transactions link", () => {
  render(<App />);
  const linkElement = screen.getByText(/All Transactions/);
  expect(linkElement).toBeInTheDocument();
});
