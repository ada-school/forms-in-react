import Logo from "../../img/ada-logo.png";
import "./Header.styles.css";

export default function Header() {
  return (
    <header className="header">
      <img
        alt="ada school logo"
        src={Logo}
        loading="lazy"
        width="108"
        height="46"
      />
    </header>
  );
}
