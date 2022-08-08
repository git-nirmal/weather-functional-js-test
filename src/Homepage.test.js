import Homepage from "./Homepage";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// jest.setTimeout(10000)

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

//   test("should render button on screen", async () => {
//     render(<Homepage />);
//     const input = screen.getByPlaceholderText("Enter Country");
//     fireEvent.change(input, {target:{
//         value:"Denmark"
//     }})
//     const buttonElement = screen.getByRole("button");
//     fireEvent.click(buttonElement);
//     await waitFor(() => {
//         expect(screen.getByText("Copenhagen")).toBeInTheDocument();
//       }, { timeout: 5000 });
    
//   });

test("should render div and button", async () => {
    render(<BrowserRouter><Homepage /></BrowserRouter>);
    const buttonElement = screen.getByRole("button",{name:"Submit"});
    const inpElement = screen.getByTestId("countryinput");
    fireEvent.change(inpElement, {target: {value: "India"}});
    fireEvent.click(screen.getByRole("button",{name:"Submit"}));


    expect(await screen.findByTestId("MainDiv")).toBeInTheDocument;
    expect(await screen.findByRole("button",{name:"Capital Weather"})).toBeInTheDocument;

  });

  
  