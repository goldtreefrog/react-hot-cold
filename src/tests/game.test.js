import React from "react";
import { shallow } from "enzyme";

import Game from "./../components/game.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<Game />", () => {
  it("Renders OK", () => {
    shallow(<Game />);
  });

  it("Can make guesses", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 70
    });
    wrapper.instance().makeGuess(5);
    expect(wrapper.state("guesses")).toEqual([5]);
    expect(wrapper.state("feedback")).toEqual("You're Ice Cold...");

    wrapper.instance().makeGuess(65);
    expect(wrapper.state("guesses")).toEqual([5, 65]);
    expect(wrapper.state("feedback")).toEqual("You're Hot!");
  });
});
