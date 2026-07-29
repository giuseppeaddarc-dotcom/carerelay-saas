# CareRelay

CareRelay è un concept SaaS mobile-first per coordinare attività, appuntamenti,
promemoria e responsabilità familiari. Può essere usato dall’app oppure
parlando con un assistente AI su WhatsApp, senza cambiare le abitudini della
famiglia.

## Sito pubblico

<https://giuseppeaddarc-dotcom.github.io/carerelay-saas/>

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

CareRelay è un software in validazione. Non formula diagnosi e non sostituisce
un medico o un servizio di emergenza. L’assistente usa solo le informazioni
autorizzate e richiede conferma prima delle modifiche rilevanti.
