/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "../Button";
import { act } from "@testing-library/react";
import { useState } from "react";

const LABEL_VALUE = "simple_input";

test("it click on basic button", async () => {
  render(<Button onClick={() => setWord("hello")} />);

  act(() => {
    userEvent.click(screen.getByLabelText("Button"));
  });

  expect(word).toBe("hello");
});

test("it change the input value", async () => {
  render(
    <Button
      label={LABEL_VALUE}
      alternate={true}
      onClick={() => setWord("hello")}
    />
  );

  act(() => {
    userEvent.click(screen.getByLabelText(LABEL_VALUE));
  });

  expect(word).toBe("hello");
});

test("test Input button @snapshots", async () => {
  render(<Button alternate={null} label={LABEL_VALUE} />);

  expect(screen).toMatchSnapshot();
});
