<script lang="ts">
	// import { onMount } from 'svelte';
	import { page, navigating } from '$app/stores';
	interface WindowWithCarbonAds extends Window {
		_carbonads: {
			refresh: () => void;
		};
	}
	interface Props{
		carbonSrc: string
		adclass: string
	}

	let { carbonSrc, adclass='fixed bottom-5 right-5 z-50 hidden sm:block', ...attributes } = $props<Props>();

	// export let carbonSrc: string = '';
	// export let adclass: string = 'fixed bottom-5 right-5 z-50 hidden sm:block';

	$effect(() => {
		refreshCarbonAds();
		
	});
	// $: if ($navigating) {
	// 	refreshCarbonAds();
	// }

	function refreshCarbonAds() {
		const isCarbonAdsRendered = document.querySelector('#carbonads');

		if (isCarbonAdsRendered) {
			(window as unknown as WindowWithCarbonAds)._carbonads.refresh();
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
	}
</script>

<aside class={adclass} {...attributes}>
	<div id="carbon-container" />
</aside>
