import React from "react";
import { shallow } from "../../enzyme";
import Questions from "../../components/Questions";
import questions from "../fixtures/questions";

test("should render Questions with questions", () => {
  const wrapper = shallow(<Questions questions={questions} />);
  expect(wrapper).toMatchSnapshot();
});
