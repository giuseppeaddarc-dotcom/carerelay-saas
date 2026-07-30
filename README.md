# CareGive X

CareGive X è un concept SaaS mobile-first per coordinare attività, appuntamenti,
promemoria e responsabilità familiari. Può essere usato dall’app oppure
parlando con un assistente AI su WhatsApp, senza cambiare le abitudini della
famiglia.

Come integrazione opzionale, CareGive X può raccogliere da dispositivi
compatibili battito, ossigenazione, cadute rilevate e altri parametri
disponibili, inviando alert ai contatti autorizzati quando viene superata una
soglia configurata.

## Sito pubblico

<https://giuseppeaddarc-dotcom.github.io/carerelay-saas/>

## Riferimento CareRelay conservato

Il concept CareRelay resta separato e consultabile qui:

- sito: <https://giuseppeaddarc-dotcom.github.io/Carerelay/>
- repository: <https://github.com/giuseppeaddarc-dotcom/Carerelay>

## Sviluppo locale

Richiede Node.js 22 o successivo e pnpm.

```bash
pnpm install
pnpm dev
```

## Verifica

```bash
pnpm run build
pnpm run build:pages
```

Il workflow in `.github/workflows/deploy-pages.yml` pubblica automaticamente la
versione statica su GitHub Pages dopo ogni aggiornamento del branch `main`.

## Nota

CareGive X è un software in validazione. Non formula diagnosi e non sostituisce
un medico, un dispositivo medico prescritto o un servizio di emergenza. La
disponibilità e la precisione dei parametri dipendono dal dispositivo collegato.
L’assistente usa solo le informazioni autorizzate e richiede conferma prima
delle modifiche rilevanti.
