import React from "react";
import { shallow } from "enzyme";

import GuessList from "./../components/guess-list.js";

import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("<GuessList />", () => {
  it("Renders OK", () => {
    shallow(<GuessList guesses={[]} />);
  });

  it("Shows a list of previous guesses", () => {
    const prevGuesses = ["5", "10", "99"];
    const wrapper = shallow(<GuessList guesses={prevGuesses} />);
    expect(wrapper.hasClass("guess-box"));
    const children = wrapper.find("li");
    prevGuesses.forEach((guess, index) => {
      expect(children.at(index).text()).toEqual(guess);
    });
  });
});
