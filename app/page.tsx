"use client";

import { FormEvent, useMemo, useState } from "react";

type Audience = "family" | "partner";
type DemoStep = 0 | 1 | 2;

const audienceCopy = {
  family: {
    label: "Per la mia famiglia",
    title: "Meno messaggi da rincorrere. Più serenità condivisa.",
    body: "Riunisci attività, conferme e avvisi in una vista semplice, lasciando al centro l’autonomia della persona assistita.",
    cta: "Partecipa come famiglia",
  },
  partner: {
    label: "Per la mia organizzazione",
    title: "Un pilot misurabile, con confini e responsabilità chiari.",
    body: "Valuta integrazioni, procedure operative e sostenibilità insieme a un progetto che separa sempre coordinamento e funzioni cliniche.",
    cta: "Valuta una partnership",
  },
};

const plans = [
  {
    name: "Sicurezza",
    setup: "99 €",
    monthly: 14.9,
    note: "Per autonomia e contatto rapido",
    features: ["Bracciale 4G e SIM", "SOS verso 3 contatti", "Cadute e GPS", "1 accesso familiare"],
  },
  {
    name: "Care Plus",
    setup: "149 €",
    monthly: 19.99,
    note: "Per coordinamento familiare evoluto",
    features: ["Tutto di Sicurezza", "3 accessi familiari", "Geofence e avvisi", "Promemoria condivisi"],
    featured: true,
  },
  {
    name: "Care H24",
    setup: "199 €",
    monthly: 34.9,
    note: "Solo con partner operativo qualificato",
    features: ["Tutto di Care Plus", "Centrale partner 24/7", "Verifica degli allarmi", "Protocollo personalizzato"],
  },
];

const faqs = [
  {
    q: "CareRelay è già un servizio medico attivo?",
    a: "No. È un concept in validazione. Il primo pilot riguarda il coordinamento non medico; emergenze e funzioni cliniche richiedono partner, moduli e procedure qualificati.",
  },
  {
    q: "Serve imparare una nuova app?",
    a: "L’app raccoglie la vista completa, ma le azioni rapide possono partire anche da WhatsApp. CareRelay propone una scheda chiara e chiede sempre conferma.",
  },
  {
    q: "Chi vede le informazioni?",
    a: "Solo le persone invitate, secondo il ruolo assegnato. Accessi, modifiche e revoche devono essere leggibili e tracciabili.",
  },
  {
    q: "I prezzi sono definitivi?",
    a: "No. Sono ipotesi commerciali da verificare durante il pilot insieme a famiglie, partner e fornitori.",
  },
];

