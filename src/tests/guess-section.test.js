import React from "react";
import { shallow } from "enzyme";

import GuessSection from "./../components/guess-section.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<GuessSection />", () => {
  it("Renders OK", () => {
    shallow(<GuessSection />);
  });
});
