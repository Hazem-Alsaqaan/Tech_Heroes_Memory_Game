import logo from "../assets/TechHerosWhiteLogo.png";

const Header = () => {
  return (
    <header className="game-header">
      <div className="brand">
        {/* <div className="brand-logo">
          <span>TH</span>
        </div>

        <div className="brand-info">
          <h2>TECH HEROES</h2>
          <span>ACADEMY</span>
        </div> */}
        <div className="brand-logo">
         <a href="https://www.techheroes.company/" className="relative block">
          <img
            src={logo}
            alt="Tech Heroes"
            width={180}
            height={180}
            priority
          />
        </a>
        </div>
      </div>

      <div className="header-badge">
        <span className="status-dot"></span>
        MEMORY CHALLENGE
      </div>
    </header>
  );
};

export default Header;
