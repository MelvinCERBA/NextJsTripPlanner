import { useState, useEffect } from "react";

import useCookie from "react-use-cookie";
import axios from "axios";

export const useAuth = () => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useCookie("user-data", "{}");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  console.log(error);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(`http://localhost:8081/user/${register ? "register" : "login"}`, {username, password});
        const token = data.data.token;
    
        try {
          const { data }  = await axios.get("http://localhost:8081/user/profile", {
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
    })();
  }, [username]);

  function userDataHandler(u_name = "", p_word = "", params = {register: false}) {
    setUsername(u_name);
    setPassword(p_word);
    setRegister(params.register);

    setUserData(JSON.stringify({username: u_name, token: ""}));
  }

  // if (userData !== null) {}

  return [JSON.parse(userData), userDataHandler, error];
};
