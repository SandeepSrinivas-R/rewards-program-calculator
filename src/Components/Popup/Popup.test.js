import { render, screen } from "@testing-library/react";
import Popupbg from "./Popup";

test("renders New Transaction link", () => {
  render(
    <Popupbg closePopup={true} popupTitle="Add New Transaction" header={true} />
  );
  const linkElement = screen.getByText(/Add New Transaction/);
  expect(linkElement).toBeInTheDocument();
});
