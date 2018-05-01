import React from "react";
import { shallow } from "enzyme";

import InfoSection from "./../components/info-section.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<InfoSection />", () => {
  it("Renders OK", () => {
    shallow(<InfoSection />);
  });
});
