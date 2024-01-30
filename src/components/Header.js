import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SocialsDesktop, SocialsMobile } from "./Socials";

const Header = ({ pages }) => {
  // true when under the treshold
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <header className="highlight">
      <Link to={"/"}>
        <h1 id="banner" className="link">
          {isMobile ? "J/C" : "Jacopo Calvi"}
        </h1>
      </Link>
      <nav>
        {pages.map((link) => {
          return (
            <NavLink key={link.name} to={link.path} className="link">
              {link.name}
            </NavLink>
          );
        })}
        {isMobile ? <SocialsMobile /> : <SocialsDesktop />}
      </nav>
    </header>
  );
};

export default Header;
