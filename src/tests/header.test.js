import React from "react";
import { shallow } from "enzyme";

import Header from "./../components/header.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("Renders OK", () => {
    shallow(<Header />);
  });
});
