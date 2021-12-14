import { render, screen } from "@testing-library/react";
import NotFound from "./PageNotFound";

test("renders Not Found page", () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Page Not Found/);
  expect(linkElement).toBeInTheDocument();
});
