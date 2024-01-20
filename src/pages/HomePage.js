import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faMessage,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <main id="about-me">
      <figure>
        <img id="portrait" src={"./media/pictures/me.jpg"} alt="Me" />
      </figure>
      <section id="info">
        <article className="text-box sectioned">
          <FontAwesomeIcon className="icon grow" icon={faUser} />
          <p>
            Hello, I’m <b>Jacopo</b>. I’m a Computer Science student at{" "}
            <b>University of Sussex</b>.
          </p>
        </article>
        <article className="text-box sectioned">
          <FontAwesomeIcon className="icon grow" icon={faCode} />
          <p>
            I do little websites like this one for fun, and other stuff too.{" "}
            <b>Check out my projects page</b> to see what I’ve been up to.
          </p>
        </article>
        <article className="text-box sectioned">
          <FontAwesomeIcon className="icon grow" icon={faMessage} />
          <p>
            You can get in touch through my <b>LinkedIn</b> or <b>Instagram</b>,
            all the links you need are up top!
          </p>
        </article>
        <article className="text-box sectioned">
          <FontAwesomeIcon className="icon grow red" icon={faHeart} />
          <p>
            Lastly, <b>click to leave a heart</b>. It does nothing, but it’s
            free, so why not?
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
