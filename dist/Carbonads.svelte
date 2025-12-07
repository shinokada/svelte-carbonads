<script lang="ts">
  import { onMount } from 'svelte';
  import { navigating } from '$app/state';
  interface WindowWithCarbonAds extends Window {
    _carbonads: {
      refresh: () => void;
    };
  }

  interface Props {
    carbonSrc: string;
    class: string;
  }
  let { carbonSrc, class: className = 'fixed bottom-5 right-5 z-50 hidden sm:block' }: Props = $props();

  onMount(() => {
    refreshCarbonAds();
  });

  $effect(() => {
    if (navigating) {
      refreshCarbonAds();
    }
  });

  function refreshCarbonAds() {
    const isCarbonAdsRendered = document.querySelector('#carbonads');
    const windowWithCarbon = window as unknown as WindowWithCarbonAds;

    if (isCarbonAdsRendered && windowWithCarbon._carbonads) {
      windowWithCarbon._carbonads.refresh();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.id = '_carbonads_js';
      script.src = carbonSrc;

      const container = document.querySelector('#carbon-container');
      if (container) {
        // Remove any existing scripts first to avoid duplicates
        const existingScript = container.querySelector('#_carbonads_js');
        if (existingScript) {
          container.removeChild(existingScript);
        }
        container.appendChild(script);
      }
    }
  }
</script>

<aside class={className}>
  <div id="carbon-container"></div>
</aside>

<!--
@component
[Go to docs](https://svelte-carbonads.codewithshin.com/)
## Props
@prop export let carbonSrc: string = '';
@prop export let adclass: string = 'fixed bottom-5 right-5 z-50 hidden sm:block';
-->
