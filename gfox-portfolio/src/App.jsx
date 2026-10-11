import './style.css'

function Navbar(){
  return (
    <nav>
      <a href="#hero" id="logo">
        <img src="/images/GFox.png" alt="GFox Logo" width="130" height="100" />
      </a>
      <ul>
        <li><a href="#hero">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#next-steps">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero(){
  return (
    <section id="hero" aria-label="Accueil">
      <div className="hero-art" aria-hidden="true">
        <div className="fox-sculpture">
          <svg className="fox-sculpture__svg" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldLine" x1="94" y1="92" x2="422" y2="423" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F0D79A" />
                <stop offset=".52" stopColor="#C6A96B" />
                <stop offset="1" stopColor="#80683E" />
              </linearGradient>
              <radialGradient id="foxGlow" cx="0" cy="0" r="1" gradientTransform="matrix(0 190 -190 0 260 250)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C6A96B" stopOpacity=".16" />
                <stop offset="1" stopColor="#C6A96B" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="260" cy="260" r="210" fill="url(#foxGlow)" />
            <g className="fox-sculpture__form" stroke="url(#goldLine)" strokeLinejoin="round">
              <path d="M155 210 128 82 224 157 260 145 296 157 392 82 365 210 391 273 352 344 260 414 168 344 129 273 155 210Z" fill="#151515" fillOpacity=".72" strokeWidth="1.6" />
              <path d="m128 82 96 75-69 53-27-128Z" fill="#C6A96B" fillOpacity=".12" />
              <path d="m392 82-96 75 69 53 27-128Z" fill="#C6A96B" fillOpacity=".12" />
              <path d="m155 210 69-53 36 68-75 49-56-1 26-63Z" fill="#C6A96B" fillOpacity=".08" />
              <path d="m365 210-69-53-36 68 75 49 56-1-26-63Z" fill="#C6A96B" fillOpacity=".14" />
              <path d="m185 274 75-49v189l-92-70-39-71 56 1Z" fill="#C6A96B" fillOpacity=".07" />
              <path d="m335 274-75-49v189l92-70 39-71-56 1Z" fill="#C6A96B" fillOpacity=".11" />
              <path d="m224 157 36 68 36-68M155 210l29 64 76-49 75 49 30-64M184 274l76 42 75-42M168 344l92-28 92 28M260 225v191" strokeOpacity=".85" strokeWidth="1.2" />
              <path d="m224 157-13 88 49-20 36 20-13-88M184 274l-9 47 85-5 85 5-10-47" strokeOpacity=".56" strokeWidth="1" />
              <path d="m239 292 21 10 21-10-21-12-21 12Z" fill="#C6A96B" fillOpacity=".74" strokeWidth="1.3" />
              <path d="m199 239 25 7M296 246l25-7" stroke="#F0D79A" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        <span className="hero-art__orbit hero-art__orbit--one" />
        <span className="hero-art__orbit hero-art__orbit--two" />
      </div>
      <div id="hero-content">
        <h1>Mahdi</h1>
        <p>Portfolio : 2026-2027</p>
        <h2>Computer Science Student</h2>
        <h2>Aspiring Full-Stack Web and Java Developer</h2>
        <div id="hero-content-buttons">
        <button class="hero-button">  My Skills  </button>
        <button class="hero-button">  My Projects  </button>
      </div>
      </div>
    </section>
  )
}

function Projects(){
  return <section id="projects" />
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  )
}

export default App
