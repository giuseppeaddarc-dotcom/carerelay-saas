"use client";

import { FormEvent, useState } from "react";

type Audience = "family" | "partner";
type DemoStep = 0 | 1 | 2;

const audienceCopy = {
  family: {
    label: "Per la mia famiglia",
    title: "Il tuo smartwatch diventa più utile a tutta la famiglia.",
    body: "Collega un dispositivo compatibile, riunisci i dati disponibili e condividi solo ciò che serve in un riepilogo semplice.",
    cta: "Richiedi accesso alla beta",
  },
  partner: {
    label: "Per la mia organizzazione",
    title: "Una base software chiara per servizi di assistenza connessa.",
    body: "Valuta connettori, permessi, report e flussi familiari senza dipendere dalla vendita di un dispositivo proprietario.",
    cta: "Valuta un’integrazione",
  },
};

const wearableProfiles = [
  {
    level: "01 · Dati essenziali",
    name: "Fitness tracker e orologi base",
    data: ["Passi e distanza", "Minuti attivi", "Calorie stimate", "Durata del sonno"],
    report: "Routine quotidiana, movimento e regolarità del riposo.",
  },
  {
    level: "02 · Trend di benessere",
    name: "Smartwatch con monitoraggio continuo",
    data: ["Frequenza cardiaca", "Frequenza a riposo", "Fasi del sonno", "HRV e respirazione*"],
    report: "Andamento del riposo, recupero e variazioni rispetto alla propria routine.",
  },
  {
    level: "03 · Sensori avanzati",
    name: "Dispositivi con sensori aggiuntivi",
    data: ["Ossigenazione stimata*", "Temperatura cutanea*", "ECG o eventi di ritmo*", "Cadute e posizione*"],
    report: "Segnali ed eventi disponibili, organizzati per essere condivisi con chi è autorizzato.",
  },
];

const faqs = [
  {
    q: "CareRelay fa diagnosi o sostituisce il medico?",
    a: "No. CareRelay organizza dati e trend di benessere condivisi dal dispositivo. Non formula diagnosi, non prescrive e non sostituisce professionisti o servizi di emergenza.",
  },
  {
    q: "Funziona con qualunque smartwatch?",
    a: "CareRelay è pensato per i dispositivi che condividono dati attraverso servizi salute e connettori supportati. La compatibilità effettiva dipende da modello, telefono, permessi, Paese e dati esposti dal produttore.",
  },
  {
    q: "Perché i report cambiano da un dispositivo all’altro?",
    a: "Ogni modello ha sensori e autorizzazioni differenti. CareRelay mostra solo i dati realmente disponibili e indica sempre la loro origine, senza riempire i vuoti con stime proprie.",
  },
  {
    q: "Cosa comprende il piano da 9,99 €?",
    a: "Un solo spazio famiglia, profili invitati, riepiloghi, attività condivise e collegamento ai dispositivi compatibili. Lo smartwatch o fitness tracker non è incluso.",
  },
];

