import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const githubLink = "https://github.com/cactuuus";
const linkedinLink = "https://www.linkedin.com/in/jacopo-poe-calvi/";
const instagramLink = "https://www.instagram.com/jacopo.bob.calvi/";

const socials = [
  { name: "GitHub", icon: faSquareGithub, link: githubLink },
  { name: "LinkedIn", icon: faLinkedin, link: linkedinLink },
  { name: "Instagram", icon: faSquareInstagram, link: instagramLink },
];

const Header = ({ pages }) => {
  return (
    <header className="highlight">
      <Link to={"/"}>
        <h1 id="banner" className="link">
          Jacopo Calvi
        </h1>
      </Link>

      <nav>
        {pages.map((link) => {
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => "link" + (isActive ? " active" : "")}
            >
              {link.name}
            </NavLink>
          );
        })}

        <ul id="social-links">
          {socials.map((social) => {
            return (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <FontAwesomeIcon icon={social.icon} className="icon link" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
