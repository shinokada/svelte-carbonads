---
layout: mainLayout
---
<script lang="ts">
  import { List, Li, P } from 'flowbite-svelte'
</script>
# Svelte Carbonads - 4/5/Runes
## Carbonads for SvelteKit

Carbonads is an advertising network aimed at developers and designers. Once you get the advertisement code, you can use quickly set up the ads in your SvelteKit project. 

## Docs/Repo

<List tag='ul'>
<Li>
  <a href="https://svelte-carbonads.codewithshin.com">Svelte Carbonads</a>
</Li>
<Li>
  <a href="https://https://github.com/shinokada/svelte-carbonads">GitHub</a>
</Li>
</List>

## Installation

Find out the latest versions for v1 and v2 at the <a href="https://github.com/shinokada/svelte-carbonads/releases">GitHub Releases page.</a>

### Svelte 5:Runes

After updating the `svelte.config.js`, install version `2.x.x`:

```sh
pnpm i -D svelte-carbonads@2.0.0-next.x
```

### Svelte 4/5

```sh
pnpm i -D svelte-carbonads@1.x.x
```

## Usage

```js
<script>
  import { Carbonads } from 'svelte-carbonads`
</script>

<Carbonads carbonSrc='your-carbonads-code' adclass='my-class-this-and-that' />
```
