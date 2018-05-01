import React from "react";
import { shallow } from "enzyme";

import Feedback from "./../components/feedback.js";

describe("<Feedback />", () => {
  it("Renders OK", () => {
    shallow(<Feedback />);
  });

  it("Renders the guess count", () => {
    let TEST_GUEST_COUNT = 5;
    let wrapper = shallow(<Feedback guessCount={TEST_GUEST_COUNT} />);
    expect(wrapper.contains(TEST_GUEST_COUNT));
  });
});
