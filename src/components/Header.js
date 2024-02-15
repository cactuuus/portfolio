import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SocialsDesktop, SocialsMobile } from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Header = ({ pages }) => {
  // true when under the treshold
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <header className="highlight">
      <Link to={"/"}>
        <h1 id="banner" className="link">
          {isMobile ? "JC" : "Jacopo Calvi"}
        </h1>
      </Link>
      <nav>
        {pages.map((link) => {
          return (
            <>
              <NavLink key={link.name} to={link.path} className="link">
                {link.name}
              </NavLink>
            </>
          );
        })}
        <a href="./resume.pdf" rel="noreferrer" target="_blank" download>
          resume
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{
              height: "0.8em",
              verticalAlign: "-0.05em",
              marginLeft: "2px",
            }}
          />
        </a>
        {isMobile ? <SocialsMobile /> : <SocialsDesktop />}
      </nav>
    </header>
  );
};

export default Header;
