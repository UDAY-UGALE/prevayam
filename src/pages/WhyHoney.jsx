import { useReveal } from '../hooks/useReveal'

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

export default function WhyHoney() {
  useReveal()
  return (
    <>
      <Pillars />
      <Compare />
      <Usage />
    </>
  )
}
