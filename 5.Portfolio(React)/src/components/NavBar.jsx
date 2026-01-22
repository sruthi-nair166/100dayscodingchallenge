import menu from "../assets/menu_logo.png";

function NavBar() {
  return (
    <>
      <nav>
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button>
        <img id="menu-logo" src={menu} alt="" />
      </button>
    </>
  );
}

export default NavBar;
