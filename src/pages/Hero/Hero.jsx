import { useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const heroImage = `${import.meta.env.BASE_URL}img1.png`;

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updatePointer = (event) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const shiftX = ((mouseX / rect.width) - 0.5) * -16;
    const shiftY = ((mouseY / rect.height) - 0.5) * -10;

    hero.style.setProperty("--mouse-x", `${mouseX}px`);
    hero.style.setProperty("--mouse-y", `${mouseY}px`);
    hero.style.setProperty("--title-shift-x", `${shiftX.toFixed(2)}px`);
    hero.style.setProperty("--title-shift-y", `${shiftY.toFixed(2)}px`);
  };

  return (
    <div
      className="hero"
      id="hero"
      ref={heroRef}
      onMouseMove={updatePointer}
    >
      <img src={heroImage} alt="Hero background" className="hero-image hero-image-base" />
      <img src={heroImage} alt="" aria-hidden="true" className="hero-image hero-image-reveal" />
      <img src={heroImage} alt="" aria-hidden="true" className="hero-image hero-image-foreground" />
      <div className="hero-grain" aria-hidden="true" />
      <h1 className="hero-title" aria-hidden="true">Hi I&apos;m Nikil</h1>

      <div className="content">
        <div className="buttn">
          <a href="#contact" onClick={(event) => scrollToSection(event, "contact")}>Contact</a>
          <a href="#about" onClick={(event) => scrollToSection(event, "about")}>Who I&apos;m</a>
        </div>
      </div>
    </div>
    
  );
}