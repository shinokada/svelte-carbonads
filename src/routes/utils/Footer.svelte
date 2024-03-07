<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer footerclass="max-w-7xl mx-auto bg-white shadow-none dark:bg-sky-950" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" name="Svelte Carbonads" />
    <FooterUl
    ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="https://github.com/shinokada/svelte-carbonads">Repo</FooterLi>
      <FooterLi href="/about">About</FooterLi>
    </FooterUl>
	</div>
</Footer>
