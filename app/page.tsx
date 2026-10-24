'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronRight, Circle, Menu, Trophy, X } from 'lucide-react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const squad = [
  { number: '1', name: 'Gianluigi Buffon', role: 'GOALKEEPER' },
  { number: '3', name: 'Giorgio Chiellini', role: 'DEFENDER' },
  { number: '6', name: 'Leonardo Bonucci', role: 'DEFENDER' },
  { number: '15', name: 'Andrea Barzagli', role: 'DEFENDER' },
  { number: '26', name: 'Stephan Lichtsteiner', role: 'DEFENDER' },
  { number: '11', name: 'Paolo De Ceglie', role: 'DEFENDER' },
  { number: '20', name: 'Simone Padoin', role: 'MIDFIELDER' },
  { number: '8', name: 'Claudio Marchisio', role: 'MIDFIELDER' },
  { number: '21', name: 'Andrea Pirlo', role: 'MIDFIELDER' },
  { number: '22', name: 'Arturo Vidal', role: 'MIDFIELDER' },
  { number: '7', name: 'Simone Pepe', role: 'MIDFIELDER' },
  { number: '10', name: 'Alessandro Del Piero', role: 'FORWARD' },
  { number: '18', name: 'Fabio Quagliarella', role: 'FORWARD' },
  { number: '14', name: 'Mirko Vučinić', role: 'FORWARD' },
  { number: '32', name: 'Alessandro Matri', role: 'FORWARD' },
  { number: '23', name: 'Marco Borriello', role: 'FORWARD' },
]

const matches = [
  { date: 'AUG 28', opponent: 'Parma', score: '4—1', note: 'A confident opening night' },
  { date: 'OCT 2', opponent: 'AC Milan', score: '2—0', note: 'A statement at the new stadium' },
  { date: 'DEC 11', opponent: 'Roma', score: '1—1', note: 'The unbeaten run rolls on' },
  { date: 'APR 25', opponent: 'Cesena', score: '1—0', note: 'One step from the summit' },
  { date: 'MAY 6', opponent: 'Cagliari', score: '2—0', note: 'Champions of Italy' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMatch, setActiveMatch] = useState(4)

  const jumpTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="crest" onClick={() => jumpTo('top')} aria-label="Back to top">J</button>
        <div className="topbar-center"><span>JUVENTUS FC</span><span className="slash">/</span><span>SEASON ARCHIVE</span></div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />} <span>INDEX</span>
        </button>
        {menuOpen && <nav className="menu-panel"><button onClick={() => jumpTo('story')}>THE STORY</button><button onClick={() => jumpTo('numbers')}>THE NUMBERS</button><button onClick={() => jumpTo('matches')}>THE RUN</button><button onClick={() => jumpTo('squad')}>THE SQUAD</button></nav>}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="red-dot" /> TORINO, ITALIA — 2011 / 12</p>
          <h1>BACK<br /><em>ON TOP.</em></h1>
          <p className="hero-intro">The season Juventus returned to the throne. Unbeaten, united, and driven by a coach who knew exactly what the shirt meant.</p>
          <button className="text-link" onClick={() => jumpTo('story')}>ENTER THE STORY <ArrowDown size={16} /></button>
        </div>
        <div className="hero-art" aria-label="Stylized illustration of a Juventus player">
          <div className="art-number">01</div>
          <div className="player-shadow"><div className="player-head" /><div className="player-body" /><div className="player-leg left" /><div className="player-leg right" /></div>
          <div className="hero-caption"><span>THE<br />RETURN</span><span className="caption-line" /></div>
        </div>
        <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section id="story" className="story-section section-grid">
        <div className="section-label"><span>01</span><span className="vertical-line" /><span>CONTEXT</span></div>
        <div className="story-content">
          <p className="eyebrow muted">A CLUB REBUILT</p>
          <h2>They took away<br /><span>the years.</span></h2>
          <p className="body-copy">Relegated to Serie B in the wake of Calciopoli, Juventus climbed back with a promise: the past could be painful, but it would never be permanent.</p>
          <div className="quote-block"><span className="quote-mark">“</span><p>We are not just returning. We are returning to win.</p><small>— ANTONIO CONTE, 2011</small></div>
        </div>
        <div className="story-card"><div className="card-top"><span>ARCHIVE NOTE / 2006—11</span><ArrowUpRight size={16} /></div><div className="card-big">5</div><p>seasons between Serie A titles</p><div className="card-rule" /><p className="small-note">A new stadium. A new identity.<br />The same black and white.</p></div>
      </section>

      <section id="numbers" className="numbers-section">
        <div className="numbers-heading"><p className="eyebrow">THE CAMPAIGN / IN NUMBERS</p><h2>UNBEATEN<br /><em>BY DESIGN.</em></h2></div>
        <div className="stat-grid"><div className="stat large"><strong>38</strong><span>MATCHES</span><p>One complete season without defeat.</p></div><div className="stat"><strong>23</strong><span>WINS</span></div><div className="stat"><strong>15</strong><span>DRAWS</span></div><div className="stat"><strong>20</strong><span>CLEAN SHEETS</span></div></div>
        <div className="progress-wrap"><div className="progress-label"><span>JUVENTUS 2011—12</span><span>38 / 38 PLAYED</span></div><div className="progress-track"><div className="progress-fill" /></div><div className="progress-label subtle"><span>UNBEATEN</span><span>CHAMPIONS</span></div></div>
      </section>

      <section id="matches" className="matches-section section-grid">
        <div className="section-label"><span>02</span><span className="vertical-line" /><span>THE RUN</span></div>
        <div className="matches-content"><p className="eyebrow muted">FIVE MOMENTS</p><h2>A SEASON<br /><span>IN MOTION.</span></h2><div className="match-list">{matches.map((match, index) => <button key={match.date} className={`match-row ${activeMatch === index ? 'active' : ''}`} onClick={() => setActiveMatch(index)}><span className="match-date">{match.date}</span><span className="match-opponent">{match.opponent}</span><strong>{match.score}</strong><span className="match-note">{match.note}</span><ChevronRight size={17} /></button>)}</div></div>
        <div className="winner-card"><div className="winner-icon"><Trophy size={25} strokeWidth={1.4} /></div><p className="eyebrow">MAY 13, 2012</p><h3>THE<br /><em>FINAL WHISTLE.</em></h3><p>Juventus seal the Scudetto in Trieste. A title without a single loss.</p><div className="winner-signature">JJ<span>•</span>12</div></div>
      </section>

      <section id="squad" className="squad-section">
        <div className="squad-heading"><div><p className="eyebrow muted">03 / THE SQUAD</p><h2>THE MEN<br /><em>WHO RETURNED.</em></h2></div><p className="squad-intro">A group shaped by resilience, guided by Conte, and remembered for giving Juventus its first unbeaten Serie A season.</p></div>
        <div className="squad-photo"><img src={`${basePath}/juventus-2012-squad.png`} alt="Archival-style portrait of the Juventus 2011–12 squad" /><span>TORINO / 2011—12</span></div>
        <div className="squad-list">{squad.map((player) => <div className="squad-player" key={`${player.number}-${player.name}`}><span className="player-number">{player.number}</span><div><strong>{player.name}</strong><span>{player.role}</span></div></div>)}</div>
      </section>

      <footer className="footer"><div><span className="footer-mark">J</span><p>JUVENTUS / 2011—12<br /><span>A SEASON ARCHIVE</span></p></div><button onClick={() => jumpTo('top')}>BACK TO TOP <ArrowUpRight size={15} /></button><p className="footer-credit">FORZA JUVE</p></footer>
    </main>
  )
}
