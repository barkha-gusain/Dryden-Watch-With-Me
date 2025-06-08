import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

import "./index.css";

gsap.registerPlugin(_ScrollTrigger);

const App = () => {
  useGSAP(() => {
    gsap.from(".box3 h1", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".box3 p", {
      opacity: 0,
      y: 50,
      delay: 0.5,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".cta-button", {
      opacity: 0,
      filter: "blur(4px)",
      delay: 1,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from(".features h2, .features p", {
      scrollTrigger: {
        trigger: ".features",
        start: "top 70%",
        end: "top 10%",
        scrub: true,
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.5,
    });

    gsap.from(".gallery-grid img", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.4,
    });
  }, []);

  return (
    <>
      <section className="main3">
        <video
          className="vid"
          src="/watch.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="box3">
          <h1>Crafted for the Journey</h1>
          <p>Dryden Watches — Where Style Meets Adventure.</p>
          <button className="cta-button">Explore the Collection</button>
        </div>
      </section>

      <section className="features">
        <h2>Engineered with Precision</h2>
        <p>Swiss movement. Sapphire crystal. Built to last a lifetime.</p>
        <p>Water-resistant. Minimalist design. Timeless craftsmanship.</p>
      </section>

      <section className="gallery">
        <h2>Our Signature Models</h2>
        <div className="gallery-grid">
          <img src="/pic1.jpg" alt="Dryden Classic" />
          <img src="/pic2.jpg" alt="Dryden Sport" />
          <img src="/pic3.jpg" alt="Dryden Automatic" />
        </div>
      </section>

      <footer className="bottom-badge">
        The RD Group Of Industries | Designed By Dev Barkha Gusain
      </footer>
    </>
  );
};

export default App;
