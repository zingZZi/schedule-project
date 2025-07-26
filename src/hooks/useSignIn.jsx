import { useState } from "react";

export const useSignIn = () => {
  const [isPendig, setIsPendig] = useState(false);
  const [error, setError] = useState(null);

  function login() {}

  return { login, isPendig, error };
};
