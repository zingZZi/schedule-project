import { useContext } from "react";
import { AuthContent } from "../Context/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContent);
};
