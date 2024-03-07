<script lang="ts">
  import '../app.pcss';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
  import Footer from 'flowbite-svelte/Footer.svelte';
  import FooterBrand from 'flowbite-svelte/FooterBrand.svelte';
  import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte';
  import FooterLink from 'flowbite-svelte/FooterLink.svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { Carbonads } from '$lib';

  $: activeUrl = $page.url.pathname;
  const title = 'Svelte Awesome Icons';
  let divClass = 'w-full ml-auto md:block md:w-auto order-1 md:order-none';
  let ulClass =
    'flex flex-col py-3 my-4 md:flex-row md:my-0 text-sm font-medium gap-4 dark:md:bg-transparent md:bg-white md:border-0';

  afterNavigate(() => {
    document.getElementById('svelte')?.scrollTo({ top: 0 });
  });
</script>

<MetaTags
  title="Svelte Awesome Icons"
  description="svelte-awesome-icons icon set for Svelte"
  openGraph={{
    type: 'website',
    url: 'https://svelte-awesome-icons.vercel.app/',
    title: 'Svelte Awesome Icons',
    description: 'Awesome icon set for Svelte',
    images: [
      {
        url: 'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons',
        width: 1200,
        height: 630,
        alt: 'Svelte Awesome Icons'
      }
    ],
    siteName: 'Svelte Awesome Icons'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: 'Svelte Awesome Icons',
    description: 'Awesome icon set for Svelte',
    image: 'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons',
    imageAlt: 'Svelte Awesome Icons'
  }}
/>
<div class="relative max-h-screen w-full overflow-auto" id="svelte">
  <header
    class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-sky-950"
  >
    <Navbar color="default" fluid let:hidden let:toggle class="dark:bg-sky-950 ">
      <NavBrand href="/">
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
        >
          {title}
        </span>
      </NavBrand>

      <NavUl
        {activeUrl}
        {hidden}
        {divClass}
        {ulClass}
        on:click={() => setTimeout(toggle, 1)}
        nonActiveClass="md:!pl-3 md:!py-2 md:!pl-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-white md:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        activeClass="md:!pl-3 md:!py-2 md:!pl-0 md:text-primary-700 text-white dark:text-white dark:md:text-primary-500 bg-primary-700 md:bg-transparent dark:bg-primary-600 md:dark:bg-transparent cursor-default"
      >
        <NavLi href="/" data-sveltekit-reload>Home</NavLi>
        <NavLi href="/about">About</NavLi>
      </NavUl>
      <div class="ml-auto flex items-center">
        <DarkMode class="inline-block hover:text-gray-900 dark:hover:text-white" />
      </div>
      <NavHamburger on:click={toggle} class="m-0 ml-3 block md:hidden" />
    </Navbar>
  </header>

  <div class="p-8">
    <slot />
  </div>

  <Footer footerType="logo" class="dark:dark:bg-sky-950">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand
        href="https://svelte-awesome-icons.vercel.app/"
        name="Svelte Awesome Icons"
        classSpan="text-primary-700 dark:text-primary-500"
      />
      <FooterLinkGroup
        ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-800 dark:text-gray-200 sm:mt-0"
      >
        <FooterLink href="/" data-sveltekit-reload>Home</FooterLink>
        <FooterLink href="https://github.com/shinokada/svelte-carbonads/">GitHub</FooterLink>
      </FooterLinkGroup>
    </div>
  </Footer>
</div>
