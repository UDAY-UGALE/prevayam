import { useEffect, useState } from 'react'
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
   DARK HERO
   ============================================================ */
function Hero({ animateIn }) {
  return (
    <header className={`hero-dark${animateIn ? ' hero-anim' : ''}`} id="top">
      <div className="hero-honey-flow" aria-hidden="true">
        <span className="flow-drop d1"></span>
        <span className="flow-drop d2"></span>
        <span className="flow-drop d3"></span>
      </div>
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
            Born in India. Made for Indian athletes.
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
            Born in <b>India</b>
          </div>
        </div>
        <div className="hero-visual-dark stagger" style={{ '--i': 3 }}>
          <div className="hex-glow-dark"></div>
          <div className="spin-ring-dark"></div>
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
        {/* <span>Scroll to Explore</span> */}
        <span className="cue-line-dark"></span>
      </div>
    </header>
  )
}

/* ============================================================
   Marquee
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
   WHY PREVAYAM EXISTS
   ============================================================ */
function WhyExists() {
  const points = [
    { h: 'No honey-based gel in India', p: 'Indian athletes had zero clean, natural options on shelves.' },
    { h: 'Synthetic ingredients everywhere', p: 'Maltodextrin, artificial colors, gut crashes and bloating.' },
    { h: 'Imported options too expensive', p: 'Clean fuel should not be a luxury imported from abroad.' },
    { h: 'No Indian brand identity', p: 'We are built for Indian athletes, by Indians, for India.' },
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
   FUEL EVERY VAYAM
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
   INGREDIENTS & SOURCING — India map + ingredient cards
   ============================================================ */
function IngredientsSourcing() {
  const ingredients = [
    {
      img: './assets/ingredient-honey.jpg',
      name: 'Pure Raw Honey',
      region: 'Rajasthan',
      pin: { x: 68, y: 145 },
      benefit: 'Dual-sugar energy (fructose + glucose) for immediate and sustained performance fuel without any crash.',
    },
    {
      img: './assets/ingredient-salt.jpg',
      name: 'Himalayan Pink Salt',
      region: 'Himachal Pradesh',
      pin: { x: 165, y: 55 },
      benefit: 'Replenishes sodium lost in sweat to maintain fluid balance and prevent cramping during long efforts.',
    },
    {
      img: './assets/ingredient-coconut.jpg',
      name: 'Coconut Electrolytes',
      region: 'Kerala',
      pin: { x: 108, y: 362 },
      benefit: 'Natural potassium and magnesium to support nerve firing and sustained muscle contraction.',
    },
    {
      img: './assets/ingredient-citrus.jpg',
      name: 'Natural Citrus Extract',
      region: 'Maharashtra',
      pin: { x: 198, y: 228 },
      benefit: 'Vitamin C and citric acid for antioxidant recovery support and natural flavour balance.',
    },
    {
      img: './assets/ingredient-ginger.jpg',
      name: 'Ginger Root Extract',
      region: 'Uttarakhand',
      pin: { x: 185, y: 70 },
      benefit: 'Anti-inflammatory phytonutrients to reduce exercise-induced muscle soreness and gut discomfort.',
    },
  ]

  return (
    <section className="ing-sourcing">
      <div className="wrap ing-wrap">
        <div className="ing-header reveal">
          <p className="section-tag-dark">Purely Sourced</p>
          <h2 className="ing-h">Where Nature <em>Provides.</em></h2>
          <p className="ing-sub">
            Every ingredient in Prevayam is traced to its natural origin across India's finest regions —
            nothing synthetic, nothing hidden.
          </p>
        </div>

        <div className="ing-layout">
          <div className="india-map-wrap reveal">
            <div className="india-map-label">India's Natural Ingredient Map</div>
            <svg className="india-map-svg" viewBox="0 0 280 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M84 28 L96 20 L136 30 L178 90 L210 100 L218 122 L214 148 L210 165
                   L248 160 L252 180 L242 196 L185 196 L182 215 L174 236
                   L160 248 L148 278 L136 308 L120 330 L110 348 L102 358
                   L96 364 L88 358 L80 342 L68 316 L55 282 L42 252 L34 228
                   L28 205 L26 183 L32 162 L42 142 L32 125 L26 105 L38 85
                   L52 72 L64 52 Z"
                fill="rgba(242,169,0,0.07)"
                stroke="rgba(242,169,0,0.45)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M102 358 L96 370 L90 376 L84 369 L78 357 L84 350 Z"
                fill="rgba(242,169,0,0.07)"
                stroke="rgba(242,169,0,0.45)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {ingredients.map((ing, i) => (
                <g key={ing.name}>
                  <circle
                    cx={ing.pin.x} cy={ing.pin.y} r="10"
                    fill="rgba(242,169,0,0.18)"
                    className="map-pin-pulse"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <circle cx={ing.pin.x} cy={ing.pin.y} r="5" fill="#F2A900" />
                  <circle cx={ing.pin.x} cy={ing.pin.y} r="2.5" fill="#fff" />
                </g>
              ))}
            </svg>
            <div className="map-legend">
              {ingredients.map((ing) => (
                <div className="map-legend-item" key={ing.name}>
                  <span className="map-legend-dot"></span>
                  <span className="map-legend-text">{ing.name} — {ing.region}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ing-cards">
            {ingredients.map((ing) => (
              <div className="ing-card reveal" key={ing.name}>
                <div className="ing-img-wrap">
                  <img src={ing.img} alt={ing.name} className="ing-img" />
                  <div className="ing-region-badge">{ing.region}</div>
                </div>
                <div className="ing-info">
                  <h4>{ing.name}</h4>
                  <p>{ing.benefit}</p>
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
   HONEY PROCESS — extraction, application, medical benefits
   ============================================================ */
function HoneyProcess() {
  const steps = [
    {
      img: './assets/honey-hive.jpg',
      num: '01',
      h: 'From the Hive',
      p: 'Our honey is sourced from traditional beekeepers across Rajasthan using natural, chemical-free extraction methods that preserve all bioactive compounds.',
    },
    {
      img: './assets/honey-extract.jpg',
      num: '02',
      h: 'Cold Extracted',
      p: 'Cold-spin extraction at low temperatures ensures no enzymes, antioxidants, or natural sugars are destroyed — unlike heat-processed commercial honey.',
    },
    {
      img: './assets/honey-blend.jpg',
      num: '03',
      h: 'Precision Blended',
      p: 'Blended with natural electrolytes and adaptogens in our Indian facility to create the ideal performance formula for Indian athletes.',
    },
    {
      img: './assets/honey-sachet.jpg',
      num: '04',
      h: 'Ready to Fuel',
      p: 'Sealed in single-serve sachets for consistent dosing — hygienic, portable, and ready for race day, trail, or gym floor.',
    },
  ]

  const medFacts = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      h: 'Antioxidant Rich',
      p: 'Honey contains flavonoids and phenolic acids that neutralise free radicals produced during intense exercise.',
    },
    {
      icon: 'M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z',
      h: 'Anti-Inflammatory',
      p: 'Natural compounds in honey reduce muscle inflammation and support faster recovery between training sessions.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      h: 'Glycogen Sparing',
      p: 'Fructose in honey is metabolised differently — sparing muscle glycogen and extending your endurance window.',
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
      h: 'Gut Friendly',
      p: 'Prebiotic oligosaccharides in honey nurture gut microbiome health — critical for nutrient absorption and immunity.',
    },
  ]

  return (
    <section className="honey-process">
      <div className="wrap hp-wrap">
        <div className="hp-header reveal">
          <p className="section-tag">From Hive to Sachet</p>
          <h2 className="section-h">How we make <em>the world's cleanest</em> energy gel.</h2>
        </div>

        <div className="hp-steps">
          {steps.map((s) => (
            <div className="hp-step reveal" key={s.num}>
              <div className="hp-step-img">
                <img src={s.img} alt={s.h} />
                <div className="hp-step-num">{s.num}</div>
              </div>
              <div className="hp-step-body">
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hp-video-section reveal">
          <div className="hp-video-wrap">
            <video
              className="hp-video"
              src="./assets/honey-drip.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="./assets/honey-splash.jpg"
            />
            <div className="hp-video-overlay">
              <div className="hp-video-badge">Watch: Honey Extraction Process</div>
            </div>
          </div>
          <div className="hp-video-text">
            <p className="section-tag">Nature's Original Energy</p>
            <h3 className="hp-vt-h">Honey has fuelled humans for <em>10,000 years.</em></h3>
            <p className="hp-vt-p">
              Long before synthetic labs and maltodextrin existed, honey was the original
              performance fuel — used by ancient Olympic athletes, Ayurvedic medicine, and
              military expeditions. We simply brought it into the 21st century.
            </p>
          </div>
        </div>

        <div className="hp-med-grid">
          {medFacts.map((f) => (
            <div className="hp-med-card reveal" key={f.h}>
              <div className="hp-med-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={f.icon} />
                </svg>
              </div>
              <h5>{f.h}</h5>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   US vs THEM — detailed comparison + research papers
   ============================================================ */
function CompareDetailed() {
  const rows = [
    { attr: 'Primary Carbohydrate', them: 'Maltodextrin (synthetic)', us: 'Pure raw honey (natural)' },
    { attr: 'Energy Curve', them: 'Spike then crash', us: 'Smooth, sustained release' },
    { attr: 'Gut Impact', them: 'Bloating & GI distress', us: 'Easy to digest, prebiotic' },
    { attr: 'Additives', them: 'Artificial colors & flavors', us: 'Zero — clean label' },
    { attr: 'Antioxidants', them: 'None', us: 'Natural flavonoids & phenolics' },
    { attr: 'Electrolytes', them: 'Synthetic mineral salts', us: 'Naturally sourced' },
    { attr: 'Preservatives', them: 'Chemical preservatives', us: 'Honey is self-preserving' },
    { attr: 'Country of Origin', them: 'Imported, expensive', us: 'Made in India, for India' },
  ]

  const research = [
    {
      title: 'Honey as an Ergogenic Aid in Cycling Performance',
      authors: 'Earnest CP et al.',
      journal: 'Journal of Strength and Conditioning Research',
      year: '2004',
      finding: 'Honey matched maltodextrin for power output in competitive cyclists while providing superior antioxidant benefits.',
    },
    {
      title: 'Honey for Nutrition and Health: A Review',
      authors: 'Bogdanov S et al.',
      journal: 'Journal of the American College of Nutrition',
      year: '2008',
      finding: 'Comprehensive review confirming honey\'s unique glycaemic profile, antimicrobial properties, and nutrient density for athletes.',
    },
    {
      title: 'Honey: Medicinal Property and Antibacterial Activity',
      authors: 'Mandal MD & Mandal S',
      journal: 'Asian Pacific Journal of Tropical Biomedicine',
      year: '2011',
      finding: 'Established honey\'s anti-inflammatory and immune-modulating effects highly relevant to athletic recovery.',
    },
    {
      title: 'Natural vs Synthetic Carbohydrates in Endurance Sport',
      authors: 'Hozhabri H et al.',
      journal: 'Nutrients — Systematic Review',
      year: '2021',
      finding: 'Athletes using natural carbohydrate sources showed reduced oxidative stress markers compared to synthetic equivalents.',
    },
    {
      title: 'Prebiotic Properties of Honey Oligosaccharides in Active Individuals',
      authors: 'Schell J et al.',
      journal: 'Molecules — MDPI',
      year: '2019',
      finding: 'Honey oligosaccharides selectively fed beneficial gut bacteria, improving nutrient absorption and reducing GI distress during exercise.',
    },
  ]

  return (
    <section className="compare-detailed">
      <div className="wrap cd-wrap">
        <div className="cd-header reveal">
          <p className="section-tag">Us vs Them</p>
          <h2 className="section-h">PREVAYAM vs <em>Everything Else.</em></h2>
          <p className="cd-sub">The difference isn't just in taste — it's in every single ingredient.</p>
        </div>

        <div className="cd-table reveal">
          <div className="cd-table-head">
            <div className="cd-col-attr"></div>
            <div className="cd-col-them">
              <span className="cd-them-label">Typical Energy Gels</span>
            </div>
            <div className="cd-col-us">
              <span className="cd-us-label">PREVAYAM</span>
            </div>
          </div>
          {rows.map((r) => (
            <div className="cd-row" key={r.attr}>
              <div className="cd-col-attr">{r.attr}</div>
              <div className="cd-col-them cd-bad">
                <span className="cd-x">✕</span>
                {r.them}
              </div>
              <div className="cd-col-us cd-good">
                <span className="cd-check">✓</span>
                {r.us}
              </div>
            </div>
          ))}
        </div>

        <div className="cd-research">
          <div className="cd-research-header reveal">
            <p className="section-tag">Science Backed</p>
            <h3 className="cd-research-h">Research that supports <em>natural fuel.</em></h3>
          </div>
          <div className="cd-papers">
            {research.map((r, i) => (
              <div className="cd-paper reveal" key={r.title}>
                <div className="cd-paper-num">0{i + 1}</div>
                <div className="cd-paper-body">
                  <h5 className="cd-paper-title">{r.title}</h5>
                  <p className="cd-paper-meta">{r.authors} · {r.journal} · {r.year}</p>
                  <p className="cd-paper-finding">"{r.finding}"</p>
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
   TESTIMONIALS — athlete photos, ratings, quotes
   ============================================================ */
function Stars({ n }) {
  return (
    <div className="test-stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`star${i <= n ? ' star-on' : ''}`}></span>
      ))}
    </div>
  )
}

function Testimonials() {
  const athletes = [
    {
      img: './assets/testimonial-1.jpg',
      name: 'Arjun Mehta',
      sport: 'Marathon Runner',
      city: 'Mumbai',
      rating: 5,
      quote: 'I\'ve tried 6 different gels over 3 years of marathon training. Prevayam is the first one that doesn\'t make me feel sick at km 30. The energy is real and clean.',
    },
    {
      img: './assets/testimonial-2.jpg',
      name: 'Priya Sharma',
      sport: 'Competitive Cyclist',
      city: 'Pune',
      rating: 5,
      quote: 'The sustained energy is game-changing on long climbs. No GI issues, no crash. My power numbers are consistent through a 5-hour ride now.',
    },
    {
      img: './assets/testimonial-3.jpg',
      name: 'Rohan Kaur',
      sport: 'CrossFit Athlete',
      city: 'Delhi',
      rating: 5,
      quote: 'I use Prevayam 20 minutes before WODs. The natural honey taste is actually good — not chemical-sweet like other gels. Energy stays steady for the whole session.',
    },
    {
      img: './assets/testimonial-4.jpg',
      name: 'Sneha Patil',
      sport: 'Ultra Trail Runner',
      city: 'Bengaluru',
      rating: 5,
      quote: 'Ran my first 50K using only Prevayam for fuel. No gut issues. Made in India means something to me — and this actually works.',
    },
    {
      img: './assets/testimonial-5.jpg',
      name: 'Karan Singh',
      sport: 'Triathlete',
      city: 'Hyderabad',
      rating: 5,
      quote: 'Prevayam on the bike leg, every time. The electrolytes + honey combo keeps cramps away and I feel mentally sharp all the way through the run.',
    },
    {
      img: './assets/testimonial-6.jpg',
      name: 'Ananya Joshi',
      sport: 'Open Water Swimmer',
      city: 'Chennai',
      rating: 4,
      quote: 'Easy to carry, no mess, and the energy lasts longer than the cheaper gels I was using. Now I recommend it to everyone in my swim club.',
    },
  ]

  return (
    <section className="testimonials">
      <div className="wrap test-wrap">
        <div className="test-header reveal">
          <p className="section-tag-dark">Real Athletes. Real Results.</p>
          <h2 className="test-h">Fuelled by <em>Champions.</em></h2>
          <p className="test-sub">Join thousands of Indian athletes who have switched to clean, natural fuel.</p>
        </div>

        <div className="test-video-card reveal">
          <div className="test-video-wrap">
            <img src="./assets/testimonial-video-thumb.jpg" alt="Video testimonial" className="test-video-thumb" />
            <a href="#" className="test-play-btn" aria-label="Watch testimonial video">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <div className="test-video-badge">Watch: Athletes on Prevayam</div>
          </div>
          <div className="test-video-text">
            <p className="section-tag-dark">Video Testimonials</p>
            <h3 className="test-vt-h">See the difference <em>natural fuel makes.</em></h3>
            <p className="test-vt-p">
              Watch India's top endurance athletes share their experience with Prevayam —
              from first sachet to podium finish.
            </p>
            <a href="#" className="btn btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
              Watch All Stories &rarr;
            </a>
          </div>
        </div>

        <div className="test-grid">
          {athletes.map((a) => (
            <div className="test-card reveal" key={a.name}>
              <div className="test-card-top">
                <div className="test-athlete-img">
                  <img src={a.img} alt={a.name} />
                </div>
                <div className="test-athlete-info">
                  <h5>{a.name}</h5>
                  <span className="test-sport">{a.sport}</span>
                  <span className="test-city">{a.city}</span>
                </div>
              </div>
              <Stars n={a.rating} />
              <p className="test-quote">"{a.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   BUILT IN NAGPUR
   ============================================================ */
function BuiltInNagpur() {
  return (
    <section className="built-nagpur">
      <div className="bn-comb" aria-hidden="true"></div>
      <div className="wrap bn-wrap">
        <div className="bn-grid">
          <div className="bn-left reveal">
            <p className="section-tag-dark">Built in India. Made for Indian Athletes.</p>
            <h2 className="bn-h">
              From <em>India</em> to every Indian who <em>moves.</em>
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
                  <h5>Rooted in India</h5>
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
   OUR TEAM
   ============================================================ */
function OurTeam() {
  const team = [
    {
      img: './assets/team-1.jpg',
      name: 'Founder Name',
      role: 'Founder & CEO',
      bio: 'Athlete turned entrepreneur. Obsessed with clean nutrition and building India\'s first honest sports fuel brand.',
    },
    {
      img: './assets/team-2.jpg',
      name: 'Co-Founder Name',
      role: 'Co-Founder & COO',
      bio: 'Operations and supply chain expert. Ensures every sachet of Prevayam meets the highest standards from hive to shelf.',
    },
    {
      img: './assets/team-3.jpg',
      name: 'Nutritionist Name',
      role: 'Head of Sports Nutrition',
      bio: 'Certified sports dietitian with experience working with elite Indian athletes. Formulated Prevayam\'s clean ingredient protocol.',
    },
    {
      img: './assets/team-4.jpg',
      name: 'Marketing Lead Name',
      role: 'Brand & Marketing Lead',
      bio: 'Brand storyteller and community builder. Connecting Prevayam to India\'s growing endurance sport ecosystem.',
    },
  ]

  return (
    <section className="our-team">
      <div className="wrap ot-wrap">
        <div className="ot-header reveal">
          <p className="section-tag-dark">Behind Prevayam</p>
          <h2 className="ot-h">The Team That <em>Believes.</em></h2>
          <p className="ot-sub">
            A small, passionate team of athletes and nutrition believers — united by the mission
            to make India's cleanest performance fuel.
          </p>
        </div>
        <div className="ot-grid">
          {team.map((m) => (
            <div className="ot-card reveal" key={m.name}>
              <div className="ot-img-wrap">
                <img src={m.img} alt={m.name} className="ot-img" />
                <div className="ot-img-overlay"></div>
              </div>
              <div className="ot-info">
                <h4 className="ot-name">{m.name}</h4>
                <span className="ot-role">{m.role}</span>
                <p className="ot-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   JOIN COMMUNITY — Instagram + WhatsApp
   ============================================================ */
function JoinCommunity() {
  return (
    <section className="join-community">
      <div className="wrap jc-wrap">
        <div className="jc-header reveal">
          <p className="section-tag-dark">Stronger Together</p>
          <h2 className="jc-h">Join the <em>Prevayam Community.</em></h2>
          <p className="jc-sub">
            Connect with 10,000+ Indian athletes, get training tips, early access to new flavours,
            and real stories from the field.
          </p>
        </div>
        <div className="jc-grid">
          <div className="jc-card jc-insta reveal">
            <div className="jc-card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.3-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" />
              </svg>
            </div>
            <div className="jc-card-body">
              <h3>@prevayam</h3>
              <p>Daily training content, athlete features, recipe ideas, and behind-the-scenes from India. Follow India's cleanest nutrition brand.</p>
              <div className="jc-stats">
                <span><b>10K+</b> Followers</span>
                <span><b>Daily</b> Posts</span>
                <span><b>Live</b> Q&amp;As</span>
              </div>
            </div>
            <a href="https://instagram.com/prevayam" target="_blank" rel="noopener noreferrer" className="jc-btn">
              Follow on Instagram
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="jc-card jc-whatsapp reveal">
            <div className="jc-card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </div>
            <div className="jc-card-body">
              <h3>WhatsApp Community</h3>
              <p>Get exclusive tips, early product launches, and race-day nutrition plans directly from our sports nutrition experts.</p>
              <div className="jc-stats">
                <span><b>5K+</b> Members</span>
                <span><b>Expert</b> Advice</span>
                <span><b>Free</b> to Join</span>
              </div>
            </div>
            <a
              href="https://wa.me/919999999999?text=Hi%20Prevayam%2C%20I%27d%20like%20to%20join%20the%20community!"
              target="_blank"
              rel="noopener noreferrer"
              className="jc-btn jc-btn-whatsapp"
            >
              Join WhatsApp Community
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQSection() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      q: 'What is Prevayam and how is it different from other energy gels?',
      a: 'Prevayam is India\'s first honey-based sports energy gel. Unlike conventional gels that use synthetic maltodextrin, artificial colors, and chemical additives, Prevayam is made with pure raw honey, natural electrolytes, and zero artificial ingredients. This means clean, sustained energy without the GI distress or blood sugar crash that synthetic gels cause.',
    },
    {
      q: 'When should I take Prevayam during training or racing?',
      a: 'Take one sachet 15–20 minutes before your session to prime your energy stores. During longer efforts (60+ minutes), take one sachet every 30–45 minutes to maintain steady energy. After your session, it also helps replenish glycogen and electrolytes lost through sweat.',
    },
    {
      q: 'Is Prevayam suitable for all types of athletes?',
      a: 'Yes — Prevayam is designed for any endurance activity: running, cycling, trekking, swimming, CrossFit, team sports, and gym training. If your activity lasts more than 45 minutes, Prevayam can help you perform better and recover faster.',
    },
    {
      q: 'Does Prevayam contain any allergens?',
      a: 'Prevayam contains honey, which is a bee product. It is free from gluten, dairy, artificial sweeteners, and chemical preservatives. If you have a known allergy to bee products, please consult your doctor before use.',
    },
    {
      q: 'Is Prevayam tested for banned substances?',
      a: 'All Prevayam products are formulated with 100% natural, clean ingredients and contain no substances banned under WADA or NADA guidelines. We maintain complete ingredient transparency so athletes can race and compete with confidence.',
    },
    {
      q: 'How many sachets do I need for a marathon or long ride?',
      a: 'For a standard marathon (42km), we recommend 4–5 sachets — one before the race, then one every 30–40 minutes from the 1-hour mark. For a 5-hour ride, plan for 6–8 sachets. Your exact needs depend on intensity, weather, and body weight.',
    },
    {
      q: 'Where can I buy Prevayam?',
      a: 'Prevayam is available at select running stores, gyms, sports retailers, and at our events across India. Visit our Find page for the nearest stockist or to order online.',
    },
    {
      q: 'Can I use Prevayam just for gym sessions or everyday fitness?',
      a: 'Absolutely. Even 45-minute gym sessions, yoga flows, or evening runs benefit from Prevayam\'s clean energy. It\'s natural enough to use daily without worrying about artificial additives adding up.',
    },
  ]

  return (
    <section className="faq-section">
      <div className="wrap faq-wrap">
        <div className="faq-header reveal">
          <p className="section-tag">Got Questions?</p>
          <h2 className="section-h">Frequently Asked <em>Questions.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              className={`faq-item reveal${open === i ? ' faq-open' : ''}`}
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-q">
                <span>{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   GET IN TOUCH
   ============================================================ */
function GetInTouch() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:hello@prevayam.com?subject=${encodeURIComponent(form.subject || 'Enquiry from Website')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="get-touch" id="contact-section">
      <div className="gt-comb" aria-hidden="true"></div>
      <div className="wrap gt-wrap">
        <div className="gt-grid">
          <div className="gt-info reveal">
            <p className="section-tag-dark">Let's Talk</p>
            <h2 className="gt-h">Get in <em>Touch.</em></h2>
            <p className="gt-lead">
              Whether you want to stock Prevayam, partner with us, ask about bulk orders,
              or just share your performance story — we'd love to hear from you.
            </p>
            <div className="gt-contacts">
              <div className="gt-contact-item">
                <div className="gt-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                  </svg>
                </div>
                <div>
                  <span className="gt-contact-label">Email</span>
                  <a href="mailto:hello@prevayam.com" className="gt-contact-val">hello@prevayam.com</a>
                </div>
              </div>
              <div className="gt-contact-item">
                <div className="gt-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <span className="gt-contact-label">Location</span>
                  <span className="gt-contact-val">India</span>
                </div>
              </div>
              <div className="gt-contact-item">
                <div className="gt-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <div>
                  <span className="gt-contact-label">Response Time</span>
                  <span className="gt-contact-val">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="gt-form-wrap reveal">
            {sent ? (
              <div className="gt-success">
                <div className="gt-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <h4>Message Sent!</h4>
                <p>Your email client has been opened. We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)} style={{ marginTop: 20 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="gt-form" onSubmit={handleSubmit}>
                <div className="gt-form-row">
                  <div className="gt-field">
                    <label>Your Name</label>
                    <input type="text" placeholder="Arjun Mehta" required value={form.name} onChange={set('name')} />
                  </div>
                  <div className="gt-field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div className="gt-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" required value={form.email} onChange={set('email')} />
                </div>
                <div className="gt-field">
                  <label>Subject</label>
                  <input type="text" placeholder="Stock Prevayam / Partnership / General Enquiry" value={form.subject} onChange={set('subject')} />
                </div>
                <div className="gt-field">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Tell us about yourself and how we can help..." required value={form.message} onChange={set('message')} />
                </div>
                <button type="submit" className="btn btn-primary gt-submit">
                  Send Message &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Vision banner
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
          From every corner of India — we're on a mission to redefine
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
      <FuelEvery />
      <IngredientsSourcing />
      <HoneyProcess />
      <CompareDetailed />
      <Testimonials />
      <OurTeam />
      <JoinCommunity />
      <FAQSection />
      <GetInTouch />
      <BuiltInNagpur />
      <VisionBanner />
    </>
  )
}
