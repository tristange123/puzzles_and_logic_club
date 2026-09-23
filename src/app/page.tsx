export default function Home() {
  const navItems = ["Home", "About", "Our team", "Events"];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Puzzles Logics home">
          <span className="mark" aria-hidden="true">PL</span>
          <span>Puzzles Logics</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="eyebrow"><span />NYU&apos;s puzzle community</div>
        <h1>An appreciation<br />of a brilliant thought.</h1>
        <p className="hero-copy">
          A club for curious minds, clever ideas, and the satisfying moment
          when everything clicks.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="#events">
            Explore events <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#about">
            Learn about us <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="scroll-note" aria-hidden="true">
          <span>Scroll to discover</span><div />
        </div>
      </section>

      <section id="about" className="light-section about">
        <p className="section-label">01 / About</p>
        <div>
          <h2>For people who like a challenge.</h2>
          <p>
            Puzzles Logics brings together NYU students who love solving,
            creating, and discussing puzzles of every kind—from classic logic
            grids to lateral thinking and team competitions.
          </p>
        </div>
      </section>

      <section id="our-team" className="dark-section team">
        <p className="section-label">02 / Our team</p>
        <div>
          <h2>Built by solvers,<br />for solvers.</h2>
          <p>
            Our student-led team designs welcoming events where every
            perspective has a place at the table.
          </p>
          <a className="outline-link" href="mailto:puzzleslogics@nyu.edu">
            Meet the team <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="events" className="light-section events">
        <div className="events-heading">
          <p className="section-label">03 / Events</p>
          <h2>What&apos;s next</h2>
        </div>
        <div className="event-list">
          <article>
            <p>Coming soon</p>
            <h3>Weekly Puzzle Night</h3>
            <span>NYU campus · Open to all</span>
          </article>
          <article>
            <p>Coming soon</p>
            <h3>Team Logic Tournament</h3>
            <span>More details to follow</span>
          </article>
        </div>
      </section>

      <footer>
        <div className="wordmark">
          <span className="mark">PL</span><span>Puzzles Logics</span>
        </div>
        <p>New York University · New York, NY</p>
      </footer>
    </main>
  );
}
