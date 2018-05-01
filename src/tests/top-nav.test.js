import React from "react";
import { shallow, mount } from "enzyme";

import TopNav from "./../components/top-nav.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<TopNav />", () => {
  it("Renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("Should fire the new game callback when New Game is clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const newGameLink = wrapper.find(".new");
    newGameLink.simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
