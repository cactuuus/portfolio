import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
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

const NavMobile = ({ pages }) => {
  // handles nav dropdown menu when in mobile mode
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-menu" data-open={isOpen}>
      <button
        className={"dropdown-btn link" + (isOpen ? " active" : "")}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </button>
      <nav className="dropdown-content highlight text-box">
        <h3 className="section-title">pages</h3>
        <hr />
        <ul>
          {pages.map((link) => {
            return (
              <li key={link.name}>
                <NavLink to={link.path} className="link">
                  {({ isActive }) => (
                    <>
                      <FontAwesomeIcon
                        icon={isActive ? faSquareCheck : faSquare}
                        className="icon small"
                      />
                      {link.name}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <h3 className="section-title">socials</h3>
        <hr />
        <ul>
          {socials.map((social) => {
            return (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="icon small link"
                  />
                  {social.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const NavDesktop = ({ pages }) => {
  return (
    <nav>
      {pages.map((link) => {
        return (
          <NavLink key={link.name} to={link.path} className="link">
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
  );
};

export { NavMobile, NavDesktop };
