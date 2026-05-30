import { useState } from 'react'

export default function ContactChat() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Prevayam enquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:hello@prevayam.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <button
        className={`chat-fab${open ? ' chat-fab-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close contact' : 'Open contact'}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 4.1A7.9 7.9 0 0 1 21 12z" />
            <path d="M8 11h8M8 14h5" />
          </svg>
        )}
      </button>

      <div className={`chat-panel${open ? ' chat-panel-open' : ''}`} role="dialog" aria-label="Contact Prevayam">
        <div className="chat-head">
          <div className="chat-avatar">
            <img src="./assets/mark.png" alt="" />
          </div>
          <div>
            <div className="chat-title">Talk to Prevayam</div>
            <div className="chat-sub"><span className="chat-dot"></span> We usually reply within a day</div>
          </div>
        </div>

        {!sent ? (
          <form className="chat-body" onSubmit={submit}>
            <div className="chat-msg">
              Hi! Drop your details below — whether you want to stock Prevayam,
              find a store near you, or just say hello.
            </div>

            <label className="chat-field">
              <span>Your name</span>
              <input type="text" value={form.name} onChange={update('name')} required />
            </label>

            <label className="chat-field">
              <span>Email</span>
              <input type="email" value={form.email} onChange={update('email')} required />
            </label>

            <label className="chat-field">
              <span>Message</span>
              <textarea rows="3" value={form.message} onChange={update('message')} required />
            </label>

            <button type="submit" className="chat-send">
              Send message
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <div className="chat-foot">
              Or email us directly at <a href="mailto:hello@prevayam.com">hello@prevayam.com</a>
            </div>
          </form>
        ) : (
          <div className="chat-body chat-success">
            <div className="chat-tick">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12l5 5 9-11" />
              </svg>
            </div>
            <div className="chat-msg" style={{ textAlign: 'center' }}>
              Your email client should have opened. If not, write to us at{' '}
              <a href="mailto:hello@prevayam.com">hello@prevayam.com</a>.
            </div>
            <button className="chat-send" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>
              Send another
            </button>
          </div>
        )}
      </div>
    </>
  )
}
