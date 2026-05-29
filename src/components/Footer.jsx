import { Link } from 'react-router-dom'

const MARK = './assets/mark.png'

export default function Footer() {
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
          <Link to="/story">The Story</Link>
          <Link to="/why">Why Honey</Link>
          <Link to="/range">The Range</Link>
          <Link to="/why">Us vs Them</Link>
          <Link to="/find">Find Prevayam</Link>
        </div>
        <div className="foot-col">
          <h5>Get in Touch</h5>
          <a href="mailto:hello@prevayam.com">hello@prevayam.com</a>
          <Link to="/find">Stock Prevayam</Link>
          <Link to="/find">Store Locator</Link>
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
