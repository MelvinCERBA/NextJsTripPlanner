/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import useCookie from "react-use-cookie";
import axios from "axios";

export const useAuth = () => {
  const [error, setError] = useState("");
  const [cookie_userName, setCookieUserName] = useCookie("TT_USER_NAME", "");
  const [cookie_userToken, setCookieUserToken] = useCookie("TT_USER_TOKN", "");
  const [username, setUsername] = useState(cookie_userName);
  const [password, setPassword] = useState(undefined);
  const [register, setRegister] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Connected, setConnected] = useState(false);

  useEffect(() => {
    console.log(`USEAUTH: connected = ${JSON.stringify(Connected)}`);
  }, [Connected]);

  async function connectWithToken(token = "") {
    console.log("USEAUTH: connecting with token");
    try {
      const { data } = await axios.get("http://localhost:8081/user/profile", {
        headers: {
          "X-Token": token,
        },
      });
      setConnected(true);
      return data;
    } catch (error) {
      setError(error);
      return error;
    }
  }

  async function connectWithUsernameAndPassword() {
    console.log("USEAUTH: connecting with username and password");
    try {
      const { data } = await axios.post(
        `http://localhost:8081/user/${register ? "register" : "login"}`,
        { username, password }
      );
      const token = data.data.token;

      try {
        const data = await connectWithToken(token);
        const u_name = data.data.message.user;

        setCookieUserName(u_name, {
          days: 1,
          SameSite: "Strict",
          Secure: true,
        });

        setCookieUserToken(token, {
          days: 1,
          SameSite: "Strict",
          Secure: true,
        });
      } catch (error) {
        setError(error);
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    (async () => {
      if (cookie_userToken) {
        await connectWithToken(cookie_userToken);
      } else {
        await connectWithUsernameAndPassword();
      }
    })();
    setLoading(false);
  }, [username, password, register]);

  function userDataHandler(
    u_name = "",
    p_word = "",
    params = { register: false, disconnect: false }
  ) {
    setLoading(true);
    if (params.disconnect == true) {
      console.log(`useAuth disconnect = true ${11}`);
      disconnect();
      return;
    }
    setRegister(params.register);
    setPassword(p_word);
    setUsername(u_name);
  }

  function disconnect() {
    // setUserData({});
    setConnected(false);
    setCookieUserToken("");
    setLoading(false);
  }

  return [
    { username: cookie_userName, token: cookie_userToken },
    userDataHandler,
    disconnect,
    error,
    Loading,
    Connected,
  ];
};
