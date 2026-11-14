 "use client";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");
  const [menu, setMenu] = useState(false);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setStatus(result.message);
      formElement.reset();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return <main>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="brand-mark">✚</span> Red<span>Hope</span></a>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu">☰</button>
      <nav className={menu ? "nav-links open" : "nav-links"}>
        <a href="#why">Why donate?</a><a href="#learn">Learn</a><a href="#steps">The process</a><a className="nav-cta" href="#volunteer">Get involved ↗</a>
      </nav>
    </header>

    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"></span> SMALL ACT. BIG DIFFERENCE.</div>
        <h1>Give blood.<br/><em>Share hope.</em></h1>
        <p className="hero-lead">A more caring world starts with people who choose to help. Learn about blood donation and share awareness in your community.</p>
        <div className="hero-actions"><a className="button primary" href="#learn">Explore the impact <span>↗</span></a><a className="text-link" href="#volunteer">Join the awareness drive <span>→</span></a></div>
        <div className="hero-note"><span className="avatars">● ● ●</span><span>Awareness begins with one conversation.</span></div>
      </div>
      <div className="hero-art">
        <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
        <div className="heart">♥</div><div className="floating-card card-top"><span className="tiny-icon">✚</span><div><b>Care is contagious</b><small>Pass it forward</small></div></div>
        <div className="floating-card card-bottom"><span className="drop">♥</span><div><b>Be informed</b><small>Learn before you donate</small></div></div>
        <div className="art-caption">ONE COMMUNITY. COUNTLESS WAYS TO CARE.</div>
      </div>
    </section>

    <section className="ticker"><div>LEARN <b>✳</b> SHARE <b>✳</b> SUPPORT <b>✳</b> INSPIRE <b>✳</b> LEARN <b>✳</b> SHARE <b>✳</b> SUPPORT <b>✳</b></div></section>

    <section className="intro-section wrap" id="why">
      <div><div className="eyebrow dark">WHY IT MATTERS</div><h2>One donation can<br/><em>make a difference.</em></h2></div>
      <div className="intro-text"><p>Blood is needed for many medical treatments and emergencies. Donations collected by authorized blood banks help healthcare teams care for patients when they need it.</p><p>By learning the facts and sharing reliable information, you can help more people make informed decisions.</p></div>
    </section>

    <section className="impact-grid wrap" id="learn">
      <article className="impact-card dark-card"><span className="card-number">01 / THE NEED</span><div className="big-symbol">✚</div><h3>Everyday care<br/>and emergencies</h3><p>Hospitals may need blood components for planned treatments, childbirth complications, serious injuries and other conditions.</p><a href="#facts">Explore the facts ↗</a></article>
      <article className="impact-card blush-card"><span className="card-number">02 / THE COMMUNITY</span><div className="big-symbol">♡</div><h3>Awareness creates<br/>connection</h3><p>Sharing verified information can encourage thoughtful conversations and support local donation drives.</p><a href="#volunteer">Spread awareness ↗</a></article>
      <article className="impact-card cream-card"><span className="card-number">03 / THE ACTION</span><div className="big-symbol">↗</div><h3>Be a voice<br/>for giving</h3><p>You can help by learning, sharing official resources or supporting an authorized blood donation camp.</p><a href="#steps">See the process ↗</a></article>
    </section>

    <section className="facts-section" id="facts"><div className="wrap facts-inner">
      <div><div className="eyebrow">KNOW THE BASICS</div><h2>Good information<br/><em>is powerful.</em></h2><p>Blood donation is a carefully managed medical process. Trained professionals check donor suitability and explain each step.</p></div>
      <div className="fact-list">
        <div className="fact"><span>01</span><div><b>There are different blood components</b><p>Whole blood can be separated into components such as red cells, platelets and plasma.</p></div></div>
        <div className="fact"><span>02</span><div><b>Donor safety matters</b><p>Donation centres follow screening and safety procedures. Always answer health questions honestly.</p></div></div>
        <div className="fact"><span>03</span><div><b>Eligibility is individual</b><p>Age, health, weight, medicines and other factors can affect eligibility. Ask an authorized blood bank or healthcare professional.</p></div></div>
      </div>
    </div></section>

    <section className="steps wrap" id="steps"><div className="eyebrow dark">A SIMPLE OVERVIEW</div><h2>What happens at a<br/><em>donation centre?</em></h2>
      <div className="step-row">
        <div className="step"><span>01</span><h3>Registration</h3><p>Share your details with the authorized centre and read the donor information.</p></div>
        <div className="step"><span>02</span><h3>Health screening</h3><p>Trained staff ask questions and check whether donation is suitable for you.</p></div>
        <div className="step"><span>03</span><h3>Donation</h3><p>If approved, qualified staff guide the process using sterile, single-use equipment.</p></div>
        <div className="step"><span>04</span><h3>Aftercare</h3><p>Follow the centre's aftercare advice and speak up if you feel unwell.</p></div>
      </div>
      <p className="notice">This is general awareness information, not medical advice. Eligibility and procedures vary. Follow guidance from a licensed blood bank or healthcare professional.</p>
    </section>

    <section className="volunteer-section" id="volunteer"><div className="wrap volunteer-inner">
      <div className="volunteer-copy"><div className="eyebrow">MAKE KINDNESS VISIBLE</div><h2>Help spread<br/><em>the word.</em></h2><p>Want to support a college or community awareness activity? Leave a message below. This demo form shows how a backend API can receive submissions.</p><div className="contact-mini"><span>✉</span> Awareness starts with you.</div></div>
      <form className="volunteer-form" onSubmit={submitForm}>
        <div className="form-heading"><span>GET INVOLVED</span><b>Send us a message</b></div>
        <label>Your name<input name="name" placeholder="Enter your name" required minLength={2}/></label>
        <label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label>
        <label>How would you like to help?
          <select name="interest" required defaultValue=""><option value="" disabled>Select an interest</option><option>Share awareness</option><option>College project / event</option><option>Volunteer with a registered camp</option><option>Learn more</option></select>
        </label>
        <label>Your message<textarea name="message" rows={3} placeholder="Write a short message..." maxLength={500}/></label>
        <button className="button primary submit" type="submit">Submit message <span>↗</span></button>
        <p className="form-status" aria-live="polite">{status || "Demo only: submissions are validated but not saved to a database."}</p>
      </form>
    </div></section>

    <footer className="footer"><div className="wrap footer-top"><a className="brand light-brand" href="#"><span className="brand-mark">✚</span> Red<span>Hope</span></a><p>Awareness. Compassion. Community.</p><a href="#top" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}>Back to top ↑</a></div><div className="wrap footer-bottom"><span>© 2026 RedHope — Student awareness project</span><span>Not affiliated with a blood bank or medical organization.</span></div></footer>
  </main>;
}