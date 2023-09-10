import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleLink = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return; //! Bu if koşulunu, kullanıcı ekrandaki linke "ctrl" tuşuna basılı tutarken tıklarsa yeni sekmede açılsın diye yazdık.
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleLink}>
      {children}
    </a>
  );
};

export default Link;
