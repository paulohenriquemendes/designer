# Paulo Henrique Mendes - Portfolio

Landing page profissional para Paulo Henrique Mendes, focada em design grafico, criacao de marcas, identidade visual, branding e transicao para design web.

## Stack

- React + Vite
- Tailwind CSS
- Dados do portfolio via `public/projects.json`, com fallback em `src/data/projects.json`
- Script de sincronizacao publica com Behance em `scripts/sync-behance.mjs`

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Sincronizar projetos do Behance

O Behance nao oferece uma API publica simples para esse uso. Por isso, o projeto usa uma alternativa segura:

1. O script acessa a pagina publica `https://www.behance.net/phmendes`.
2. Extrai projetos, capas e links publicos.
3. Tenta enriquecer cada projeto com imagens, tags e data.
4. Atualiza `public/projects.json` e `src/data/projects.json`.
5. Se o Behance bloquear ou alterar o HTML, o site continua usando o fallback manual.

```bash
npm run sync:behance
```

Para atualizar no Vercel, rode o script antes do commit ou adicione `npm run sync:behance && npm run build` como Build Command.

## Campos pendentes

Substitua estes placeholders nos arquivos de contato:

- `COLE_AQUI_SEU_EMAIL`

Arquivos principais:

- `src/components/Contato.jsx`
- `src/components/Footer.jsx`

## Deploy no Vercel

1. Crie um repositorio no GitHub.
2. Envie este projeto para o repositorio.
3. Importe o repositorio no Vercel.
4. Use:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

Opcional para sincronizar Behance em todo deploy:

```bash
npm run sync:behance && npm run build
```

## GitHub Pages

Este projeto esta preparado para publicar como site de projeto, sem mexer no site raiz `paulohenriquemendes.github.io`.

URL esperada:

```text
https://paulohenriquemendes.github.io/designer/
```

O `base` do Vite usa `/designer/` quando a variavel `GITHUB_PAGES` esta ativa:

```bash
GITHUB_PAGES=true npm run build
```

Crie um repositorio chamado `designer`, publique este projeto nele e ative o GitHub Pages desse repositorio. Isso cria uma URL de projeto e nao altera o repositorio raiz `paulohenriquemendes.github.io`.
