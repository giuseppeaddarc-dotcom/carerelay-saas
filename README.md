# CareRelay

CareRelay è un concept SaaS mobile-first che trasforma i dati disponibili da
smartwatch e fitness tracker compatibili in report più chiari per la famiglia.

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
un medico o un servizio di emergenza. Dati e report disponibili dipendono dal
dispositivo collegato, dai sensori, dal sistema operativo, dal paese e dai
permessi concessi.
