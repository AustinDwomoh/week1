import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">🏴‍☠️ AnimeBoard</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Top</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
