import { useReveal } from '../hooks/useReveal'

function RangeSection() {
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

export default function Range() {
  useReveal()
  return (
    <>
      <RangeSection />
      <BuiltFor />
    </>
  )
}
