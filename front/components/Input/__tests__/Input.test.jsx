/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";

import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Input from "../Input";
import { act } from "@testing-library/react";

test("loads and displays greeting", async () => {
  render(<Input label="la con de ses morts" /> );
  await act(async () => {
    await userEvent.type(screen.getByLabelText("la con de ses morts") , "la putain de ta race");
  });

  expect(screen.getByLabelText("la con de ses morts").value).toBe("la putain de ta race");
});
