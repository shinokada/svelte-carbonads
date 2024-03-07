<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './utils/Nav.svelte';
	import Footer from './utils/Footer.svelte';
	import MetTag from './utils/MetTag.svelte';
</script>

<MetTag />
<Nav />

<section class="border-b border-gray-200 pb-16 dark:border-gray-600">
	<div class="mx-auto max-w-7xl px-4 pt-8">
		{@render children()}
	</div>
</section>

<Footer />