export default function Home() {
  const [audience, setAudience] = useState<Audience>("family");
  const [demoStep, setDemoStep] = useState<DemoStep>(0);
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedAudience = audienceCopy[audience];
  const priceLabel = useMemo(() => (annual ? "equivalente mensile, -10%" : "al mese"), [annual]);

  function scrollToPilot(nextAudience?: Audience) {
    if (nextAudience) setAudience(nextAudience);
    document.querySelector("#pilot")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const role = String(form.get("role") || "");
    const organization = String(form.get("organization") || "").trim();
    const message = String(form.get("message") || "").trim();
    setBrief(
      [
        "Manifestazione d’interesse — CareRelay",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Profilo: ${role}`,
        `Organizzazione: ${organization || "Non indicata"}`,
        "",
        message || "Vorrei ricevere aggiornamenti sul pilot CareRelay.",
      ].join("\n"),
    );
    setCopied(false);
  }

  async function copyBrief() {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
  }

  return (
    <main>
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>

      <div className="concept-bar" role="note">
        <span className="pulse-dot" aria-hidden="true" />
        <strong>Concept in validazione</strong>
        <span>Non è un servizio medico attivo</span>
      </div>

      <header className="site-header">
        <nav className="nav shell" aria-label="Navigazione principale">
          <a className="brand" href="#inizio" aria-label="CareRelay, torna all’inizio">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span>CareRelay</span>
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
            <a href="#sicurezza" onClick={() => setMenuOpen(false)}>Sicurezza</a>
            <a href="#piani" onClick={() => setMenuOpen(false)}>Piani</a>
            <button className="button button-dark button-small" onClick={() => scrollToPilot()}>
              Partecipa al pilot
            </button>
          </div>
        </nav>
      </header>

      <div id="contenuto">
        <section className="hero section" id="inizio">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span>●</span> Bracciale, app e WhatsApp in un unico flusso</p>
              <h1>Un unico filo per la cura di <em>ogni giorno.</em></h1>
              <p className="hero-lead">
                CareRelay aiuta famiglie e assistenti a trasformare messaggi, promemoria e avvisi
                in attività chiare, confermate e condivise.
              </p>

              <div className="audience-switch" aria-label="Scegli il tuo percorso">
                <button
                  className={audience === "family" ? "active" : ""}
                  onClick={() => setAudience("family")}
                  aria-pressed={audience === "family"}
                >
                  Sono un familiare
                </button>
                <button
                  className={audience === "partner" ? "active" : ""}
                  onClick={() => setAudience("partner")}
                  aria-pressed={audience === "partner"}
                >
                  Sono un partner
                </button>
              </div>

              <div className="audience-copy" aria-live="polite">
                <span>{selectedAudience.label}</span>
                <h2>{selectedAudience.title}</h2>
                <p>{selectedAudience.body}</p>
              </div>

              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollToPilot(audience)}>
                  {selectedAudience.cta} <span aria-hidden="true">→</span>
                </button>
                <a className="text-link" href="#come-funziona">Guarda come funziona ↓</a>
              </div>
            </div>

            <div className="care-console" aria-label="Esempio di riepilogo giornaliero CareRelay">
              <div className="console-top">
                <div>
                  <span className="console-kicker">Mercoledì 29 luglio</span>
                  <strong>Buongiorno, Giulia</strong>
                </div>
                <span className="avatar">G</span>
              </div>
              <div className="calm-card">
                <span className="calm-icon">✓</span>
                <div><strong>Oggi è tutto coperto</strong><small>4 attività · 4 responsabili confermati</small></div>
              </div>
              <div className="timeline" aria-hidden="true">
                <div className="timeline-row done">
                  <time>08:30</time><i /><div><strong>Farmaco ricordato</strong><small>Confermato da Anna</small></div><b>Fatto</b>
                </div>
                <div className="timeline-row current">
                  <time>10:00</time><i /><div><strong>Parrucchiere</strong><small>Accompagna Giulia</small></div><b>Tra 45 min</b>
                </div>
                <div className="timeline-row">
                  <time>16:30</time><i /><div><strong>Spesa settimanale</strong><small>Responsabile: Marco</small></div><b>Confermato</b>
                </div>
              </div>
              <div className="whatsapp-note">
                <span className="wa-mark">W</span>
                <p><strong>Creato da un messaggio WhatsApp</strong><small>“Passo io per la spesa alle quattro e mezza.”</small></p>
              </div>
              <div className="floating-alert">
                <span>CR</span>
                <p><strong>Bracciale connesso</strong><small>Batteria 82% · ultimo contatto ora</small></p>
              </div>
            </div>
          </div>

          <div className="shell trust-row" aria-label="Principi del progetto">
            <div><span>01</span><strong>Conferma prima di agire</strong><small>Nessuna supposizione nascosta</small></div>
            <div><span>02</span><strong>Responsabilità leggibili</strong><small>Si vede chi fa cosa</small></div>
            <div><span>03</span><strong>Confini clinici espliciti</strong><small>Coordinare non è prescrivere</small></div>
          </div>
        </section>

        <section className="problem section">
          <div className="shell problem-grid">
            <div>
              <p className="eyebrow">Il problema, in breve</p>
              <h2>La cura quotidiana vive in troppi posti.</h2>
            </div>
            <p className="section-lead">
              Una nota vocale in chat, una visita sul calendario, un cambio turno detto a voce.
              La frammentazione crea lavoro invisibile proprio quando le energie sono meno.
            </p>
          </div>
          <div className="shell noise-board" aria-label="Dal disordine al coordinamento">
            <div className="noise-card chat-noise">
              <span>Chat famiglia · 28 messaggi</span>
              <p>Chi passa domani?</p><p>Forse io dopo le 17</p><p>La badante ha cambiato turno</p>
            </div>
            <div className="noise-card paper-noise">
              <span>Appunto</span><strong>Martedì<br />spesa + farmacia?<br /><s>ore 16</s> ore 18</strong>
            </div>
            <div className="noise-card calendar-noise">
              <span>LUG</span><strong>16</strong><p>Controllo?</p><small>Chi accompagna?</small>
            </div>
            <div className="relay-card">
              <span className="relay-plus">+</span>
              <p>CareRelay trasforma il rumore in <strong>attività confermate e responsabilità chiare.</strong></p>
            </div>
          </div>
        </section>

        <section className="how section" id="come-funziona">
          <div className="shell section-head">
            <div><p className="eyebrow">Come funziona</p><h2>Dalla voce all’azione, in tre passaggi.</h2></div>
            <p>Il sistema propone. Una persona controlla. Solo dopo la conferma l’attività entra nel riepilogo condiviso.</p>
          </div>
          <div className="shell steps">
            <article><span>01</span><div className="step-symbol">“ ”</div><h3>Parla come fai già</h3><p>Invia testo o nota vocale da WhatsApp oppure dall’app CareRelay.</p></article>
            <article className="step-featured"><span>02</span><div className="step-symbol">◎</div><h3>Controlla la proposta</h3><p>Data, ora e responsabile sono sempre modificabili prima della conferma.</p></article>
            <article><span>03</span><div className="step-symbol">✓</div><h3>Allinea il cerchio</h3><p>La nuova attività appare solo alle persone autorizzate, con una traccia chiara.</p></article>
          </div>

          <div className="shell demo">
            <div className="demo-intro">
              <p className="eyebrow">Provalo in 20 secondi</p>
              <h3>Segui un messaggio mentre diventa un’attività.</h3>
              <p>Questa demo mostra il principio chiave: nessuna automazione invisibile.</p>
              <div className="demo-tabs" role="tablist" aria-label="Fasi della demo">
                {["Messaggio", "Proposta", "Confermata"].map((label, index) => (
                  <button
                    key={label}
                    role="tab"
                    aria-selected={demoStep === index}
                    className={demoStep === index ? "active" : ""}
                    onClick={() => setDemoStep(index as DemoStep)}
                  >
                    <span>{index + 1}</span>{label}
                  </button>
                ))}
              </div>
            </div>
            <div className="demo-stage" role="tabpanel" aria-live="polite">
              {demoStep === 0 && (
                <div className="demo-message">
                  <div className="voice-line"><button aria-label="Riproduzione dimostrativa">▶</button><i /><i /><i /><i /><i /><i /><span>0:08</span></div>
                  <p>“Domani porto mamma dal parrucchiere alle dieci.”</p>
                  <small>Messaggio ricevuto da Giulia · 09:32</small>
                </div>
              )}
              {demoStep === 1 && (
                <div className="proposal-card">
                  <span>Proposta CareRelay · da controllare</span>
                  <label>Attività<strong>Parrucchiere</strong></label>
                  <div><label>Quando<strong>Domani, 10:00</strong></label><label>Responsabile<strong>Giulia</strong></label></div>
                  <button onClick={() => setDemoStep(2)}>Conferma attività →</button>
                </div>
              )}
              {demoStep === 2 && (
                <div className="confirmed-card">
                  <span className="big-check">✓</span>
                  <p>Attività confermata</p>
                  <strong>Parrucchiere · domani, 10:00</strong>
                  <small>Giulia accompagna Anna · visibile al cerchio familiare</small>
                  <button onClick={() => setDemoStep(0)}>Ricomincia la demo</button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ecosystem section">
          <div className="shell section-head">
            <div><p className="eyebrow">Un ecosistema, non tre strumenti</p><h2>Ogni canale fa la cosa giusta.</h2></div>
            <p>Il bracciale protegge la continuità, l’app rende tutto leggibile e WhatsApp riduce l’attrito nelle azioni quotidiane.</p>
          </div>
          <div className="shell ecosystem-grid">
            <article className="device-card bracelet-card">
              <div className="bracelet" aria-hidden="true"><span>SOS</span></div>
              <div><span className="card-kicker">Bracciale 4G</span><h3>Sempre vicino alla persona</h3><p>SOS, rilevamento cadute, localizzazione e stato del dispositivo.</p></div>
            </article>
            <article className="device-card app-card">
              <div className="mini-app" aria-hidden="true"><span>Oggi</span><b>3 / 3</b><i /><i /><i /></div>
              <div><span className="card-kicker">App CareRelay</span><h3>Il quadro completo, senza rumore</h3><p>Attività, avvisi, ruoli e storico in una vista pensata per essere capita al volo.</p></div>
            </article>
            <article className="device-card wa-card">
              <div className="wa-bubbles" aria-hidden="true"><span>“Passo io alle 17”</span><b>Attività pronta ✓</b></div>
              <div><span className="card-kicker">WhatsApp</span><h3>Azioni rapide, abitudini intatte</h3><p>Testo e voce diventano proposte strutturate, sempre da confermare.</p></div>
            </article>
          </div>
        </section>

        <section className="safety section" id="sicurezza">
          <div className="shell safety-grid">
            <div className="safety-copy">
              <p className="eyebrow eyebrow-light">Confini chiari</p>
              <h2>Utile, senza fingere di essere un medico.</h2>
              <p>CareRelay cresce per livelli. Ogni funzione entra solo quando tecnologia, responsabilità e supervisione sono adeguate al rischio.</p>
              <div className="safety-note"><span>!</span><p><strong>In caso di emergenza</strong>Il concept non sostituisce il 112/118 e oggi non gestisce allarmi reali.</p></div>
            </div>
            <div className="scope-list">
              <article><span className="scope-now">Nel pilot</span><h3>Coordinamento quotidiano</h3><p>Attività, promemoria inseriti dalla famiglia, conferme e riepiloghi.</p><small>Disponibile solo nel perimetro non medico del pilot</small></article>
              <article><span className="scope-gated">Con prerequisiti</span><h3>Sintomi e farmaci</h3><p>Raccolta guidata e passaggio di mano, senza prescrizioni o interpretazioni cliniche.</p><small>Richiede moduli conformi e supervisione qualificata</small></article>
              <article><span className="scope-future">Futuro partner</span><h3>Emergenze 24/7</h3><p>Instradamento degli allarmi a una centrale con operatori, procedure e ridondanza.</p><small>Richiede SLA e partner operativo qualificato</small></article>
            </div>
          </div>
          <div className="shell security-principles">
            <div><span>01</span><strong>Dati minimi</strong><small>Solo ciò che serve al servizio dichiarato</small></div>
            <div><span>02</span><strong>Accessi per ruolo</strong><small>Inviti, revoche e privilegi leggibili</small></div>
            <div><span>03</span><strong>Traccia verificabile</strong><small>Proposte, conferme e modifiche registrate</small></div>
            <div><span>04</span><strong>DPIA e audit</strong><small>Prima dei trattamenti ad alto rischio</small></div>
          </div>
        </section>

        <section className="pricing section" id="piani">
          <div className="shell section-head pricing-head">
            <div><p className="eyebrow">Ipotesi di piani</p><h2>Un punto di partenza da validare insieme.</h2></div>
            <div className="billing-toggle" aria-label="Visualizza prezzo mensile o annuale">
              <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>Mensile</button>
              <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>Annuale <span>-10%</span></button>
            </div>
          </div>
          <div className="shell plan-grid">
            {plans.map((plan) => {
              const monthly = annual ? plan.monthly * 0.9 : plan.monthly;
              return (
                <article key={plan.name} className={plan.featured ? "plan featured-plan" : "plan"}>
                  {plan.featured && <span className="plan-label">Più completo per le famiglie</span>}
                  <div className="plan-top"><span>{plan.name}</span><small>{plan.note}</small></div>
                  <div className="plan-price"><strong>{monthly.toFixed(2).replace(".", ",")} €</strong><small>{priceLabel}</small></div>
                  <p><b>{plan.setup}</b> di attivazione ipotizzata</p>
                  <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
                  <button className="button button-outline" onClick={() => scrollToPilot(plan.name === "Care H24" ? "partner" : "family")}>
                    Valuta questo piano
                  </button>
                </article>
              );
            })}
          </div>
          <p className="shell pricing-disclaimer">
            <strong>Non sono offerte commerciali.</strong> Prezzi, IVA, dispositivo, coperture e condizioni sono ipotesi da verificare. Care H24 dipende da un partner operativo qualificato.
          </p>
        </section>

        <section className="roadmap section">
          <div className="shell roadmap-grid">
            <div className="roadmap-copy"><p className="eyebrow">Roadmap responsabile</p><h2>Prima la prova. Poi la promessa.</h2><p>Ogni fase ha un cancello: si prosegue solo quando uso, sicurezza e sostenibilità sono dimostrati.</p></div>
            <ol className="roadmap-list">
              <li className="current"><span>1</span><div><small>Ora</small><h3>Pilot non medico</h3><p>10–30 famiglie, coordinamento e supporto umano.</p></div></li>
              <li><span>2</span><div><small>Da progettare</small><h3>Partner e infrastruttura</h3><p>DPIA, sicurezza, contratti e procedure.</p></div></li>
              <li><span>3</span><div><small>Solo con evidenze</small><h3>Moduli qualificati</h3><p>Validazione, supervisione e conformità.</p></div></li>
              <li><span>4</span><div><small>Obiettivo futuro</small><h3>Servizio 24/7</h3><p>Centrale partner, SLA e ridondanza.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="faq section">
          <div className="shell faq-grid">
            <div><p className="eyebrow">Domande frequenti</p><h2>Le risposte importanti, prima di iniziare.</h2></div>
            <div className="accordion">
              {faqs.map((item, index) => (
                <article key={item.q} className={openFaq === index ? "open" : ""}>
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                    <span>{item.q}</span><i>{openFaq === index ? "−" : "+"}</i>
                  </button>
                  {openFaq === index && <p>{item.a}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pilot section" id="pilot">
          <div className="pilot-glow" aria-hidden="true" />
          <div className="shell pilot-grid">
            <div className="pilot-copy">
              <p className="eyebrow eyebrow-light">Partecipa alla validazione</p>
              <h2>Aiutaci a capire se CareRelay può fare davvero la differenza.</h2>
              <p>Cerchiamo famiglie, partner tecnici e operativi, finanziatori e acceleratori per verificare bisogno, fattibilità e sostenibilità.</p>
              <div className="pilot-points"><span>Famiglie e futuri utenti</span><span>Partner tecnici e operativi</span><span>Finanziatori e acceleratori</span></div>
              <div className="no-send-note"><strong>Trasparenza sul contatto</strong><p>Il canale di invio non è ancora configurato. Il modulo prepara un riepilogo da copiare: nessun dato viene inviato o salvato.</p></div>
            </div>

            {!brief ? (
              <form className="interest-form" onSubmit={submitInterest}>
                <div className="form-head"><span>Manifestazione d’interesse</span><small>Passaggio 1 di 1</small></div>
                <div className="form-row">
                  <label>Nome<input name="name" autoComplete="name" required minLength={2} placeholder="Come ti chiami?" /></label>
                  <label>Email<input name="email" type="email" autoComplete="email" required placeholder="nome@esempio.it" /></label>
                </div>
                <label>Vorrei partecipare come
                  <select name="role" value={audience === "family" ? "Famiglia / futuro utente" : "Partner tecnico o operativo"} onChange={(e) => setAudience(e.target.value.startsWith("Famiglia") ? "family" : "partner")}>
                    <option>Famiglia / futuro utente</option>
                    <option>Partner tecnico o operativo</option>
                    <option>Finanziatore / acceleratore</option>
                  </select>
                </label>
                <label>Organizzazione <span>facoltativa</span><input name="organization" autoComplete="organization" /></label>
                <label>Come vorresti contribuire? <span>facoltativo</span><textarea name="message" rows={4} maxLength={900} /></label>
                <label className="consent"><input type="checkbox" required /><span>Ho compreso che CareRelay è un concept e non inserirò dati sanitari nel modulo.</span></label>
                <button className="button button-primary button-full" type="submit">Prepara il riepilogo →</button>
              </form>
            ) : (
              <div className="brief-card" aria-live="polite">
                <span className="brief-check">✓</span>
                <p className="eyebrow">Riepilogo pronto</p>
                <h3>La tua richiesta è pronta da condividere.</h3>
                <pre>{brief}</pre>
                <button className="button button-primary button-full" onClick={copyBrief}>{copied ? "Copiato negli appunti ✓" : "Copia il riepilogo"}</button>
                <button className="text-button" onClick={() => setBrief("")}>Modifica i dati</button>
                <small>Nessun dato è stato inviato o salvato da CareRelay.</small>
              </div>
            )}
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#inizio"><span className="brand-mark">C</span><span>CareRelay</span></a><p>La cura, coordinata.</p></div>
          <div className="footer-note"><strong>Concept dimostrativo — non è un servizio medico attivo.</strong><p>Non usare questa pagina per richieste di salute o emergenze.</p></div>
          <div className="footer-links"><a href="#come-funziona">Come funziona</a><a href="#sicurezza">Sicurezza</a><a href="#pilot">Pilot</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 CareRelay concept</span><span>Progettato per una validazione responsabile</span></div>
      </footer>
    </main>
  );
}
