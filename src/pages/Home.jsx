import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const MARK = './assets/mark.png'

/* ============================================================
   Cinematic intro (plays once per session)
   ============================================================ */
function Intro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-stage">
        <div className="intro-hex">
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <polygon
              points="50,4 91,27 91,73 50,96 9,73 9,27"
              fill="none"
              stroke="#F2A900"
              strokeWidth="3"
              className="intro-hex-stroke"
            />
          </svg>
        </div>
        <span className="intro-drop"></span>
        <span className="intro-ripple"></span>
        <span className="intro-ripple intro-ripple-2"></span>
      </div>
      <div className="intro-word">PREVAYAM</div>
    </div>
  )
}

/* ============================================================
   DARK HERO — split layout, video in hex frame
   ============================================================ */
function Hero({ animateIn }) {
  return (
    <header className={`hero-dark${animateIn ? ' hero-anim' : ''}`} id="top">
      {/* ambient honey drops drifting behind */}
      <div className="hero-honey-flow" aria-hidden="true">
        <span className="flow-drop d1"></span>
        <span className="flow-drop d2"></span>
        <span className="flow-drop d3"></span>
      </div>

      {/* honeycomb pattern texture */}
      <div className="hero-comb" aria-hidden="true"></div>

      <div className="hero-dark-inner">
        <div className="hero-copy">
          <span className="eyebrow-dark stagger" style={{ '--i': 0 }}>
            <span className="eb-line"></span>
            India's First Honey-Powered Performance Fuel
          </span>
          <h1 className="hero-h1-dark">
            <span className="word stagger" style={{ '--i': 1 }}>Fuel</span>{' '}
            <span className="word stagger" style={{ '--i': 2 }}>every</span>
            <br />
            <em>
              <span className="word stagger" style={{ '--i': 3 }}>Vayam.</span>
            </em>
          </h1>
          <p className="lead-dark stagger" style={{ '--i': 4 }}>
            Prevayam is a honey-based electrolyte energy gel built for endurance —
            smooth, sustained energy with no chemicals and no artificial junk.
            Born in Nagpur. Made for Indian athletes.
          </p>
          <div className="hero-cta-row stagger" style={{ '--i': 5 }}>
            <Link to="/find" className="btn btn-primary">Find Prevayam &rarr;</Link>
            <Link to="/why" className="btn btn-ghost-dark">Why Honey</Link>
          </div>
          <div className="flag-dark stagger" style={{ '--i': 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Born in <b>Nagpur, Maharashtra</b>
          </div>
        </div>

        <div className="hero-visual-dark stagger" style={{ '--i': 3 }}>
          <div className="hex-glow-dark"></div>
          <div className="spin-ring-dark"></div>

          {/* Hexagonal logo frame */}
          <div className="hex-mark-frame">
            <svg className="hex-frame-stroke" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <polygon
                points="50,4 91,27 91,73 50,96 9,73 9,27"
                fill="none"
                stroke="#F2A900"
                strokeWidth="1.2"
                strokeOpacity="0.85"
              />
            </svg>
            <img className="hex-mark-big" src={MARK} alt="Prevayam logo" />
          </div>
        </div>
      </div>

      <div className="scroll-cue-dark" aria-hidden="true">
        <span>Scroll to Explore</span>
        <span className="cue-line-dark"></span>
      </div>
    </header>
  )
}

/* ============================================================
   Marquee — kept as-is, classic green/honey strip
   ============================================================ */
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

/* ============================================================
   WHY PREVAYAM EXISTS — dark editorial section (Ref 4)
   ============================================================ */
function WhyExists() {
  const points = [
    { h: 'No honey-based gel in India', p: 'Indian athletes had zero clean, natural options on shelves.' },
    { h: 'Synthetic ingredients everywhere', p: 'Maltodextrin, artificial colors, gut crashes and bloating.' },
    { h: 'Imported options too expensive', p: 'Clean fuel should not be a luxury imported from abroad.' },
    { h: 'No Indian brand identity', p: 'We are built for Indian athletes, by Indians, in Nagpur.' },
  ]
  return (
    <section className="why-exists">
      <div className="we-comb" aria-hidden="true"></div>
      <div className="wrap we-wrap">
        <div className="we-grid">
          <div className="we-left reveal">
            <p className="section-tag-dark">Why Prevayam Exists</p>
            <h2 className="we-h">
              Sports nutrition became <em>synthetic.</em>
              <br />We brought it <em>back to nature.</em>
            </h2>
            <p className="we-lead">
              For decades, athletes have been told that performance fuel must come from a lab.
              We disagreed. Prevayam is built on what worked for centuries — real honey,
              clean ingredients, and an honest label.
            </p>
          </div>
          <div className="we-right">
            {points.map((p, i) => (
              <div className="we-point reveal" key={p.h}>
                <div className="we-num">0{i + 1}</div>
                <div>
                  <h4>{p.h}</h4>
                  <p>{p.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   STATS strip (Ref 4)
   ============================================================ */
function Stats() {
  const stats = [
    { v: '50M+', l: 'Active athletes in India', s: 'Gym, running, cycling, trekking' },
    { v: '₹15,900 Cr', l: 'India sports nutrition market', s: 'Growing at 6.45% CAGR' },
    { v: '0', l: 'Indian honey-gel brands', s: 'Complete category gap' },
    { v: 'Made in', l: 'Nagpur, India', s: 'Built for Indian athletes' },
  ]
  return (
    <section className="stats-strip">
      <div className="wrap stats-wrap">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-box reveal" key={s.l}>
              <div className="stat-v">{s.v}</div>
              <div className="stat-l">{s.l}</div>
              <div className="stat-s">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FUEL EVERY VAYAM — audience grid with athlete photos
   ============================================================ */
function FuelEvery() {
  const aud = [
    { h: 'Running', img: './assets/athlete-runner.jpg' },
    { h: 'Cycling', img: './assets/athlete-cycling.jpg' },
    { h: 'Trekking', img: './assets/athlete-trek.jpg' },
    { h: 'Gym', img: './assets/athlete-gym.jpg' },
    { h: 'Sports', img: './assets/athlete-sports.jpg' },
  ]
  return (
    <section className="fuel-every">
      <div className="wrap">
        <div className="fe-header reveal">
          <span className="fe-arrow">›</span>
          <h2 className="fe-h">FUEL EVERY <em>VAYAM</em></h2>
          <span className="fe-arrow">‹</span>
        </div>
        <div className="fe-grid">
          {aud.map((a) => (
            <div className="fe-card fe-card-photo reveal" key={a.h}>
              <img className="fe-photo" src={a.img} alt={a.h} />
              <div className="fe-photo-overlay"></div>
              <h4 className="fe-photo-label">{a.h}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   BUILT IN NAGPUR — founder block (Ref 4)
   ============================================================ */
function BuiltInNagpur() {
  return (
    <section className="built-nagpur">
      <div className="bn-comb" aria-hidden="true"></div>
      <div className="wrap bn-wrap">
        <div className="bn-grid">
          <div className="bn-left reveal">
            <p className="section-tag-dark">Built in Nagpur. Made for Indian Athletes.</p>
            <h2 className="bn-h">
              From <em>Nagpur</em> to every Indian who <em>moves.</em>
            </h2>
            <p className="bn-lead">
              We started Prevayam with a single mission — to give India its first honey-powered
              sports nutrition brand. Clean, natural, affordable. Built by Indians,
              for Indian athletes who refuse synthetic shortcuts.
            </p>
            <div className="bn-mission">
              <div className="bn-mission-mark">"</div>
              <div>
                <p className="bn-quote">Our mission is simple — to fuel every Vayam with nature's finest.</p>
                <span className="bn-attr">— Prevayam Nutrition</span>
              </div>
            </div>
          </div>
          <div className="bn-right reveal">
            <div className="bn-credentials">
              <div className="bn-cred">
                <div className="bn-cred-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9l9-6 9 6v11H3z" /><path d="M9 22V12h6v10" />
                  </svg>
                </div>
                <div>
                  <h5>Rooted in Nagpur</h5>
                  <p>Driven by purpose, built in the heart of India.</p>
                </div>
              </div>
              <div className="bn-cred">
                <div className="bn-cred-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3L2 9l10 6 10-6-10-6zM2 9v6l10 6 10-6V9" />
                  </svg>
                </div>
                <div>
                  <h5>Engineered to Endure</h5>
                  <p>Clean carbs, electrolytes, zero crash chemistry.</p>
                </div>
              </div>
              <div className="bn-cred">
                <div className="bn-cred-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z" />
                  </svg>
                </div>
                <div>
                  <h5>Honest by Design</h5>
                  <p>Nothing synthetic, nothing hidden. Just real fuel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Vision banner (Ref 4)
   ============================================================ */
function VisionBanner() {
  return (
    <section className="vision-banner">
      <div className="vb-blob vb-b1"></div>
      <div className="vb-blob vb-b2"></div>
      <div className="wrap">
        <p className="section-tag-dark reveal">Our Vision</p>
        <h2 className="vb-h reveal">
          Building India's first <em>honey-powered</em> nutrition movement.
        </h2>
        <p className="vb-sub reveal">
          From Nagpur to Maharashtra and beyond — we're on a mission to redefine
          how India fuels its athletes. Naturally.
        </p>
        <Link to="/find" className="btn btn-primary reveal" style={{ marginTop: 30 }}>
          Join the Movement &rarr;
        </Link>
      </div>
    </section>
  )
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Home() {
  useReveal()
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('prevayam_intro') !== 'done'
  })

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [showIntro])

  const finishIntro = () => {
    sessionStorage.setItem('prevayam_intro', 'done')
    document.body.style.overflow = ''
    setShowIntro(false)
  }

  return (
    <>
      {showIntro && <Intro onDone={finishIntro} />}
      <Hero animateIn={!showIntro} />
      <Marquee />
      <WhyExists />
      <Stats />
      <FuelEvery />
      <BuiltInNagpur />
      <VisionBanner />
    </>
  )
}
