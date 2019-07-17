import React from "react";
import { shallow } from "../../enzyme";
import Answers from "../../components/Answers";
import answers from "../fixtures/answers";

test("should render Answers with answers", () => {
  const wrapper = shallow(<Answers answers={answers} />);
  expect(wrapper).toMatchSnapshot();
});
