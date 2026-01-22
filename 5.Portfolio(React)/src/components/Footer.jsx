import GitHub from "../assets/github_logo.png";
import LinkedIn from "../assets/linkedinlogo.png";
import FrontendMentor from "../assets/frontendmentor_logo.png";

function Footer() {
  return (
    <>
      <p>&copy; 2025 Sruthi V Nair. All rights reserved.</p>
      <div id="icon-wrapper">
        <a href="https://github.com/" target="_blank">
          <img src={GitHub} alt="" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src={LinkedIn} alt="" />
        </a>
        <a href="https://www.frontendmentor.io/home" target="_blank">
          <img src={FrontendMentor} alt="" />
        </a>
      </div>
    </>
  );
}

export default Footer;
