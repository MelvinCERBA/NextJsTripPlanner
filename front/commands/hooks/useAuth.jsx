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

  useEffect(() => {
    console.log(`USEAUTH: error = ${JSON.stringify(error)}`);
  }, [error]);
  
  useEffect(() => {
    console.log(`USEAUTH: username = ${username}`);
  }, [username]);
  
  async function connectWithToken(token = "") {
    console.log("USEAUTH: connecting with token");
    try {
      const { data } = await axios.get("http://localhost:8081/user/profile", {
        headers: {
          "X-Token": token,
        },
      });
      return data;
    } catch (error) {
      setError(error);
      return error;
    }
  }

  async function connectWithUsernameAndPassword() {
    console.log("USEAUTH: connecting with isername and password");
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
    if (cookie_userToken) {
      connectWithToken(cookie_userToken);
    } else {
      connectWithUsernameAndPassword();
    }
  }, [username, password, register]);

  function userDataHandler(
    u_name = "",
    p_word = "",
    params = { register: false }
  ) {
    setRegister(params.register);
    setPassword(p_word);
    setUsername(u_name);
  }

  function disconnect() {
    setUserData({});
  }

  return [
    { username: cookie_userName, token: cookie_userToken },
    userDataHandler,
    disconnect,
    error,
  ];
};
