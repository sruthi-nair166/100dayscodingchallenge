import ProfilePic from "../assets/profile_pic.png";

function About() {
  return (
    <>
      <h2>About</h2>

      <div id="about-wrapper">
        <img id="profile-pic" src={ProfilePic} alt="profile photo" />
        <div id="para-wrapper">
          <p>
            <span id="hello">Hello,</span> My name is
            <span>Sruthi V Nair.</span>
          </p>
          <p>
            I come from an architecture background but decided to switch to the
            IT field and have been trying to get into
            <span>Web Development</span>.
          </p>
          <p>
            I've been teaching myself <span>Frontend Development</span> and I
            enjoy creating structured, functional webpages and honing my skills
            through hands-on projects.
          </p>
        </div>
      </div>

      <article id="skills">
        <h3>Skills</h3>
        <ol>
          <li>HTML</li>
          <li>/</li>
          <li>CSS</li>
          <li>/</li>
          <li>JavaScript</li>
          <li>/</li>
          <li>React</li>
        </ol>
      </article>
    </>
  );
}

export default About;
