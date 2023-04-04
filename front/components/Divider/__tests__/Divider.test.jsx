/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Divider } from "../Divider";

test("test Input button @snapshots", async () => {
  render(
    <>
      <Divider />
      <Divider type="horizontal" />
    </>
  );

  expect(screen).toMatchSnapshot();
});
