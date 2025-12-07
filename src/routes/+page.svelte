<script lang="ts">
  import { removeHyphensAndCapitalize, SupportBanner, TechInfo, H2 } from 'runes-webkit';
  import { HighlightCompo } from 'svelte-rune-highlight';
  import { P } from 'flowbite-svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  /*eslint no-undef: "off"*/
  const pkg = {
    pkgName: __NAME__,
    pkgVersion: __VERSION__,
    repoUrl: __GITHUBURL__,
    runaticsVersion: __RUNATICS_VERSION__,
    runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
    svelteVersion: __SVELTE_VERSION__,
    svelteKitVersion: __SVELTEKIT_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__
  };
</script>

<div class="relative mx-auto mt-8 h-full max-w-7xl overflow-y-auto px-8 pb-10">
  <SupportBanner class="relative mt-4 dark:bg-stone-800">
    To Keep It Going, Please Show Your Love.<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank" aria-label="Buy Me a Coffee at ko-fi.com"
      ><img height="40" style="border:0px;height:40px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com" /></a
    >
  </SupportBanner>

  <h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)} for SvelteKit</h1>

  <P
    >Carbonads is an advertising network aimed at developers and designers. Once you get the advertisement code, you can use quickly set up the ads in
    your SvelteKit project.
  </P>

  <H2>Installation</H2>
  <HighlightCompo class="max-w-7xl" codeLang="ts" code={modules['./md/installation.md'] as string} />

  <H2>Usage</H2>
  <HighlightCompo class="max-w-7xl" codeLang="ts" code={modules['./md/usage.md'] as string} />

  <TechInfo {...pkg} class="dark:bg-stone-900" />
</div>
