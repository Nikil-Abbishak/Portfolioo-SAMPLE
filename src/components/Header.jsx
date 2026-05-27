import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><span>N</span>ikil</h1>
            </div>

            <ul className="links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#serv">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className="icons">
                <li><a href="https://github.com/Nikil-Abbishak" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.instagram.com/n_ii_kill/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.linkedin.com/in/nikil-abbishake-302415325" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </header>
    )
}

export default Header