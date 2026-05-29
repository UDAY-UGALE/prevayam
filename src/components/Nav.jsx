import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const MARK = './assets/mark.png'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav>
      <Link to="/" className="brand" onClick={close}>
        <img src={MARK} alt="Prevayam mark" />
        PREVAYAM
      </Link>

      <div className={`navlinks${open ? ' open' : ''}`}>
        <NavLink to="/story" onClick={close}>The Story</NavLink>
        <NavLink to="/why" onClick={close}>Why Honey</NavLink>
        <NavLink to="/range" onClick={close}>The Range</NavLink>
        <NavLink to="/why" onClick={close}>Us vs Them</NavLink>
        <NavLink to="/find" className="nav-cta" onClick={close}>Find Prevayam</NavLink>
      </div>

      <button
        className={`burger${open ? ' x' : ''}`}
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span></span><span></span><span></span>
      </button>

      {/* overlay is inside <nav> so it shares nav's stacking context —
          navlinks (z-index 1100) beats overlay (z-index 1099), making links clickable */}
      {open && <div className="nav-overlay" onClick={close} />}
    </nav>
  )
}
