import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShowData from "./ShowData";
import "@testing-library/jest-dom";

const MockShowData =(item) =>{
        <BrowserRouter>
                <ShowData item={item} />
                
        </BrowserRouter>
}

const uae={
    capital: "Abu Dhabi",
    population: 9890400,
    latitude: 24,
    longitude: 54,
    flag: "https://flagcdn.com/ae.svg"
};

// test("should render ShowData component", async () => {
//     render(<MockShowData item={uae}/>);
//     const imgElement = screen.getByText('Abu Dhabi');
    // expect(<MockShowData item={uae} />).toBeVisible;
//   });

//   test("should render buttont", async () => {
//     render(<MockShowData item={uae}/>);
//     const txtElement = screen.getByRole('button');
//     expect(txtElement).toBeInTheDocument;
//   });

// test("button", async () => {

//     render(<MockShowData item={uae} />);
//     const divElement = screen.getByTestId("MainDiv");
//     expect(divElement.childElementCount).toBe(6);
//     expect(divElement.childNodes).toBeTruthy();
// }
// )