export default function Home() {
  const [audience, setAudience] = useState<Audience>("family");
  const [demoStep, setDemoStep] = useState<DemoStep>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedAudience = audienceCopy[audience];

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
        "Richiesta accesso beta — CareRelay",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Profilo: ${role}`,
        `Organizzazione: ${organization || "Non indicata"}`,
        "",
        message || "Vorrei verificare la compatibilità del mio dispositivo e ricevere accesso alla beta CareRelay.",
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
            <a href="#compatibilita" onClick={() => setMenuOpen(false)}>Compatibilità</a>
            <a href="#abbonamento" onClick={() => setMenuOpen(false)}>9,99 €/mese</a>
            <button className="button button-dark button-small" onClick={() => scrollToPilot()}>
              Richiedi accesso
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
              <p className="eyebrow"><span>●</span> Il software per il wearable che hai già</p>
              <h1>Il tuo orologio raccoglie dati. <em>CareRelay li rende chiari.</em></h1>
              <p className="hero-lead">
                Collega uno smartwatch o fitness tracker compatibile, riunisci attività,
                benessere e coordinamento familiare in un’unica app semplice.
              </p>
              <div className="hero-offer" aria-label="Piano unico CareRelay">
                <strong>9,99 €</strong>
                <span>al mese<br /><small>Un solo piano · nessun hardware da comprare</small></span>
              </div>

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
                <p><strong>Wearable sincronizzato</strong><small>4 categorie di dati disponibili · ora</small></p>
              </div>
            </div>
          </div>

          <div className="shell trust-row" aria-label="Principi del progetto">
            <div><span>01</span><strong>Usa il dispositivo che hai</strong><small>Se compatibile, non devi comprarne uno nuovo</small></div>
            <div><span>02</span><strong>Report proporzionati ai sensori</strong><small>Più dati disponibili, più ricco il riepilogo</small></div>
            <div><span>03</span><strong>Nessuna diagnosi automatica</strong><small>Dati organizzati, limiti sempre visibili</small></div>
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
            <article><span>01</span><div className="step-symbol">⌚</div><h3>Collega il tuo wearable</h3><p>CareRelay importa solo le categorie di dati autorizzate e supportate dal dispositivo.</p></article>
            <article className="step-featured"><span>02</span><div className="step-symbol">◎</div><h3>Ricevi un quadro semplice</h3><p>Attività, sonno e trend disponibili vengono ordinati in un riepilogo leggibile.</p></article>
            <article><span>03</span><div className="step-symbol">✓</div><h3>Condividi con il tuo cerchio</h3><p>Decidi chi può vedere i report e coordina le attività anche da WhatsApp.</p></article>
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

        <section className="compatibility section" id="compatibilita">
          <div className="shell section-head">
            <div><p className="eyebrow">Compatibilità leggibile</p><h2>Più sensori disponibili, più ricco è il report.</h2></div>
            <p>Non tutti i dispositivi raccolgono gli stessi dati. CareRelay riconosce ciò che il wearable può condividere e adatta il riepilogo senza inventare informazioni mancanti.</p>
          </div>
          <div className="shell connect-strip">
            <div className="wearable-stack" aria-hidden="true"><span>⌚</span><span>◉</span><span>▣</span></div>
            <div><small>1 · COLLEGA</small><strong>Smartwatch o fitness tracker compatibile</strong></div>
            <i>→</i>
            <div><small>2 · AUTORIZZA</small><strong>Scegli quali dati condividere</strong></div>
            <i>→</i>
            <div><small>3 · LEGGI</small><strong>Un report adatto al tuo dispositivo</strong></div>
          </div>
          <div className="shell report-grid">
            {wearableProfiles.map((profile) => (
              <article className="report-card" key={profile.level}>
                <span>{profile.level}</span>
                <h3>{profile.name}</h3>
                <div className="data-tags">{profile.data.map((item) => <small key={item}>{item}</small>)}</div>
                <div className="report-output"><b>Report CareRelay</b><p>{profile.report}</p></div>
              </article>
            ))}
          </div>
          <p className="shell compatibility-note">* Disponibilità variabile in base a modello, sistema operativo, Paese, permessi e dati resi accessibili dal produttore. CareRelay non trasforma questi valori in diagnosi.</p>
        </section>

        <section className="safety section" id="sicurezza">
          <div className="shell safety-grid">
            <div className="safety-copy">
              <p className="eyebrow eyebrow-light">Confini chiari</p>
              <h2>Dati utili, senza conclusioni affrettate.</h2>
              <p>CareRelay rende più leggibili dati e trend già prodotti dal dispositivo. Mostra la fonte, segnala i limiti e lascia le decisioni sanitarie alle persone qualificate.</p>
              <div className="safety-note"><span>!</span><p><strong>In caso di emergenza</strong>CareRelay non è un servizio di monitoraggio e non sostituisce il 112/118.</p></div>
            </div>
            <div className="scope-list">
              <article><span className="scope-now">CareRelay Core</span><h3>Riepiloghi e coordinamento</h3><p>Trend disponibili, attività, note, conferme e condivisione per ruolo.</p><small>Il cuore del servizio SaaS da 9,99 € al mese</small></article>
              <article><span className="scope-gated">Dal dispositivo</span><h3>Segnali ed eventi supportati</h3><p>CareRelay può mostrare solo ciò che il wearable e il relativo servizio rendono accessibile.</p><small>Nessuna stima aggiunta quando il dato non esiste</small></article>
              <article><span className="scope-future">Fuori perimetro</span><h3>Diagnosi ed emergenze</h3><p>Nessuna diagnosi, modifica terapeutica o promessa di intervento automatico.</p><small>Per la salute servono professionisti e servizi qualificati</small></article>
            </div>
          </div>
          <div className="shell security-principles">
            <div><span>01</span><strong>Dati minimi</strong><small>Solo ciò che serve al servizio dichiarato</small></div>
            <div><span>02</span><strong>Accessi per ruolo</strong><small>Inviti, revoche e privilegi leggibili</small></div>
            <div><span>03</span><strong>Traccia verificabile</strong><small>Proposte, conferme e modifiche registrate</small></div>
            <div><span>04</span><strong>DPIA e audit</strong><small>Prima dei trattamenti ad alto rischio</small></div>
          </div>
        </section>

        <section className="pricing section" id="abbonamento">
          <div className="shell single-plan-layout">
            <div className="single-plan-copy">
              <p className="eyebrow">Un solo abbonamento</p>
              <h2>Semplice da capire. Facile da iniziare.</h2>
              <p>Nessun dispositivo proprietario, nessun costo di attivazione e nessun livello premium che nasconde le funzioni utili.</p>
              <div className="not-included"><span>⌚</span><p><strong>Usa il tuo wearable compatibile</strong><small>Smartwatch e fitness tracker non sono venduti né inclusi da CareRelay.</small></p></div>
            </div>
            <article className="single-plan">
              <span className="plan-label">Piano unico</span>
              <div className="single-price"><strong>9,99 €</strong><span>al mese<small>per spazio famiglia</small></span></div>
              <ul>
                <li><span>✓</span>Collegamento ai dispositivi compatibili</li>
                <li><span>✓</span>Report adattati ai dati disponibili</li>
                <li><span>✓</span>Attività e promemoria condivisi</li>
                <li><span>✓</span>Profili familiari con permessi distinti</li>
                <li><span>✓</span>Riepiloghi semplici anche da smartphone</li>
                <li><span>✓</span>Nessuna pubblicità e nessuna vendita hardware</li>
              </ul>
              <button className="button button-primary button-full" onClick={() => scrollToPilot("family")}>Richiedi accesso alla beta →</button>
              <small className="plan-fineprint">Disponibilità in fase di validazione. Prima dell’attivazione verrà verificata la compatibilità del dispositivo.</small>
            </article>
          </div>
        </section>

        <section className="roadmap section">
          <div className="shell roadmap-grid">
            <div className="roadmap-copy"><p className="eyebrow">Roadmap SaaS</p><h2>Prima l’esperienza. Poi più integrazioni.</h2><p>CareRelay cresce aggiungendo connettori e qualità del dato, senza obbligare le famiglie a cambiare dispositivo.</p></div>
            <ol className="roadmap-list">
              <li className="current"><span>1</span><div><small>Ora</small><h3>Beta mobile-first</h3><p>Collegamento, report essenziali e coordinamento familiare.</p></div></li>
              <li><span>2</span><div><small>Prossimo</small><h3>Più connettori</h3><p>Copertura progressiva dei principali servizi salute.</p></div></li>
              <li><span>3</span><div><small>Con consenso</small><h3>Report condivisibili</h3><p>Esportazione chiara per caregiver e professionisti scelti.</p></div></li>
              <li><span>4</span><div><small>Solo se qualificato</small><h3>Moduli specialistici</h3><p>Funzioni separate, validate e con responsabilità esplicite.</p></div></li>
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
              <p className="eyebrow eyebrow-light">Accesso anticipato</p>
              <h2>Prova il piano unico con il wearable che usi già.</h2>
              <p>Stiamo selezionando le prime famiglie e i primi partner per verificare compatibilità, chiarezza dei report ed esperienza quotidiana.</p>
              <div className="pilot-points"><span>9,99 € al mese al lancio</span><span>Nessun hardware da acquistare</span><span>Compatibilità verificata prima dell’accesso</span></div>
              <div className="no-send-note"><strong>Trasparenza sul contatto</strong><p>Il canale di invio non è ancora configurato. Il modulo prepara un riepilogo da copiare: nessun dato viene inviato o salvato.</p></div>
            </div>

            {!brief ? (
              <form className="interest-form" onSubmit={submitInterest}>
                <div className="form-head"><span>Richiedi accesso alla beta</span><small>Richiede meno di 1 minuto</small></div>
                <div className="form-row">
                  <label>Nome<input name="name" autoComplete="name" required minLength={2} placeholder="Come ti chiami?" /></label>
                  <label>Email<input name="email" type="email" autoComplete="email" required placeholder="nome@esempio.it" /></label>
                </div>
                <label>Vorrei partecipare come
                  <select name="role" value={audience === "family" ? "Famiglia / futuro utente" : "Partner tecnico o operativo"} onChange={(e) => setAudience(e.target.value.startsWith("Famiglia") ? "family" : "partner")}>
                    <option>Famiglia / futuro utente</option>
                    <option>Partner tecnico o operativo</option>
                  </select>
                </label>
                {audience === "partner" && <label>Organizzazione <span>facoltativa</span><input name="organization" autoComplete="organization" /></label>}
                <label className="consent"><input type="checkbox" required /><span>Ho compreso che CareRelay è un concept e non inserirò dati sanitari nel modulo.</span></label>
                <button className="button button-primary button-full" type="submit">Prepara la richiesta →</button>
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

      <div className="mobile-cta" aria-label="Piano CareRelay">
        <div><strong>9,99 €</strong><small>al mese</small></div>
        <button onClick={() => scrollToPilot("family")}>Richiedi accesso</button>
      </div>

      <footer>
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#inizio"><span className="brand-mark">C</span><span>CareRelay</span></a><p>La cura, coordinata.</p></div>
          <div className="footer-note"><strong>Software in fase di validazione — non è un dispositivo medico.</strong><p>Non usare CareRelay per diagnosi, decisioni terapeutiche o richieste di emergenza.</p></div>
          <div className="footer-links"><a href="#come-funziona">Come funziona</a><a href="#sicurezza">Sicurezza</a><a href="#pilot">Pilot</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 CareRelay concept</span><span>Progettato per una validazione responsabile</span></div>
      </footer>
    </main>
  );
}
