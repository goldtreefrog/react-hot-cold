import React from "react";
import { shallow } from "enzyme";

import GuessForm from "./../components/guess-form.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<GuessForm />", () => {
  it("Renders OK", () => {
    shallow(<GuessForm />);
  });
});
