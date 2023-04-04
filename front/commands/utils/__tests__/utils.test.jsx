/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { formatCurrency } from "../formatCurrency";
import { joinClasses } from "../joinClasses";

test("tests formatCurrency", () => {
  const result = formatCurrency(25);

  expect(result).toMatch("25,00");
});

test("tests formatCurrency with decimals", () => {
  const result = formatCurrency(0.34904532);

  expect(result).toMatch("0,35");
});

test("tests joinClasses", async () => {
  let result = joinClasses(["aa", "bb"]);

  expect(result).toEqual("aa bb");

  result = joinClasses();

  expect(result).toEqual("");
});
