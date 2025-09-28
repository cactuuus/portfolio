import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCode, faGear } from "@fortawesome/free-solid-svg-icons";

const icons = {
  game: faGamepad,
  web: faCode,
  other: faGear,
};

const miseEnPlace = {
    name: "Mise En Place",
    type: "web",
    year: 2025,
    picture: "./media/pictures/projects/mise.webp",
    info: (
        <p>
            It's the year 2025, I love cooking, and I am tired of my scattered collection of bookmarked recipes.
            <br/>
            <br/>
            <a
                className="link"
                href="https://mise.jacopocalvi.com/"
                target="_blank"
                rel="noreferrer"
            >
                Mise En Place
            </a> is a web app I built using <b>Laravel</b> & <b>Vue</b> to solve this issue. With it, you can create
            or import recipes from your favourite sites (<b>with attribution of course!</b>). All of the recipes you
            care about in one place, in one format, customisable as you please.
            <br/>
            <br/>
            It is still in active development, and likely will always be.
            Oh, it is also public and <b>free</b> to use, feel free to give it a spin!
        </p>
    )
}

const preciousBottles = {
  name: "Precious Bottles",
  type: "other",
  year: 2024,
  picture: "./media/pictures/projects/precious-bottles.webp",
  info: (
    <p>
      A project following the footsteps of{" "}
      <a
        className="link"
        href="https://www.preciousplastic.com/"
        target="_blank"
        rel="noreferrer"
      >
        Precious Plastic
      </a>
      , which aims at recycling plastic bottles into filament suitable for 3D
      printing, and does so by using open source technology (such as the{" "}
      <a
        className="link"
        href="http://recreator3d.com/"
        target="_blank"
        rel="noreferrer"
      >
        Recreator 3D
      </a>
      ).
      <br />
      <br />
      So far we managed to successfully print a few components, but we're still
      in early stages. It's a very challenging project, and I am very much
      learning as I go!
    </p>
  ),
};

const snakesOnA2DPlane = {
  name: "Snakes On A (2D) Plane",
  type: "game",
  year: 2024,
  picture: "./media/pictures/projects/snakes-on-a-2D-plane.webp",
  info: (
    <p>
      A remake of the popular <b>Nokia</b>'s' classic, running in{" "}
      <b>Microsoft Excel</b>, developed during the{" "}
      <b>HackSussex’s Hackathon 2024</b>.
      <br />
      <br />
      While it didn't win me anything, it was a lot of fun to develop, and it
      forced me to learn the basics of <b>VBA</b>.
      <br />
      <br />
      You can download it{" "}
      <a
        className="link"
        href="./Snakes-on-a-2D-plane.xlsm"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
      , but beware you need to enable macros in order to play it. <br />
      The question is, do you trust me?
    </p>
  ),
};

const ricksRanch = {
  name: "Rick's Ranch",
  type: "game",
  year: 2023,
  picture: "./media/pictures/projects/ricks-ranch.webp",
  info: (
    <p>
      A fun and short retro shooter, with unpredictable controls.
      <br />
      <br />
      Initially developed in <b>Unity</b> and <b>C#</b> for{" "}
      <b>HackSussex’s GameJam (2023)</b>, where it won in two categories:{" "}
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

// const origami = {
//   name: "Origami",
//   type: "web",
//   picture: "./media/pictures/projects/origami-home.webp",
//   info: (
//     <p>
//       A website made for my first year's <em>"Intro to Multimedia"</em> module.
//       <br />
//       <br />
//       It was built with <b>React</b>, and it's centered around the{" "}
//       <b>art of origami</b>.
//       <br />
//       It's quite simple and barebones, but by all means go ahead and check it
//       out{" "}
//       <a
//         className="link"
//         href="https://intro-to-multimedia.netlify.app/"
//         target="_blank"
//         rel="noreferrer"
//       >
//         here
//       </a>
//       .
//     </p>
//   ),
// };

// const JCPhotograpy = {
//   name: "JC|Photography",
//   type: "web",
//   picture: "./media/pictures/projects/JCPhotography-gallery.webp",
//   info: (
//     <p>
//       Another website I did for my foundation year.
//       <br />
//       <br />
//       This one is a mock photography website, and it is a bit more complicated:
//       it uses <b>Django</b> and features a <b>database</b> to store user's login
//       information and appointment details.
//       <br />
//       <br />
//       It might or might not still be up on <b>PythonAnywhere</b>. Here's a{" "}
//       <a
//         className="link"
//         href="https://cactuuus.pythonanywhere.com/index"
//         target="_blank"
//         rel="noreferrer"
//       >
//         link
//       </a>{" "}
//       to it, test you luck.
//     </p>
//   ),
// };

const projectList = [
    miseEnPlace,
  preciousBottles,
  snakesOnA2DPlane,
  ricksRanch,
];

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
                loading="lazy"
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
