import React, { useState } from "react";

import useCookie from "react-use-cookie";
import axios from "axios";

export const useAuth = () => {
  const [userData, setUserData] = useCookie("user-data", null);
  const [error, setError] = useState("");

  async function userDataHandler(username = "", password = "", params = {register: false}) {
    try {
      const { data } = await axios.post(`http://localhost:8081/user/${params.register ? "register" : "login"}`, {username, password});
      const token = data.data.token;

      try {
        const { data }  = await axios.get(`http://localhost:8081/user/profile?token=${token}`, {
          headers: {
            "X-Token": token
          }
        });
        const username = data.data.token;
        
        setUserData({username, token});
      } catch (error) {
        setError(error);
      }
    } catch (error) {
      setError(error);
    }
  }

  // if (userData !== null) {}

  return [userData, userDataHandler, error];
};
