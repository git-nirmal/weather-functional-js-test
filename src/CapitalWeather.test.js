import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CapitalWeather from "./CapitalWeather.js";

test("should render button on screen", async () => {
  render(<BrowserRouter><CapitalWeather /></BrowserRouter>);
  // const buttonElement = screen.getByRole("button");
  expect(await screen.findByRole("button")).toBeInTheDocument();
  expect(await screen.findByRole("heading")).toBeInTheDocument();
});

// test("should render heading on screen", async () => {
//   render(<BrowserRouter>
//   <CapitalWeather />
//   </BrowserRouter>);
//   // const buttonElement = screen.getByRole("button");
//   expect(await screen.findByRole("heading")).toBeInTheDocument();
// });

// test("should render heading on screen", async () => {
//   render(<CapitalWeather />);
//   // const buttonElement = screen.getByRole("button");
//   expect(await screen.findByTestId("cwMainDiv")).toBeInTheDocument();
// });

// test("should render heading on screen", async () => {
//   render(<CapitalWeather />);
//   const Element = await screen.findByTestId("cwMainDiv");
// //   expect(await screen.findByTestId("cwMainDiv")).toBeInTheDocument();
// expect(Element.childElementCount).toBe(1);
// });
