# Paulo Henrique Mendes - Portfólio

Landing page profissional para Paulo Henrique Mendes, focada em design gráfico, criação de marcas, identidade visual, branding e transição para design web.

## Stack

- React + Vite
- Tailwind CSS
- Dados do portfólio via `public/projects.json`, com fallback em `src/data/projects.json`
- Script de sincronização pública com Behance em `scripts/sync-behance.mjs`

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

O Behance não oferece uma API pública simples para esse uso. Por isso, o projeto usa uma alternativa segura:

1. O script acessa a página pública `https://www.behance.net/phmendes`.
2. Extrai projetos, capas e links públicos.
3. Tenta enriquecer cada projeto com imagens, tags e data.
4. Atualiza `public/projects.json` e `src/data/projects.json`.
5. Se o Behance bloquear ou alterar o HTML, o site continua usando o fallback manual.

```bash
npm run sync:behance
```

Para atualizar no Vercel, rode o script antes do commit ou adicione `npm run sync:behance && npm run build` como Build Command.

## Campos de contato

Os links de contato usam:

- WhatsApp: `+55 85 99299-4767`
- E-mail: `paulohenriquedeoliveiramendes@gmail.com`

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

Este projeto está preparado para publicar como site de projeto, sem mexer no site raiz `paulohenriquemendes.github.io`.

URL esperada:

```text
https://paulohenriquemendes.github.io/designer/
```

O `base` do Vite usa `/designer/` quando a variável `GITHUB_PAGES` está ativa:

```bash
GITHUB_PAGES=true npm run build
```

Crie um repositório chamado `designer`, publique este projeto nele e ative o GitHub Pages desse repositório. Isso cria uma URL de projeto e não altera o repositório raiz `paulohenriquemendes.github.io`.
