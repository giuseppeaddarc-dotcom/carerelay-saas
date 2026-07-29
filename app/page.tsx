"use client";

import { FormEvent, useState } from "react";

type DemoStep = 0 | 1 | 2;

const features = [
  {
    number: "01",
    title: "Attività e responsabilità",
    body: "Chi fa cosa, entro quando e cosa è ancora da confermare.",
  },
  {
    number: "02",
    title: "Appuntamenti e scadenze",
    body: "Visite, commissioni e impegni in un calendario condiviso.",
  },
  {
    number: "03",
    title: "Note e informazioni",
    body: "Indicazioni pratiche e aggiornamenti ordinati, senza cercarli nelle chat.",
  },
  {
    number: "04",
    title: "Ruoli e permessi",
    body: "Ogni persona vede ciò che serve al proprio ruolo nel cerchio di cura.",
  },
];

const faqItems = [
  {
    q: "Devo aprire l’app per usare il servizio?",
    a: "No. Puoi chiedere, ascoltare e aggiornare le attività anche parlando o scrivendo all’assistente su WhatsApp. L’app resta disponibile quando vuoi vedere il quadro completo.",
  },
  {
    q: "L’assistente AI può modificare le attività da solo?",
    a: "No. L’assistente prepara proposte e riepiloghi, ma le modifiche importanti vengono mostrate e confermate da una persona autorizzata.",
  },
  {
    q: "Serve uno smartwatch?",
    a: "No. Il servizio funziona anche senza dispositivi. Un wearable compatibile può aggiungere i segnali che quel modello rende disponibili.",
  },
  {
    q: "Il servizio dà consigli medici?",
    a: "No. Coordina informazioni e persone, ma non formula diagnosi, non prescrive terapie e non sostituisce professionisti o servizi di emergenza.",
  },
  {
    q: "Cosa comprende il piano?",
    a: "Uno spazio famiglia, app completa, assistente AI su WhatsApp, attività, calendario, promemoria farmaci, note, ruoli, storico e integrazioni compatibili.",
  },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`x-mark ${className}`} aria-hidden="true">
      <i className="x-arm x-arm-a" />
      <i className="x-arm x-arm-b" />
      <i className="x-end x-end-one" />
      <i className="x-end x-end-two" />
      <i className="x-end x-end-three" />
      <i className="x-end x-end-four" />
      <b className="x-person" />
    </span>
  );
}

