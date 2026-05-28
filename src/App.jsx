import { useEffect, useState, useRef } from 'react'

const MARK = './assets/mark.png'

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16 }
    )
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav>
      <a href="#top" className="brand" onClick={close}>
        <img src={MARK} alt="Prevayam mark" />
        PREVAYAM
      </a>
      <div className={`navlinks${open ? ' open' : ''}`}>
        <a href="#story" onClick={close}>The Story</a>
        <a href="#why" onClick={close}>Why Honey</a>
        <a href="#range" onClick={close}>The Range</a>
        <a href="#compare" onClick={close}>Us vs Them</a>
        <a href="#find" className="nav-cta" onClick={close}>Find Prevayam</a>
      </div>
      <button
        className={`burger${open ? ' x' : ''}`}
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

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
            <a href="#find" className="btn btn-primary">Find Prevayam &rarr;</a>
            <a href="#why" className="btn btn-ghost">Why Honey</a>
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

function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap">
        <div className="story-grid">
          <div className="reveal">
            <p className="section-tag">The Prevayam Story</p>
            <h2 className="section-h">Energy the way <em>nature</em> intended it.</h2>
            <p>
              We started Prevayam in Nagpur with a simple frustration: most energy
              gels are a mess of synthetic sugars, artificial colors and lab-made
              additives that wreck your stomach mid-effort.
            </p>
            <p>
              So we went back to the original endurance fuel — honey. Naturally rich
              in carbohydrates and paired with electrolytes, it delivers a steady,
              lasting boost without the spike and crash. We're building India's first
              honey-based sports nutrition brand — nothing artificial, nothing you
              can't pronounce.
            </p>
          </div>
          <div className="story-card reveal">
            <svg className="drip" viewBox="0 0 24 24" fill="var(--honey-soft)">
              <path d="M12 2C12 2 5 11 5 16a7 7 0 0 0 14 0c0-5-7-14-7-14z" />
            </svg>
            <div className="big">100%</div>
            <h4>Honey at the core</h4>
            <p>Our energy comes from real honey carbohydrates — the fuel athletes have trusted for centuries, made for modern performance.</p>
            <div style={{ height: 28 }}></div>
            <div className="big">0</div>
            <h4>Artificial chemicals</h4>
            <p>No synthetic sugars, no artificial colors, no preservatives. Just clean ingredients you can actually trust.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  const data = [
    { n: '01', h: 'Honey Based', p: 'Derived from pure honey for naturally sustained energy that lasts through every mile.', d: 'M12 3c3 4 6 6 6 10a6 6 0 0 1-12 0c0-4 3-6 6-10z' },
    { n: '02', h: 'Sustained Flow', p: 'A smooth energy curve designed for endurance — no jittery spike, no mid-effort crash.', d: 'M5 12h9M5 8h13M5 16h7 M16 14l4 2-4 2' },
    { n: '03', h: 'Electrolytes', p: 'Replenishes what you lose in sweat to keep muscles firing and cramps at bay.', d: 'M4 5h16v4a8 8 0 0 1-16 0z M9 20h6 M12 17v3' },
    { n: '04', h: 'Safe & Clean', p: 'No chemicals, no artificial additives. Pure, safe and made to be trusted.', d: 'M12 3l7 3v5c0 4-3 8-7 9-4-1-7-5-7-9V6z M9 12l2 2 4-4' },
  ]
  return (
    <section className="pillars" id="why">
      <div className="wrap">
        <p className="section-tag reveal">Why Prevayam</p>
        <h2 className="section-h reveal">Engineered for the long haul, <em>not the crash.</em></h2>
        <div className="pillar-grid">
          {data.map((it) => (
            <div className="pillar reveal" key={it.n}>
              <div className="num">{it.n}</div>
              <svg className="ico" viewBox="0 0 24 24">
                {it.d.split(' M').map((seg, i) => (
                  <path key={i} d={(i === 0 ? '' : 'M') + seg} />
                ))}
              </svg>
              <h3>{it.h}</h3>
              <p>{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Range() {
  const variants = [
    {
      name: 'Classic',
      tag: 'Everyday Endurance',
      chip: '#F6C04A',
      featured: true,
      desc: 'Pure honey energy with electrolytes. The clean, steady fuel for long runs, rides and treks.',
      points: ['Real honey carbs', 'Added electrolytes', 'Smooth, no crash'],
    },
    {
      name: 'Charge',
      tag: 'With Natural Caffeine',
      chip: '#F2A900',
      desc: 'Honey energy with a natural caffeine kick for that extra push when the effort gets serious.',
      points: ['Honey + caffeine', 'Sharper focus', 'Sustained drive'],
    },
    {
      name: 'Citrus',
      tag: 'Refreshing Twist',
      chip: '#dcae3a',
      desc: 'The same clean honey fuel with a bright citrus note that goes down easy mid-effort.',
      points: ['Honey + citrus', 'Easy to digest', 'Light & fresh'],
    },
  ]
  return (
    <section className="variants" id="range">
      <div className="wrap">
        <p className="section-tag reveal">The Range</p>
        <h2 className="section-h reveal">Three honey-powered <em>sachets.</em></h2>
        <div className="var-grid">
          {variants.map((v) => (
            <div className="var-card reveal" key={v.name}>
              {v.featured && <div className="ribbon">Hero</div>}
              <div className="var-chip" style={{ background: v.chip }}>
                <svg viewBox="0 0 24 24"><path d="M12 2C12 2 5 11 5 16a7 7 0 0 0 14 0c0-5-7-14-7-14z" /></svg>
              </div>
              <h3>{v.name}</h3>
              <div className="tagline">{v.tag}</div>
              <p>{v.desc}</p>
              <ul>{v.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="coming">Product shots coming soon</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Compare() {
  const them = ['Synthetic sugars & maltodextrin', 'Artificial colors & flavors', 'Preservatives & additives', 'Spike-then-crash energy', 'Hard on your stomach']
  const us = ['Real honey carbohydrates', 'Naturally sourced ingredients', 'Zero chemicals, zero additives', 'Smooth, sustained energy flow', 'Gentle, easy to digest']
  return (
    <section className="compare" id="compare">
      <div className="wrap">
        <p className="section-tag reveal">Us vs Them</p>
        <h2 className="section-h reveal">Clean fuel beats <em>synthetic junk.</em></h2>
        <div className="cmp">
          <div className="cmp-col cmp-them reveal">
            <h3>Typical Energy Gels</h3>
            <ul>{them.map((t) => <li key={t}><span className="mk">✕</span>{t}</li>)}</ul>
          </div>
          <div className="cmp-col cmp-us reveal">
            <h3>Prevayam</h3>
            <ul>{us.map((t) => <li key={t}><span className="mk">✓</span>{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Usage() {
  const steps = [
    { n: '01', h: 'Before', p: 'Take a sachet 15 minutes before your session to top off your energy stores and prime your body.' },
    { n: '02', h: 'During', p: 'Refuel every 30–45 minutes of sustained effort to maintain a steady stream of honey-powered energy.' },
    { n: '03', h: 'Recover', p: 'Use post-effort to help replenish glycogen and electrolytes lost through sweat.' },
  ]
  return (
    <section className="usage" id="use">
      <div className="wrap">
        <p className="section-tag reveal">How to Fuel</p>
        <h2 className="section-h reveal">Three steps to <em>cleaner</em> energy.</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.n}>
              <div className="n">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuiltFor() {
  const aud = [
    { h: 'Runners', p: 'From morning 5Ks to full marathons.', d: 'M13 4a2 2 0 1 0 0-.01M7 21l3-6 3 2 2 4M9 11l4-2 3 3 3-1' },
    { h: 'Gym & Hybrid', p: 'Train harder, recover cleaner.', d: 'M4 12h2M18 12h2M7 9v6M17 9v6M9 12h6' },
    { h: 'Trekkers', p: 'Sustained fuel for the long ascent.', d: 'M3 20h18L14 6l-3 6-2-3z' },
    { h: 'Cyclists', p: 'Steady energy across the distance.', d: 'M6 18a3 3 0 1 0 0-.01M18 18a3 3 0 1 0 0-.01M6 18l4-7h5l-3 7M14 7h3' },
  ]
  return (
    <section className="builtfor">
      <div className="wrap">
        <p className="section-tag reveal">Built For</p>
        <h2 className="section-h reveal">Made for everyone who <em>goes the distance.</em></h2>
        <div className="bf-grid">
          {aud.map((a) => (
            <div className="bf-card reveal" key={a.h}>
              <svg viewBox="0 0 24 24">
                {a.d.split('M').filter(Boolean).map((seg, i) => <path key={i} d={'M' + seg} />)}
              </svg>
              <h4>{a.h}</h4>
              <p>{a.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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

function Find() {
  return (
    <section className="find" id="find">
      <div className="wrap">
        <div className="find-grid">
          <div className="reveal">
            <p className="section-tag">Where to Find Us</p>
            <h2 className="section-h">Now stocked at <em>select stores.</em></h2>
            <p style={{ marginTop: 24, fontSize: '1.08rem', lineHeight: 1.7, color: '#3a4d3f', maxWidth: '30em' }}>
              Prevayam is in its early days and currently available through partner
              gyms, sports stores and running events around Nagpur. Drop us a line and
              we'll point you to the nearest spot — or get Prevayam onto your shelves.
            </p>
            <a href="mailto:hello@prevayam.com" className="btn btn-primary" style={{ marginTop: 30 }}>
              Get in Touch &rarr;
            </a>
          </div>
          <div className="reveal">
            <div className="find-card">
              <div className="pin"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h2M18 12h2M7 9v6M17 9v6M9 12h6" /></svg></div>
              <div><h4>Gyms & Fitness Studios</h4><p>Find Prevayam at partner gyms across Nagpur.</p></div>
            </div>
            <div className="find-card">
              <div className="pin"><svg viewBox="0 0 24 24" fill="none"><path d="M3 9l1-5h16l1 5M5 9v10h14V9M9 13h6" /></svg></div>
              <div><h4>Sports & Nutrition Stores</h4><p>Stocked on the shelves of local sports retailers.</p></div>
            </div>
            <div className="find-card">
              <div className="pin"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h9M5 8h13M5 16h7M16 14l4 2-4 2" /></svg></div>
              <div><h4>Running & Trek Events</h4><p>Catch us handing out sachets at local events.</p></div>
            </div>
            <div className="find-card">
              <div className="pin"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></svg></div>
              <div><h4>Stock Prevayam</h4><p>Run a store or gym? Partner with us to carry the range.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="foot-top">
        <div className="foot-brand">
          <div className="fb-logo">
            <img src={MARK} alt="Prevayam" />
            <span>PREVAYAM</span>
          </div>
          <p>
            India's first honey-based sports nutrition. Natural energy gel for athletes —
            honey based, no chemicals. Built for endurance, stamina and peak performance,
            the way nature intended. Proudly made in Nagpur.
          </p>
        </div>
        <div className="foot-col">
          <h5>Explore</h5>
          <a href="#story">The Story</a>
          <a href="#why">Why Honey</a>
          <a href="#range">The Range</a>
          <a href="#compare">Us vs Them</a>
          <a href="#find">Find Prevayam</a>
        </div>
        <div className="foot-col">
          <h5>Get in Touch</h5>
          <a href="mailto:hello@prevayam.com">hello@prevayam.com</a>
          <a href="#find">Stock Prevayam</a>
          <a href="#find">Store Locator</a>
          <div className="socials">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.3-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" /></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.8V13h2.6v8h3.1z" /></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22 8.3a2.6 2.6 0 0 0-1.8-1.8C18.6 6 12 6 12 6s-6.6 0-8.2.5A2.6 2.6 0 0 0 2 8.3 27 27 0 0 0 1.6 12 27 27 0 0 0 2 15.7a2.6 2.6 0 0 0 1.8 1.8C5.4 18 12 18 12 18s6.6 0 8.2-.5a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22.4 12 27 27 0 0 0 22 8.3zM10 14.7V9.3l4.7 2.7-4.7 2.7z" /></svg></a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="inner">
          <span>© {new Date().getFullYear()} Prevayam Nutrition. All rights reserved.</span>
          <span>Honey Based • No Chemicals • Made in Nagpur</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <div className="grain"></div>
      <div className="topbar">
        <span>Honey based • No chemicals • Natural energy gel for athletes • India's first honey sports nutrition</span>
      </div>
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Pillars />
      <Range />
      <Compare />
      <Usage />
      <BuiltFor />
      <Banner />
      <Find />
      <Footer />
    </>
  )
}
