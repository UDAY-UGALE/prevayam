import { useReveal } from '../hooks/useReveal'

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

export default function Team() {
  useReveal()
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
