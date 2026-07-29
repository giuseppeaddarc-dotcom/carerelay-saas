"use client";

import { FormEvent, useState } from "react";

type DemoStep = 0 | 1 | 2;

const managementFeatures = [
  {
    icon: "✓",
    title: "Attività e responsabilità",
    body: "Chi fa cosa, entro quando e cosa è ancora da confermare.",
  },
  {
    icon: "○",
    title: "Appuntamenti e scadenze",
    body: "Visite, commissioni e impegni riuniti in un calendario condiviso.",
  },
  {
    icon: "↻",
    title: "Promemoria quotidiani",
    body: "Routine e promemoria inseriti dalla famiglia, con conferme leggibili.",
  },
  {
    icon: "≡",
    title: "Note e informazioni",
    body: "Indicazioni pratiche e aggiornamenti ordinati, senza cercarli tra decine di chat.",
  },
  {
    icon: "◎",
    title: "Cerchio familiare",
    body: "Ruoli, permessi e accessi diversi per familiari e persone di supporto.",
  },
  {
    icon: "↗",
    title: "Riepiloghi chiari",
    body: "Una vista semplice di ciò che è fatto, ciò che manca e chi se ne occupa.",
  },
];

const faqs = [
  {
    q: "Devo aprire l’app per usare CareRelay?",
    a: "No. Le operazioni quotidiane possono essere svolte anche parlando o scrivendo all’assistente CareRelay su WhatsApp. L’app resta disponibile quando vuoi una vista completa.",
  },
  {
    q: "L’assistente AI può modificare le attività da solo?",
    a: "No. L’assistente legge solo le informazioni autorizzate e prepara proposte. Le modifiche importanti richiedono conferma e lasciano una traccia leggibile.",
  },
  {
    q: "Serve uno smartwatch?",
    a: "No. CareRelay funziona come servizio di coordinamento anche senza wearable. Se colleghi un dispositivo compatibile, può aggiungere al quadro familiare i parametri che quel modello rende disponibili.",
  },
  {
    q: "Quali parametri può monitorare?",
    a: "Dipende dal dispositivo collegato. CareRelay può raccogliere battito, ossigenazione, cadute rilevate e altri segnali disponibili, confrontarli con soglie configurate e inviare alert ai contatti autorizzati. Gli alert sono informativi: non sono diagnosi e non sostituiscono i servizi di emergenza.",
  },
  {
    q: "CareRelay dà consigli medici?",
    a: "No. Organizza informazioni, attività e promemoria inseriti dalle persone autorizzate. Non formula diagnosi, non cambia terapie e non sostituisce medici o servizi di emergenza.",
  },
  {
    q: "Cosa comprende l’abbonamento?",
    a: "Lo spazio famiglia, l’assistente AI su WhatsApp, l’app CareRelay, attività condivise, appuntamenti, promemoria, note, riepiloghi, ruoli, storico, alert e integrazioni compatibili.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoStep, setDemoStep] = useState<DemoStep>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  function scrollToPilot() {
    document.querySelector("#pilot")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const role = String(form.get("role") || "");
    setBrief(
      [
        "Richiesta accesso beta — CareRelay",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Profilo: ${role}`,
        "",
        "Vorrei provare CareRelay per coordinare attività e responsabilità della mia famiglia.",
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
        <span>Non è un servizio medico o di emergenza</span>
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
            <a href="#assistente" onClick={() => setMenuOpen(false)}>Assistente AI</a>
            <a href="#cerchio" onClick={() => setMenuOpen(false)}>Cerchio di cura</a>
            <a href="#fiducia" onClick={() => setMenuOpen(false)}>Sicurezza</a>
            <a href="#abbonamento" onClick={() => setMenuOpen(false)}>Abbonamento</a>
            <button className="button button-dark button-small" onClick={scrollToPilot}>
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
              <div className="hero-brand-lockup">
                <span className="hero-brand-mark" aria-hidden="true">C</span>
                <div>
                  <span className="hero-brand-name">CareRelay</span>
                  <h1>La cura, <em>coordinata.</em></h1>
                </div>
              </div>
              <p className="hero-product-line">
                <span>App di coordinamento familiare</span>
                <b aria-hidden="true">+</b>
                <span>Assistente AI su WhatsApp</span>
              </p>
              <p className="hero-lead">
                <strong>CareRelay è l’app in abbonamento per coordinare l’assistenza di una persona cara.</strong>{" "}
                Riunisce attività, appuntamenti, promemoria, note e responsabilità, aiutando familiari,
                caregiver e professionisti a collaborare. Puoi usare l’app oppure parlare con
                l’assistente su WhatsApp, senza cambiare abitudini.
              </p>

              <div className="hero-actions">
                <button className="button button-primary" onClick={scrollToPilot}>
                  Richiedi accesso alla beta <span aria-hidden="true">→</span>
                </button>
                <a className="text-link" href="#come-funziona">Scopri come funziona ↓</a>
              </div>

              <div className="hero-boundary">
                <span aria-hidden="true">✓</span>
                <p><strong>Un aiuto concreto, con confini chiari.</strong> L’AI assiste e propone; le persone mantengono il controllo.</p>
              </div>
            </div>

            <div className="care-console whatsapp-console" aria-label="Esempio di conversazione con l’assistente CareRelay su WhatsApp">
              <div className="console-top">
                <div>
                  <span className="console-kicker">WhatsApp · assistente AI</span>
                  <strong>CareRelay</strong>
                </div>
                <span className="avatar">C</span>
              </div>
              <div className="chat-thread">
                <div className="chat-bubble chat-user">
                  <p>Cosa c’è da fare oggi per mamma?</p>
                  <small>09:14</small>
                </div>
                <div className="chat-bubble chat-assistant">
                  <span className="assistant-label">Riepilogo di oggi</span>
                  <strong>Ci sono 3 attività</strong>
                  <ul>
                    <li><b>10:00</b> Parrucchiere · Giulia</li>
                    <li><b>16:30</b> Spesa · Marco</li>
                    <li><b>20:00</b> Promemoria · da confermare</li>
                  </ul>
                </div>
                <div className="chat-bubble chat-user compact">
                  <p>Segna che passo io in farmacia alle 18.</p>
                  <small>09:15</small>
                </div>
                <div className="chat-bubble chat-assistant compact">
                  <span className="assistant-label">Bozza pronta</span>
                  <strong>Farmacia · oggi, 18:00</strong>
                  <small>Responsabile: tu</small>
                  <div className="chat-actions"><span>Conferma</span><span>Modifica</span></div>
                </div>
                <div className="chat-input-mock"><span>Scrivi o invia una nota vocale</span><b>●</b></div>
              </div>
              <div className="floating-alert">
                <span>AI</span>
                <p><strong>Non serve aprire l’app</strong><small>Chiedi, ascolta, aggiorna</small></p>
              </div>
            </div>
          </div>

          <div className="shell trust-row" aria-label="Principi di CareRelay">
            <div><span>01</span><strong>Tutto in un solo posto</strong><small>Attività, persone, note e scadenze</small></div>
            <div><span>02</span><strong>Anche direttamente su WhatsApp</strong><small>Testo, voce, domande e conferme</small></div>
            <div><span>03</span><strong>La famiglia resta al comando</strong><small>Ruoli, permessi e traccia delle modifiche</small></div>
          </div>
        </section>

        <section className="problem section">
          <div className="shell problem-grid">
            <div>
              <p className="eyebrow">Il problema</p>
              <h2>La cura quotidiana vive in troppi posti.</h2>
            </div>
            <p className="section-lead">
              Una nota vocale in chat, una visita sul calendario, una commissione detta a voce.
              CareRelay riduce il lavoro invisibile e rende chiaro chi fa cosa.
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
              <p>CareRelay trasforma il rumore in <strong>attività confermate, responsabilità chiare e risposte immediate.</strong></p>
            </div>
          </div>
        </section>

        <section className="how section" id="come-funziona">
          <div className="shell section-head">
            <div><p className="eyebrow">Come funziona</p><h2>Dalla voce all’azione.</h2></div>
            <p>Parla come fai già. L’assistente organizza la richiesta, chiede conferma e aggiorna solo le persone autorizzate.</p>
          </div>
          <div className="shell steps">
            <article>
              <span>01</span><div className="step-symbol">◖</div>
              <h3>Scrivi o parla</h3>
              <p>Usa WhatsApp oppure l’app CareRelay. Anche una semplice nota vocale è sufficiente.</p>
            </article>
            <article className="step-featured">
              <span>02</span><div className="step-symbol">✦</div>
              <h3>L’AI ti aiuta</h3>
              <p>Legge le attività autorizzate, risponde alle domande e prepara nuovi task o aggiornamenti.</p>
            </article>
            <article>
              <span>03</span><div className="step-symbol">✓</div>
              <h3>La famiglia è allineata</h3>
              <p>Dopo la conferma, responsabilità, orari e promemoria diventano chiari per tutti.</p>
            </article>
          </div>

          <div className="shell demo">
            <div className="demo-intro">
              <p className="eyebrow">Provalo in 20 secondi</p>
              <h3>Non devi cercare. Puoi semplicemente chiedere.</h3>
              <p>L’assistente usa solo le informazioni del tuo spazio famiglia e distingue sempre risposte, proposte e conferme.</p>
              <div className="demo-tabs" role="tablist" aria-label="Fasi della demo">
                {["Domanda", "Risposta", "Aggiornamento"].map((label, index) => (
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
                  <div className="voice-line"><button aria-label="Riproduzione dimostrativa">▶</button><i /><i /><i /><i /><i /><i /><span>0:06</span></div>
                  <p>“Chi accompagna mamma alla visita di domani?”</p>
                  <small>Domanda inviata su WhatsApp · 18:42</small>
                </div>
              )}
              {demoStep === 1 && (
                <div className="proposal-card answer-card">
                  <span>Risposta CareRelay</span>
                  <label>Appuntamento<strong>Visita · domani, 10:30</strong></label>
                  <div><label>Responsabile<strong>Non assegnato</strong></label><label>Stato<strong>Da organizzare</strong></label></div>
                  <button onClick={() => setDemoStep(2)}>Me ne occupo io →</button>
                </div>
              )}
              {demoStep === 2 && (
                <div className="confirmed-card">
                  <span className="big-check">✓</span>
                  <p>Responsabilità confermata</p>
                  <strong>Tu accompagni mamma</strong>
                  <small>Visita · domani, 10:30 · famiglia aggiornata</small>
                  <button onClick={() => setDemoStep(0)}>Ricomincia la demo</button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="assistant-section section" id="assistente">
          <div className="shell section-head">
            <div><p className="eyebrow">Assistente AI su WhatsApp</p><h2>Le risposte utili, nel momento in cui servono.</h2></div>
            <p>CareRelay non è una chat generica: conosce attività, ruoli e informazioni che la famiglia ha scelto di condividere.</p>
          </div>
          <div className="shell ask-grid">
            <article><span>Chiedi</span><strong>“Cosa c’è da fare oggi?”</strong><p>Ricevi un riepilogo ordinato per orario e priorità.</p></article>
            <article><span>Organizza</span><strong>“Aggiungi la visita di martedì.”</strong><p>L’AI prepara data, persona e promemoria prima della conferma.</p></article>
            <article><span>Controlla</span><strong>“Cosa non è ancora coperto?”</strong><p>Scopri attività senza responsabile o ancora da confermare.</p></article>
            <article><span>Aggiorna</span><strong>“Dì a tutti che arrivo alle 18.”</strong><p>Il messaggio diventa un aggiornamento chiaro per il cerchio autorizzato.</p></article>
          </div>
          <div className="shell assistant-boundary">
            <span>AI sotto controllo</span>
            <p>Legge solo ciò che sei autorizzato a vedere. Propone prima di modificare. Mostra sempre cosa è stato confermato e da chi.</p>
          </div>
        </section>

        <section className="management section" id="gestione">
          <div className="shell section-head">
            <div><p className="eyebrow">Un solo spazio famiglia</p><h2>Non solo task. Tutto il coordinamento quotidiano.</h2></div>
            <p>Una struttura semplice per gestire le cose pratiche senza trasformare la cura in un altro lavoro da amministrare.</p>
          </div>
          <div className="shell management-grid">
            {managementFeatures.map((feature) => (
              <article key={feature.title}>
                <span>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="circle-section section" id="cerchio">
          <div className="shell circle-layout">
            <div
              className="family-orbit"
              role="img"
              aria-label="Anna, persona assistita, al centro del cerchio formato da Giulia, Marco, Alina e la dottoressa Riva"
            >
              <span className="family-line line-one" aria-hidden="true" />
              <span className="family-line line-two" aria-hidden="true" />
              <span className="family-line line-three" aria-hidden="true" />
              <span className="family-line line-four" aria-hidden="true" />
              <div className="orbit-label label-one"><b>Giulia</b><small>Figlia · amministratrice</small></div>
              <div className="orbit-label label-two"><b>Marco</b><small>Figlio · familiare</small></div>
              <div className="orbit-label label-three"><b>Alina</b><small>Caregiver</small></div>
              <div className="orbit-label label-four"><b>Dott.ssa Riva</b><small>Professionista · accesso mirato</small></div>
              <div className="family-center"><span aria-hidden="true">♥</span><b>Anna</b><small>Persona assistita</small></div>
            </div>
            <div className="circle-copy">
              <p className="eyebrow">Il cerchio di cura</p>
              <h2>La persona che ami al centro. Tutti gli altri, coordinati.</h2>
              <p>
                Nell’esempio, Anna è al centro del suo cerchio. Familiari, caregiver e professionisti
                collaborano nello stesso spazio: ognuno vede ciò che gli serve, sa cosa deve fare
                e può aggiornare gli altri dall’app o tramite l’assistente su WhatsApp.
              </p>
              <div className="permission-list">
                <div><span>◎</span><p><strong>Un ruolo per ogni persona</strong><small>Accessi diversi per familiari, caregiver e professionisti.</small></p></div>
                <div><span>✓</span><p><strong>Responsabilità leggibili</strong><small>È sempre chiaro chi ha preso in carico o confermato un’attività.</small></p></div>
                <div><span>↻</span><p><strong>Aggiornamenti condivisi</strong><small>Le informazioni utili arrivano al cerchio senza rincorrere le chat.</small></p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="channels section">
          <div className="shell section-head">
            <div><p className="eyebrow">Usalo come preferisci</p><h2>WhatsApp per la velocità. L’app per vedere tutto.</h2></div>
            <p>CareRelay non obbliga la famiglia a imparare un nuovo strumento per ogni piccola operazione.</p>
          </div>
          <div className="shell channel-grid">
            <article className="channel-primary">
              <span>Canale quotidiano</span><h3>Assistente su WhatsApp</h3>
              <p>Domande, note vocali, nuovi task, conferme e riepiloghi senza aprire l’app.</p>
            </article>
            <article>
              <span>Vista completa</span><h3>App CareRelay</h3>
              <p>Calendario, ruoli, storico, documenti e quadro generale della famiglia.</p>
            </article>
            <article className="channel-optional">
              <span>Quando serve</span><h3>Monitoraggio opzionale</h3>
              <p>Wearable e servizi salute compatibili possono aggiungere segnali utili al quadro familiare, senza essere necessari per usare CareRelay.</p>
            </article>
          </div>
          <div className="shell vital-monitor">
            <div className="vital-copy">
              <p className="eyebrow">Da dispositivi compatibili</p>
              <h3>Un segnale in più, quando serve.</h3>
              <p>
                Se il dispositivo rende disponibili i dati, CareRelay può raccogliere battito,
                ossigenazione, cadute rilevate e altri parametri. Quando un valore supera una
                soglia configurata — o viene rilevata una caduta — invia un alert ai contatti autorizzati.
              </p>
            </div>
            <div className="vital-preview" aria-label="Esempio illustrativo di monitoraggio">
              <span className="preview-label">Esempio illustrativo</span>
              <div className="vital-readings">
                <div><span aria-hidden="true">♥</span><p>Battito<strong>72 bpm</strong><small>Entro la soglia</small></p></div>
                <div><span aria-hidden="true">O₂</span><p>Ossigenazione<strong>96%</strong><small>Ultimo dato ricevuto</small></p></div>
                <div><span aria-hidden="true">↘</span><p>Cadute<strong>Nessuna</strong><small>Nessun evento rilevato</small></p></div>
              </div>
              <div className="vital-alert"><span>!</span><p><strong>Alert ai familiari</strong><small>Battito oltre la soglia configurata · verifica richiesta</small></p></div>
            </div>
            <p className="vital-disclaimer">
              Disponibilità, precisione e frequenza dipendono da dispositivo, modello, permessi e connessione.
              Gli alert sono informativi: non garantiscono un rilevamento continuo e non sostituiscono
              dispositivi medici prescritti o i servizi 112/118.
            </p>
          </div>
        </section>

        <section className="safety section" id="fiducia">
          <div className="shell safety-grid">
            <div className="safety-copy">
              <p className="eyebrow eyebrow-light">Fiducia prima di tutto</p>
              <h2>La famiglia deve sentirsi aiutata, non osservata.</h2>
              <p>Ogni informazione ha una fonte, ogni persona ha permessi comprensibili e ogni modifica importante può essere ricostruita.</p>
              <div className="safety-note"><span>!</span><p><strong>Confine essenziale</strong>CareRelay non prende decisioni cliniche e non garantisce assistenza automatica in caso di alert o emergenza.</p></div>
            </div>
            <div className="scope-list">
              <article><span className="scope-now">CareRelay Core</span><h3>Coordina e semplifica</h3><p>Attività, appuntamenti, note, promemoria, responsabilità e riepiloghi.</p><small>La funzione centrale del servizio</small></article>
              <article><span className="scope-gated">Assistente controllato</span><h3>Risponde e propone</h3><p>L’AI usa solo il contesto autorizzato e chiede conferma prima delle modifiche rilevanti.</p><small>Mai automazioni invisibili</small></article>
              <article><span className="scope-future">Fuori perimetro</span><h3>Diagnosi ed emergenze</h3><p>Nessuna prescrizione, modifica terapeutica o promessa di intervento automatico.</p><small>Servono professionisti e servizi qualificati</small></article>
            </div>
          </div>
          <div className="shell security-principles">
            <div><span>01</span><strong>Dati minimi</strong><small>Solo ciò che serve al coordinamento</small></div>
            <div><span>02</span><strong>Accessi per ruolo</strong><small>Inviti e revoche comprensibili</small></div>
            <div><span>03</span><strong>Conferme visibili</strong><small>Chi ha proposto o modificato</small></div>
            <div><span>04</span><strong>Controllo della famiglia</strong><small>Correzione, esportazione e cancellazione</small></div>
          </div>
        </section>

        <section className="pricing section" id="abbonamento">
          <div className="shell single-plan-layout">
            <div className="single-plan-copy">
              <p className="eyebrow">Un solo abbonamento</p>
              <h2>Semplice da capire. Completo per la famiglia.</h2>
              <p>Un unico piano, senza livelli premium e senza hardware obbligatorio.</p>
              <div className="not-included"><span>∞</span><p><strong>Usa ciò che hai già</strong><small>WhatsApp, smartphone e integrazioni compatibili. Nessun dispositivo proprietario.</small></p></div>
            </div>
            <article className="single-plan">
              <span className="plan-label">Piano unico</span>
              <div className="single-price"><strong>5,99 €</strong><span>al mese<small>per spazio famiglia</small></span></div>
              <p className="plan-includes">Tutte le funzioni, senza livelli premium:</p>
              <div className="plan-feature-groups">
                <div>
                  <strong>Coordina</strong>
                  <ul>
                    <li><span>✓</span>Attività e responsabilità</li>
                    <li><span>✓</span>Appuntamenti e calendario</li>
                    <li><span>✓</span>Promemoria e routine</li>
                    <li><span>✓</span>Note e documenti condivisi</li>
                  </ul>
                </div>
                <div>
                  <strong>Assiste</strong>
                  <ul>
                    <li><span>✓</span>Assistente AI su WhatsApp</li>
                    <li><span>✓</span>Testo, voce e domande</li>
                    <li><span>✓</span>Riepiloghi e conferme</li>
                    <li><span>✓</span>App CareRelay completa</li>
                  </ul>
                </div>
                <div>
                  <strong>Connette e protegge</strong>
                  <ul>
                    <li><span>✓</span>Ruoli e permessi</li>
                    <li><span>✓</span>Storico delle modifiche</li>
                    <li><span>✓</span>Monitoraggio compatibile</li>
                    <li><span>✓</span>Alert e integrazioni opzionali</li>
                  </ul>
                </div>
              </div>
              <button className="button button-primary button-full" onClick={scrollToPilot}>Richiedi accesso alla beta →</button>
              <small className="plan-fineprint">Software in fase di validazione. Nessun hardware incluso o necessario.</small>
            </article>
          </div>
        </section>

        <section className="faq section">
          <div className="shell faq-grid">
            <div><p className="eyebrow">Domande frequenti</p><h2>Chiarezza prima di iniziare.</h2></div>
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
              <h2>Porta più chiarezza nella cura quotidiana.</h2>
              <p>Stiamo selezionando le prime famiglie per validare il coordinamento, l’utilità dell’assistente e la semplicità dell’esperienza.</p>
              <div className="pilot-points"><span>Piano unico</span><span>WhatsApp + app</span><span>Nessun hardware obbligatorio</span></div>
              <div className="no-send-note"><strong>Trasparenza sul contatto</strong><p>Il modulo prepara un riepilogo da copiare. Nessun dato viene inviato o salvato dal sito.</p></div>
            </div>

            {!brief ? (
              <form className="interest-form" onSubmit={submitInterest}>
                <div className="form-head"><span>Richiedi accesso alla beta</span><small>Meno di 1 minuto</small></div>
                <div className="form-row">
                  <label>Nome<input name="name" autoComplete="name" required minLength={2} placeholder="Come ti chiami?" /></label>
                  <label>Email<input name="email" type="email" autoComplete="email" required placeholder="nome@esempio.it" /></label>
                </div>
                <label>Vorrei partecipare come
                  <select name="role" defaultValue="Famiglia / futuro utente">
                    <option>Famiglia / futuro utente</option>
                    <option>Caregiver o assistente</option>
                    <option>Partner tecnico o operativo</option>
                  </select>
                </label>
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

      <footer>
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#inizio"><span className="brand-mark">C</span><span>CareRelay</span></a><p>La cura, coordinata.</p></div>
          <div className="footer-note"><strong>Software in fase di validazione — non è un dispositivo medico.</strong><p>Non usare CareRelay per diagnosi, decisioni terapeutiche o richieste di emergenza.</p></div>
          <div className="footer-links"><a href="#come-funziona">Come funziona</a><a href="#assistente">Assistente AI</a><a href="#pilot">Accesso beta</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 CareRelay concept</span><span>Progettato per aiutare le famiglie, con responsabilità</span></div>
      </footer>
    </main>
  );
}
