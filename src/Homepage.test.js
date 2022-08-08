import Homepage from "./Homepage";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.setTimeout(10000)

test("should render main heading", async () => {
    render(<Homepage />);
    const inputElement = screen.getByText("Get Details By Country");
    expect(inputElement).toBeInTheDocument;
  });

test("should render input element", async () => {
  render(<Homepage />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument;
});

test("input element should be visible", async () => {
  render(<Homepage />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeVisible;
});

test("input element's placeholder text is visible", async () => {
  render(<Homepage />);
  const inputPlaceholderText = screen.getByPlaceholderText("Enter Country");
  expect(inputPlaceholderText).toBeInTheDocument;
});

test("should render button on screen", async () => {
  render(<Homepage />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeVisible;
});

test("should have input value as country's name", async () => {
    render(<Homepage />);
    const inpElement = screen.getByTestId("countryinput");
    fireEvent.change(inpElement, {
        target: {
            value: "India"
    }}
    )
    expect(inpElement.value).toBe("India");
  });

  test("should render button on screen", async () => {
    render(<Homepage />);
    const input = screen.getByPlaceholderText("Enter Country");
    fireEvent.change(input, {target:{
        value:"Denmark"
    }})
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    await waitFor(() => {
        expect(screen.getByTestId("MainDiv")).toBeVisible();
      }, { timeout: 5000 });
    
  });
  
  