import { useReveal } from '../hooks/useReveal'

export default function Find() {
  useReveal()
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
