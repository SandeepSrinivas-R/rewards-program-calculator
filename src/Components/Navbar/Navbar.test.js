import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter, Router } from "react-router-dom";

test("renders New Transaction link", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/New Transaction/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Dashboard link", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Dashboard/);
  expect(linkElement).toBeInTheDocument();
});
