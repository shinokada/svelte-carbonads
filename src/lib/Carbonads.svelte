<script lang="ts">
	import { page, navigating } from '$app/stores';
	interface WindowWithCarbonAds extends Window {
		_carbonads: {
			refresh: () => void;
		};
	}
	interface Props {
		carbonSrc: string;
		adclass?: string;
	}

	let {
		carbonSrc,
		adclass = 'fixed bottom-5 right-5 z-50 hidden sm:block',
		...attributes
	} = $props<Props>();

	$effect(() => {
		if ($navigating) {
			const container = document.querySelector('#carbon-container');
			if (container) {
				container.innerHTML = '';
			}
		} else {
			const script = document.createElement('script');
			script.async = true;
			script.id = '_carbonads_js';
			script.src = carbonSrc;

			const container = document.querySelector('#carbon-container');
			if (container) {
				container.appendChild(script);
			}
		}
	});
</script>

<aside class={adclass} {...attributes}>
	<div id="carbon-container" />
</aside>

<!--
@component
[Go to docs](https://svelte-carbonads.codewithshin.com/)
## Props
@props: carbonSrc: string;
@props:adclass?:  string; = 'fixed bottom-5 right-5 z-50 hidden sm:block';
-->