function BrandName() {
  return <span className="brand-name">CareGive</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoStep, setDemoStep] = useState<DemoStep>(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  function scrollToPilot() {
    document.getElementById("pilot")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const request = [
      "Richiesta accesso beta — CareGive X",
      "",
      `Nome: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Ruolo: ${data.get("role")}`,
      "",
      "Vorrei provare CareGive X per coordinare l’assistenza di una persona cara.",
    ].join("\n");
    setBrief(request);
    setSubmitted(true);
    setCopied(false);
  }

  async function copyBrief() {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
  }

  return (
    <main>
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>

      <header className="site-header">
        <nav className="nav shell" aria-label="Navigazione principale">
          <a className="brand" href="#inizio" aria-label="CareGive X, torna all’inizio">
            <BrandName />
            <BrandMark className="x-mark-small" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">{menuOpen ? "Chiudi il menu" : "Apri il menu"}</span>
            <i /><i />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="nav-links">
            <a href="#come-funziona" onClick={() => setMenuOpen(false)}>Come funziona</a>
            <a href="#cerchio" onClick={() => setMenuOpen(false)}>Il cerchio</a>
            <a href="#sicurezza" onClick={() => setMenuOpen(false)}>Sicurezza</a>
            <a href="#piano" onClick={() => setMenuOpen(false)}>5,99 €</a>
            <button className="button button-dark button-small" onClick={scrollToPilot}>Richiedi accesso</button>
          </div>
        </nav>
      </header>

      <div id="contenuto">
        <section className="hero section" id="inizio">
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="hero-wordmark" aria-label="CareGive X">
                <BrandName />
                <BrandMark className="x-mark-hero" />
              </div>
              <h1>
                La cura,<br />
                <em>coordinata.</em>
              </h1>
              <p className="hero-mission">
                Più autonomia per chi riceve assistenza. Più tranquillità per chi se ne prende cura.
              </p>
              <p className="hero-lead">
                <strong>Un solo spazio per organizzare attività, visite, farmaci e responsabilità.</strong>{" "}
                La famiglia vede tutto nell’app oppure chiede e aggiorna ciò che serve con un
                semplice messaggio su WhatsApp.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#come-funziona">Scopri come funziona <span aria-hidden="true">↓</span></a>
                <button className="text-link" onClick={scrollToPilot}>Richiedi accesso</button>
              </div>
              <p className="hero-trust">L’AI assiste. Le persone restano al comando.</p>
            </div>

            <div className="product-hero-card" aria-label="Esempio dell’app CareGive X e dell’assistente su WhatsApp">
              <div className="product-card-top">
                <div>
                  <span>Oggi</span>
                  <strong>Il quadro familiare</strong>
                </div>
                <span className="live-pill"><i /> Cerchio attivo</span>
              </div>
              <div className="product-progress">
                <p><strong>4 di 5</strong><span>attività coperte</span></p>
                <i><b /></i>
              </div>
              <div className="product-timeline">
                <article><time>10:00</time><span /><p><strong>Visita di controllo</strong><small>Familiare · confermato</small></p><b>✓</b></article>
                <article><time>16:30</time><span /><p><strong>Spesa</strong><small>Caregiver · in carico</small></p><b>✓</b></article>
                <article className="pending"><time>20:00</time><span /><p><strong>Promemoria farmaco</strong><small>Da confermare</small></p><b>!</b></article>
              </div>
              <div className="whatsapp-peek">
                <div><span>WhatsApp · Assistente</span><small>ora</small></div>
                <p className="peek-question">Cosa resta da fare oggi?</p>
                <p className="peek-answer"><strong>Una cosa.</strong> Il promemoria delle 20:00 è ancora da confermare.</p>
              </div>
              <div className="product-card-bottom">
                <span>App per vedere tutto</span>
                <span>WhatsApp per fare prima</span>
              </div>
            </div>
          </div>

          <div className="shell trust-row" aria-label="Principi del servizio">
            <div><span>01</span><strong>Una sola regia</strong><small>Attività, persone e informazioni</small></div>
            <div><span>02</span><strong>Anche su WhatsApp</strong><small>Testo, voce, domande e conferme</small></div>
            <div><span>03</span><strong>Le persone decidono</strong><small>L’AI assiste, il cerchio resta al comando</small></div>
          </div>
        </section>

        <section className="problem section">
          <div className="shell problem-head">
            <div>
              <p className="eyebrow">Il problema</p>
              <h2>La cura quotidiana vive in troppi posti.</h2>
            </div>
            <p>Una nota vocale in chat, una visita sul calendario, un farmaco scritto su un foglietto. Il lavoro invisibile cresce quando nessuno ha lo stesso quadro.</p>
          </div>
          <div className="shell transformation">
            <div className="chaos-panel">
              <span className="panel-label">Prima</span>
              <h3>28 messaggi. Tre appunti. Due calendari.</h3>
              <div className="chaos-grid">
                <p className="chaos-chat"><small>Chat famiglia</small><span>Chi passa domani?</span><span>La visita era alle 10?</span></p>
                <p className="chaos-note"><small>Appunto</small><strong>farmacia<br />+ spesa?</strong></p>
                <p className="chaos-date"><small>LUG</small><strong>16</strong><span>Controllo?</span></p>
              </div>
            </div>
            <span className="transformation-arrow" aria-hidden="true">→</span>
            <div className="clarity-panel">
              <span className="panel-label">Con il servizio</span>
              <h3>Un solo quadro condiviso.</h3>
              <div className="clarity-list">
                <p><span>✓</span><strong>Visita · 10:30</strong><small>Responsabile confermato</small></p>
                <p><span>✓</span><strong>Farmacia · 18:00</strong><small>In carico alla famiglia</small></p>
                <p><span>↻</span><strong>Promemoria · 20:00</strong><small>Avviso programmato</small></p>
              </div>
              <small>Dal rumore ad attività chiare, promemoria e risposte immediate.</small>
            </div>
          </div>
        </section>

        <section className="how section" id="come-funziona">
          <div className="shell section-head">
            <div><p className="eyebrow">Come funziona</p><h2>WhatsApp per la velocità.<br />L’app per vedere tutto.</h2></div>
            <p>Non serve imparare un nuovo strumento per ogni piccola operazione. Parli come fai già; il servizio trasforma la richiesta in qualcosa di chiaro e condiviso.</p>
          </div>

          <div className="shell channel-stage">
            <article className="channel-copy">
              <span className="channel-number">01</span>
              <p className="channel-kicker">Senza aprire l’app</p>
              <h3>Chiedi. Prendi in carico. Conferma.</h3>
              <p>L’assistente legge solo le attività autorizzate, risponde e prepara l’aggiornamento. La decisione finale resta sempre a una persona.</p>
              <div className="demo-tabs" role="tablist" aria-label="Fasi dell’esempio">
                {["1. Chiedi", "2. Mi occupo io", "3. Confermato"].map((label, index) => (
                  <button
                    key={label}
                    role="tab"
                    aria-selected={demoStep === index}
                    className={demoStep === index ? "active" : ""}
                    onClick={() => setDemoStep(index as DemoStep)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </article>
            <div className="message-demo" role="tabpanel" aria-live="polite">
              <div className="message-demo-top"><strong>Assistente CareGive</strong><BrandMark className="x-mark-tiny" /><span>ora</span></div>
              {demoStep === 0 && (
                <div className="message-thread">
                  <p className="message-user">Chi accompagna mamma alla visita di domani?</p>
                  <div className="message-ai"><small>Visita · domani, 10:30</small><strong>Nessun responsabile confermato</strong><span>Puoi prenderla in carico oppure avvisare il cerchio.</span></div>
                </div>
              )}
              {demoStep === 1 && (
                <div className="message-thread">
                  <p className="message-user">Me ne occupo io.</p>
                  <div className="message-ai"><small>Proposta pronta</small><strong>Visita · domani, 10:30</strong><span>Responsabile: tu</span><div className="message-actions"><b>Conferma</b><b>Modifica</b></div></div>
                </div>
              )}
              {demoStep === 2 && (
                <div className="message-thread">
                  <div className="message-ai message-confirmed"><i>✓</i><small>Responsabilità confermata</small><strong>Tu accompagni mamma</strong><span>Visita · domani, 10:30 · cerchio aggiornato</span></div>
                </div>
              )}
              <div className="message-input"><span>Scrivi o invia una nota vocale</span><b>●</b></div>
            </div>
          </div>

          <div className="shell app-strip">
            <div><span className="channel-number">02</span><p className="channel-kicker">L’app completa</p><h3>Il quadro completo, sempre leggibile.</h3></div>
            <div className="app-strip-list">
              <p><span>Oggi</span><strong>5 attività · 4 coperte</strong></p>
              <p><span>Settimana</span><strong>3 appuntamenti</strong></p>
              <p><span>Cerchio</span><strong>4 persone attive</strong></p>
            </div>
          </div>
        </section>

        <section className="circle-section section" id="cerchio">
          <div className="shell circle-layout">
            <div className="family-orbit" role="img" aria-label="Una persona assistita di esempio al centro del cerchio formato da familiari, caregiver e una specialista">
              <span className="family-line line-one" aria-hidden="true" />
              <span className="family-line line-two" aria-hidden="true" />
              <span className="family-line line-three" aria-hidden="true" />
              <span className="family-line line-four" aria-hidden="true" />
              <div className="orbit-label label-one"><b>Giulia</b><small>Figlia · amministratrice</small></div>
              <div className="orbit-label label-two"><b>Marco</b><small>Familiare</small></div>
              <div className="orbit-label label-three"><b>Alina</b><small>Caregiver · badante</small></div>
              <div className="orbit-label label-four"><b>Dott.ssa Riva</b><small>Specialista · accesso mirato</small></div>
              <div className="family-center"><span aria-hidden="true">♥</span><b>Anna</b><small>Nome di esempio</small></div>
            </div>
            <div className="circle-copy">
              <p className="eyebrow">La persona che ami al centro</p>
              <h2>Un cerchio di cura.<br />Non una catena di messaggi.</h2>
              <p>Nel grafico usiamo un nome di esempio. Nel tuo spazio, al centro ci sarà la persona di cui vi prendete cura; familiari, caregiver, badanti, psicologi e specialisti collaboreranno intorno a lei.</p>
              <div className="permission-list">
                <div><span>◎</span><p><strong>Un ruolo per ogni persona</strong><small>Accessi diversi, responsabilità leggibili.</small></p></div>
                <div><span>✓</span><p><strong>Conferme visibili</strong><small>È chiaro chi ha fatto o preso in carico un’attività.</small></p></div>
                <div><span>↻</span><p><strong>Aggiornamenti condivisi</strong><small>Le informazioni utili arrivano senza rincorrere le chat.</small></p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="management section">
          <div className="shell section-head">
            <div><p className="eyebrow">La regia quotidiana</p><h2>Meno cose da ricordare.<br />Più tempo per esserci.</h2></div>
            <p>Tutto ciò che serve per coordinare la giornata, senza trasformare la cura in un altro lavoro da amministrare.</p>
          </div>
          <div className="shell feature-grid">
            {features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>

          <div className="shell medication-feature">
            <div className="medication-copy">
              <p className="eyebrow eyebrow-light">Promemoria farmaci</p>
              <h3>Il promemoria giusto.<br />Al momento giusto.</h3>
              <p>Una persona autorizzata inserisce il promemoria e l’orario. Il servizio avvisa sull’app o su WhatsApp, chiede conferma e aggiorna il cerchio familiare.</p>
              <div className="medication-flow" aria-label="Inserisci, ricorda, conferma">
                <span>Inserisci</span><i aria-hidden="true">→</i><span>Ricorda</span><i aria-hidden="true">→</i><span>Conferma</span>
              </div>
            </div>
            <div className="medication-preview" aria-label="Esempio illustrativo di promemoria farmaco">
              <div className="medication-time"><span>Oggi</span><strong>20:00</strong><small>Promemoria confermato dalla famiglia</small></div>
              <div className="medication-card">
                <span className="medication-icon" aria-hidden="true">●</span>
                <p><small>È il momento del promemoria</small><strong>Farmaco della sera</strong><span>Voce inserita dalla famiglia</span></p>
              </div>
              <div className="medication-actions" aria-hidden="true"><span>Fatto</span><span>Ricordamelo dopo</span></div>
              <div className="medication-status"><span aria-hidden="true">✓</span><p><strong>Confermato dalla persona assistita</strong><small>Il cerchio familiare è aggiornato</small></p></div>
            </div>
            <p className="medication-boundary">Ricorda ciò che è stato inserito e confermato. Non prescrive, non modifica dosi e non decide cosa fare in caso di mancata assunzione.</p>
          </div>
        </section>

        <section className="monitoring section">
          <div className="shell monitoring-card">
            <div className="monitoring-copy">
              <p className="eyebrow">Monitoraggio opzionale</p>
              <h2>Se c’è un dispositivo compatibile, il quadro può diventare più completo.</h2>
              <p>Battito, ossigenazione, cadute rilevate e altri segnali disponibili possono essere confrontati con soglie configurate e generare alert per i contatti autorizzati.</p>
              <div className="signal-list"><span>Battito</span><span>Ossigenazione</span><span>Cadute</span><span>Altri segnali</span></div>
            </div>
            <div className="vital-card" aria-label="Esempio illustrativo di monitoraggio">
              <div><small>Stato</small><strong>Nella norma</strong><i className="status-dot" /></div>
              <p><span>Battito</span><strong>72 <small>bpm</small></strong></p>
              <p><span>Ossigenazione</span><strong>97<small>%</small></strong></p>
              <p><span>Cadute rilevate</span><strong>0</strong></p>
              <small className="vital-note">Dati illustrativi · disponibilità variabile per dispositivo</small>
            </div>
            <p className="monitoring-boundary"><strong>Confine chiaro.</strong> Gli alert sono informativi: non sono diagnosi, non garantiscono un intervento e non sostituiscono i servizi di emergenza.</p>
          </div>
        </section>

        <section className="safety section" id="sicurezza">
          <div className="shell safety-grid">
            <div className="safety-copy">
              <p className="eyebrow eyebrow-light">Fiducia, prima di tutto</p>
              <h2>La tecnologia aiuta.<br />Le persone decidono.</h2>
              <p>Il servizio rende il lavoro condiviso più semplice e verificabile, con confini comprensibili fin dal primo utilizzo.</p>
              <div className="safety-note"><span>!</span><p><strong>Non è un dispositivo medico.</strong>Non usarlo per diagnosi, decisioni terapeutiche o richieste di emergenza.</p></div>
            </div>
            <div className="principle-list">
              <article><span>01</span><div><h3>Permessi per ruolo</h3><p>Ognuno accede solo alle informazioni autorizzate.</p></div></article>
              <article><span>02</span><div><h3>Conferma umana</h3><p>L’AI propone; le persone approvano le modifiche importanti.</p></div></article>
              <article><span>03</span><div><h3>Traccia leggibile</h3><p>È visibile cosa è cambiato, quando e per mano di chi.</p></div></article>
              <article><span>04</span><div><h3>Nessuna promessa clinica</h3><p>Il servizio coordina. Non diagnostica e non prescrive.</p></div></article>
            </div>
          </div>
        </section>

        <section className="pricing section" id="piano">
          <div className="shell price-intro">
            <p className="eyebrow">Un solo piano</p>
            <h2>Tutto il servizio.<br />Niente livelli da decifrare.</h2>
            <p>Una cifra semplice per uno spazio famiglia completo.</p>
          </div>
          <div className="shell price-card">
            <div className="price-main"><span>Piano unico</span><strong>5,99 €</strong><small>al mese · per spazio famiglia</small></div>
            <div className="price-features">
              <p><span>✓</span>App completa</p>
              <p><span>✓</span>Assistente AI su WhatsApp</p>
              <p><span>✓</span>Attività, calendario e responsabilità</p>
              <p><span>✓</span>Promemoria, routine e farmaci</p>
              <p><span>✓</span>Note, ruoli e storico</p>
              <p><span>✓</span>Monitoraggio compatibile opzionale</p>
            </div>
            <div className="price-action">
              <button className="button button-primary button-full" onClick={scrollToPilot}>Richiedi accesso alla beta →</button>
              <small>Nessun orologio incluso o necessario. Concept software in fase di validazione.</small>
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="shell faq-grid">
            <div><p className="eyebrow">Domande frequenti</p><h2>Chiarezza prima di iniziare.</h2></div>
            <div className="accordion">
              {faqItems.map((item, index) => (
                <article className={openFaq === index ? "open" : ""} key={item.q}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                    <span>{item.q}</span><i>{openFaq === index ? "−" : "+"}</i>
                  </button>
                  {openFaq === index && <p>{item.a}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pilot section" id="pilot">
          <div className="shell pilot-grid">
            <div className="pilot-copy">
              <p className="eyebrow eyebrow-light">Accesso anticipato</p>
              <h2>La cura può essere più semplice da coordinare.</h2>
              <p>Stiamo selezionando le prime famiglie per validare l’esperienza, l’utilità dell’assistente e la chiarezza del servizio.</p>
              <div className="pilot-points"><span>5,99 € al mese</span><span>WhatsApp + app</span><span>Nessun hardware obbligatorio</span></div>
              <div className="no-send-note"><strong>Trasparenza sul contatto</strong><p>Il modulo prepara un riepilogo da copiare. Nessun dato viene inviato o salvato dal sito.</p></div>
            </div>
            {!submitted ? (
              <form className="interest-form" onSubmit={handleSubmit}>
                <div className="form-head"><span>Richiedi accesso alla beta</span><small>Meno di 1 minuto</small></div>
                <div className="form-row">
                  <label>Nome<input autoComplete="name" required minLength={2} placeholder="Come ti chiami?" name="name" /></label>
                  <label>Email<input type="email" autoComplete="email" required placeholder="nome@esempio.it" name="email" /></label>
                </div>
                <label>Vorrei partecipare come
                  <select name="role">
                    <option>Famiglia / futuro utente</option>
                    <option>Caregiver o assistente</option>
                    <option>Professionista o partner</option>
                  </select>
                </label>
                <label className="consent"><input type="checkbox" required /><span>Ho compreso che il servizio è un concept e non inserirò dati sanitari nel modulo.</span></label>
                <button className="button button-primary button-full" type="submit">Prepara la richiesta →</button>
              </form>
            ) : (
              <div className="brief-card" aria-live="polite">
                <span className="brief-check">✓</span>
                <h3>Richiesta pronta.</h3>
                <p>Copia questo riepilogo e invialo attraverso il canale che preferisci.</p>
                <pre>{brief}</pre>
                <button className="button button-primary button-full" onClick={copyBrief}>{copied ? "Copiato ✓" : "Copia la richiesta"}</button>
                <button className="text-button" onClick={() => setSubmitted(false)}>Modifica i dati</button>
                <small>Nessun dato è stato inviato o salvato dal sito.</small>
              </div>
            )}
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#inizio"><BrandName /><BrandMark className="x-mark-small" /></a><p>Care for someone. Together.</p></div>
          <div className="footer-note"><strong>Software in fase di validazione — non è un dispositivo medico.</strong><p>Non usare il servizio per diagnosi, decisioni terapeutiche o richieste di emergenza.</p></div>
          <div className="footer-links"><a href="#come-funziona">Come funziona</a><a href="#cerchio">Il cerchio</a><a href="#pilot">Accesso beta</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 CareGive X concept</span><span>La persona al centro. Tutto il resto, coordinato.</span></div>
      </footer>
    </main>
  );
}
