import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCode } from "@fortawesome/free-solid-svg-icons";

const icons = {
  game: faGamepad,
  web: faCode,
};

const ricksRanch = {
  name: "Rick's Ranch",
  type: "game",
  picture: "./media/pictures/projects/ricks-ranch.png",
  info: (
    <p>
      A fun and short retro shooter, with unpredictable controls.
      <br />
      <br />
      Initially developed in <b>Unity</b> and <b>C#</b> for{" "}
      <b>HackSussex’s GameJam</b>, where it won in two categories:{" "}
      <em>“most unconventional controls”</em> & <em>“best overall”</em>.<br /> I
      then re-wrote the entire project using <b>Godot</b>, because why not?{" "}
      <br />
      <br />
      You can (<b>and should</b>) play it{" "}
      <a
        className="link"
        href="https://cactuuus.itch.io/ricks-ranch-remastered"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
      .
    </p>
  ),
};

const origami = {
  name: "Origami",
  type: "web",
  picture: "./media/pictures/projects/origami-home.png",
  info: (
    <p>
      A website made for my first year's <em>"Intro to Multimedia"</em> module.
      <br />
      <br />
      It was built with <b>React</b>, and it's centered around the{" "}
      <b>art of origami</b>.
      <br />
      It's quite simple and barebones, but by all means go ahead and check it
      out{" "}
      <a
        className="link"
        href="https://intro-to-multimedia.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
      .
    </p>
  ),
};

const JCPhotograpy = {
  name: "JC|Photography",
  type: "web",
  picture: "./media/pictures/projects/JCPhotography-gallery.png",
  info: (
    <p>
      Another website I did for my foundation year.
      <br />
      <br />
      This one is a mock photography website, and it is a bit more complicated:
      it uses <b>Django</b> and features a <b>database</b> to store user's login
      information and appointment details.
      <br />
      <br />
      It might or might not still be up on <b>PythonAnywhere</b>. Here's a{" "}
      <a
        className="link"
        href="https://cactuuus.pythonanywhere.com/index"
        target="_blank"
        rel="noreferrer"
      >
        link
      </a>{" "}
      to it, test you luck.
    </p>
  ),
};

const projectList = [ricksRanch, origami, JCPhotograpy];

const ProjectsPage = () => {
  return (
    <main>
      {projectList.map((project) => {
        return (
          <section key={project.name} className="project">
            <div className="text-box sectioned title-box">
              <FontAwesomeIcon
                icon={icons[project.type]}
                className="icon fixed"
              />
              <b>
                <h2 className="p-title">{project.name}</h2>
              </b>
            </div>

            <figure>
              <img
                className="p-image"
                src={project.picture}
                alt={project.name + " preview"}
              ></img>
            </figure>

            <article className="text-box p-info">{project.info}</article>
          </section>
        );
      })}
    </main>
  );
};

export default ProjectsPage;
