import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";

// jest.mock("axios", () => {
//   return {
//     get: url => {
//       return Promise.resolve({ data: { episodes } });
//     }
//   };
// });

describe("App", () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

 it("expect the app component to display", async () => {
    const text = await wrapper.findByText("Select a season");
    expect(text).toBeInTheDocument();
  });

   
 
});
