/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Input } from "../Input";
import { act } from "@testing-library/react";

const LABEL_VALUE = "simple_input";

test("it change the input value", async () => {
  const REPLACEMENT_TEXT = "Je veux plutôt ça !";

  render(<Input label={LABEL_VALUE} />);

  act(() => {
    userEvent.type(screen.getByLabelText(LABEL_VALUE), REPLACEMENT_TEXT);
  });

  expect(screen.getByLabelText(LABEL_VALUE).value).toBe("");
});

test("it change the input value by the placeholder", async () => {
  const PLACEHOLDER_VALUE = "simple_placeholder";

  render(<Input label={LABEL_VALUE} placeholder={PLACEHOLDER_VALUE} />);
  act(() => {
    userEvent.type(
      screen.getByPlaceholderText(PLACEHOLDER_VALUE),
      "la putain de ta race"
    );
  });

  expect(screen.getByLabelText(LABEL_VALUE).value).toBe("");
});

test("test Input appearance @snapshots", async () => {
  render(<Input label={LABEL_VALUE} />);

  expect(screen).toMatchSnapshot();
});
