import { useLocation } from "react-router-dom";

export function useActiveGnb() {
  const location = useLocation().pathname.split("/")[1];
  return {
    location,
  };
}
