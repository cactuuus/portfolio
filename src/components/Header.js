import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { NavMobile, NavDesktop } from "./Nav";

const Header = ({ pages }) => {
  // true when under the treshold
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <header className="highlight">
      <Link to={"/"}>
        <h1 id="banner" className="link">
          Jacopo Calvi
        </h1>
      </Link>
      {isMobile ? <NavMobile pages={pages} /> : <NavDesktop pages={pages} />}
    </header>
  );
};

export default Header;
