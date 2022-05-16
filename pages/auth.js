import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);

  function login() {
    setIsAuth(true);
  }
  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  }
  return [isAuth, login, logout];
}
