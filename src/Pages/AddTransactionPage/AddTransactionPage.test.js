import { render, screen } from "@testing-library/react";
import AddTransactionPage from "./AddTransactionPage";

test("renders Not Found page", () => {
  render(<AddTransactionPage />);
  const linkElement = screen.getByText(/Add Transactions Page here/);
  expect(linkElement).toBeInTheDocument();
});
