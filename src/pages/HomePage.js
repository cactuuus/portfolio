import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faMessage } from "@fortawesome/free-solid-svg-icons";

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
            I like tinkering with websites and servers. When I'm not hitting my head against the wall, it is actually
            quite pleasant!
            <br/>
            <b>Check out my project's page</b> to have a taste of the things I've been up to.
          </p>
        </article>
        <article className="text-box sectioned">
          <FontAwesomeIcon className="icon grow" icon={faMessage} />
          <p>
            You can get in touch through my <b>LinkedIn</b> or <b>Instagram</b>, or even better, find my <b>email</b>
            {" "} attached to my resume. All the links you need are up top!
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
