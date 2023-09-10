import { useContext } from "react";
import NavigationContext, { NavigationProvider } from "../context/navigation";

const Route = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (currentPath === path) {
    return children;
  }

  return null;
};

export default Route;
