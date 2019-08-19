// Test away!
import React from "react";

import { fireEvent, render } from "@testing-library/react";
import Controls from "./Controls";

it("should invoke a function when unlock or lock gate is clicked", () => {
  const toggleLocked = jest.fn();
  const locked = true;
  const closed = true;

  const { getByText } = render(
    <Controls toggleLocked={toggleLocked} locked={locked} closed={closed} />
  );
  fireEvent.click(getByText("Unlock Gate"));

  expect(toggleLocked).toHaveBeenCalled();
});
