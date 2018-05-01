import React from "react";
import { shallow } from "enzyme";

import StatusSection from "./../components/status-section.js";

import Enzyme from "enzyme";

describe("<StatusSection />", () => {
  it("Renders without crashing", () => {
    shallow(<StatusSection auralStatus="test" guesses={[3]} />);
  });
});
