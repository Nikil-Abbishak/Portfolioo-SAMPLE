import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Nikil Abbishak</p>

        <div className="social-icons">

          <a href="https://github.com/Nikil-Abbishak" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/nikil-abbishake-302415325" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="https://www.instagram.com/n_ii_kill/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;
