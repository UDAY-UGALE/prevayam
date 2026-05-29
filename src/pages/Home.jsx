import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const MARK = './assets/mark.png'

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">India's First Honey Sports Nutrition</span>
          <h1>Real fuel<br />from <em>real honey.</em></h1>
          <p className="lead">
            Prevayam is a honey-based electrolyte energy gel built for endurance.
            Smooth, sustained energy with no chemicals and no artificial junk —
            just clean fuel that keeps you moving when it matters most.
          </p>
          <div className="hero-cta-row">
            <Link to="/find" className="btn btn-primary">Find Prevayam &rarr;</Link>
            <Link to="/why" className="btn btn-ghost">Why Honey</Link>
          </div>
          <div className="flag">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Born in <b>Nagpur, Maharashtra</b>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hex-glow"></div>
          <div className="spin-ring"></div>
          <img className="hero-mark" src={MARK} alt="Prevayam logo mark" />
        </div>
      </div>
    </header>
  )
}

function Marquee() {
  const items = (
    <>
      Honey Based <i className="dot"></i> Sustained Energy <i className="dot"></i>{' '}
      No Chemicals <i className="dot"></i> Built for Endurance <i className="dot"></i>{' '}
      Electrolytes <i className="dot"></i> <b>Pure &amp; Clean</b> <i className="dot"></i>
    </>
  )
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{items}</span>
        <span>{items}</span>
      </div>
    </div>
  )
}

function Banner() {
  return (
    <section className="banner">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="wrap">
        <h2 className="reveal">Fuel that's as <em>honest</em> as your effort.</h2>
      </div>
    </section>
  )
}

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Marquee />
      <Banner />
    </>
  )
}
