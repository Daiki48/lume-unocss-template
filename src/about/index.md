---
layout: layouts/about.tsx
title: About this template
---

## About

This template is the initial setup for [Lume](https://lume.land) and
[UnoCSS](https://unocss.dev).

## Usage

This template is available as a template on GitHub.

[Daiki48/lume-unocss-template](https://github.com/Daiki48/lume-unocss-template)

Press the **Use this template** button.

### Build

Install dependencies.

```shell
> deno task build
```

### Local server

```shell
> deno task dev
```

## Configuration

Install `npm:unocss`.

```shell
> deno add npm:unocss
```

### See deno.json

```json
{
  "imports": {
    "lume/": "https://deno.land/x/lume@v2.4.2/",
    "react": "npm:react@^18.3.1",
    "unocss": "npm:unocss@^0.64.0" // Here
  },
  "tasks": {
    "lume": "echo \"import 'lume/cli.ts'\" | deno run -A -",
    "build": "deno task lume",
    "serve": "deno task lume -s"
  },
  "compilerOptions": {
    "types": [
      "lume/types.ts"
    ],
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "jsxImportSourceTypes": "npm:@types/react"
  },
  "nodeModulesDir": "auto"
}
```

### _config.ts

Set UnoCSS to `_config.ts`.

```ts
import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import inline from "lume/plugins/inline.ts";
import nav from "lume/plugins/nav.ts";
import jsx from "lume/plugins/jsx.ts";
import unocss from "lume/plugins/unocss.ts";
import unocssConfig from "./uno.config.ts";

const site = lume({
  src: "./src",
  server: {
    open: true,
  },
});

site.use(
  code_highlight({
    theme: {
      name: "atom-one-dark",
      path: "/styles/atom-one-dark.css",
    },
  }),
);
site.use(inline());
site.use(nav());
site.use(jsx());
site.use(
  unocss({
    options: unocssConfig,
    cssFile: "/styles/uno.css",
  }),
);

site.copy("./_styles/global.css", "/styles/global.css");

site.ignore("README.md");

export default site;
```
