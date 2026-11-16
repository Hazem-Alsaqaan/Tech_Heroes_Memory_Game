

const Footer = () => {
  return (
    <footer className="game-footer">
      <div className="footer-brand">
        <strong>TECH HEROES</strong>
        <span>ACADEMY</span>
      </div>

      <p>
        Train Your Brain. Build Your Future.
      </p>

      <a
        href="https://www.techheroes.company"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.techheroes.company
      </a>

      <small>
        © {new Date().getFullYear()} Tech Heroes Academy
      </small>
    </footer>
  );
};

export default Footer;
