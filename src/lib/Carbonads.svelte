<script lang="ts">
  import { onMount } from 'svelte';
  import { page, navigating } from '$app/stores';
  interface WindowWithCarbonAds extends Window {
    _carbonads: {
      refresh: () => void;
    };
  }

  export let carbonSrc: string = '';
  export let adclass: string = 'fixed bottom-5 right-5 z-50 hidden sm:block';

  onMount(() => {
    refreshCarbonAds();
  });
  $: if ($navigating) {
    refreshCarbonAds();
  }

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

<aside class={adclass}>
  <div id="carbon-container" />
</aside>

<!--
@component
[Go to docs](https://svelte-carbonads.codewithshin.com/)
## Props
@prop export let carbonSrc: string = '';
@prop export let adclass: string = 'fixed bottom-5 right-5 z-50 hidden sm:block';
-->
