import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

  const handleLink = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return; //! Bu if koşulunu, kullanıcı ekrandaki linke "ctrl" tuşuna basılı tutarken tıklarsa yeni sekmede açılsın diye yazdık.
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleLink}>
      {children}
    </a>
  );
};

export default Link;
