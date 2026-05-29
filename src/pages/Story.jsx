import { useReveal } from '../hooks/useReveal'

export default function Story() {
  useReveal()
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
