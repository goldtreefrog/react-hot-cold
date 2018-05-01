import React from "react";
import { shallow } from "enzyme";

import AuralStatus from "./../components/aural-status.js";

describe("<AuralStatus />", () => {
  it("Renders OK", () => {
    shallow(<AuralStatus />);
  });

  it("Contains the right elements", () => {
    const wrapper = shallow(<AuralStatus />);
    expect("p#status-readout").toExist;
  });

  it("Updates aural status", () => {
    const wrapper = shallow(<AuralStatus auralStatus={"This is a game"} />);
    expect(wrapper.contains("This is a game")).toEqual(true);
  });
});
