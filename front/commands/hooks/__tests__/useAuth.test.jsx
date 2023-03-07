/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import "@testing-library/jest-dom";
import {renderHook} from "@testing-library/react";
import { useAuth } from "../useAuth";

test("returns logged in user", () => {
  const username = "jojo";
  const password = "password";

  const { result } = renderHook(() => {
    const [user, setUser, error] = useAuth();
    React.useEffect(() => {
      setUser(user, password);
    });
    return error;
  });

  expect(result.current).toEqual(`${username} is not registered`);
});
