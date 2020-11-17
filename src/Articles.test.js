import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Articles from "./components/Articles/component";

it("renders correctly", () => {
    const { queryByTestId } = render(<Articles />)

    expect(queryByTestId("sortbyupvotes")).toBeTruthy()
    expect(queryByTestId("sortbydates")).toBeTruthy()
})