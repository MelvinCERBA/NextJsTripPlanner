/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from "react";

import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { NavBar } from "../NavBar";
import { ApiContextWrapper, DisplayContextWrapper } from "@/contexts";
import { fireEvent } from "@storybook/testing-library";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.post("http://localhost:8081/user/login", (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          message: "ok",
          token: "token_example",
        },
        code: 200,
        message: "OK",
      })
    );
  }),
  rest.get("http://localhost:8081/user/profile", (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          message: {
            user: "jonathan",
            time: {
              start: 1678191742.2840688,
              end: 1894191742.2840688,
            },
          },
        },
        code: 200,
        message: "OK",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("NavBar", () => {
  test("All elements displayed", () => {
    const { getByText } = render(
      <ApiContextWrapper>
        <DisplayContextWrapper>
          <NavBar />
        </DisplayContextWrapper>
      </ApiContextWrapper>
    );

    const title = getByText("Trip Tise");
    const btn_login = getByText("Se connecter");
    const btn_signin = getByText("S'enregistrer");

    expect(title).toBeInTheDocument();
    expect(btn_login).toBeInTheDocument();
    expect(btn_signin).toBeInTheDocument();
  });

  test("Click on login button", () => {
    const { getByText } = render(
      <ApiContextWrapper>
        <DisplayContextWrapper>
          <NavBar />
        </DisplayContextWrapper>
      </ApiContextWrapper>
    );

    act(() => {
      fireEvent(
        getByText("Se connecter"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    expect(screen.getByText("Trip Tise")).toBeInTheDocument();
  });

  test("Click on register button", () => {
    const { getByText } = render(
      <ApiContextWrapper>
        <DisplayContextWrapper>
          <NavBar />
        </DisplayContextWrapper>
      </ApiContextWrapper>
    );

    act(() => {
      fireEvent(
        getByText("S'enregistrer"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    expect(screen.getByText("Trip Tise")).toBeInTheDocument();
  });

  test("Click on burger button", () => {
    const { getByTestId } = render(
      <ApiContextWrapper>
        <DisplayContextWrapper>
          <NavBar />
        </DisplayContextWrapper>
      </ApiContextWrapper>
    );

    act(() => {
      fireEvent(
        getByTestId("burgerMenu"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    expect(screen.getByText("Trip Tise")).toBeInTheDocument();
  });
});
