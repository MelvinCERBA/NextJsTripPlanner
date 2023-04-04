/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "../Layout";

test("test Layout button then @snapshots", async () => {
  render(
    <Layout title="Title" description="none">
      test example
    </Layout>
  );

  expect(screen).toMatchSnapshot();
});
