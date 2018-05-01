import React from "react";
import { shallow } from "enzyme";

import GuessCount from "./../components/guess-count.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<GuessCount />", () => {
  it("Renders OK", () => {
    shallow(<GuessCount />);
  });
});
