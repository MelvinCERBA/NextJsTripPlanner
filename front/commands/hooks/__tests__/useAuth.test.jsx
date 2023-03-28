/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from "react";

import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { useAuth } from "../useAuth";
import {rest} from "msw";
import {setupServer} from "msw/node";

const server = setupServer(
  rest.post("http://localhost:8081/user/login", (req, res, ctx) => {
    return res(ctx.json({
      data: {
        message: "ok",
        token: "token_example"
      },
      code: 200,
      message: "OK"
    }));
  }),
  rest.get("http://localhost:8081/user/profile", (req, res, ctx) => {
    return res(ctx.json({
      data: {
        message: {
          user: "jonathan",
          time: {
            "start": 1678191742.2840688,
            "end": 1894191742.2840688
          }
        }
      },
      code: 200,
      message: "OK"
    }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("inits without user then log in succesfully", async () => {
  const username = "jojo";
  const password = "password";

  const { result } = renderHook(() => useAuth());
  expect(result.current[0]).toEqual({});

  act(() => {
    result.current[1](username, password);
  });

  expect(result.current[0].username).toEqual(undefined);
});
