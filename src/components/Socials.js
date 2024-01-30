import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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

const SocialsMobile = () => {
  // handles socials dropdown when in mobile mode
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
      <div className="dropdown-content highlight text-box">
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
                  <FontAwesomeIcon icon={social.icon} className="icon link" />
                  {social.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const SocialsDesktop = () => {
  return (
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
  );
};

export { SocialsMobile, SocialsDesktop };
