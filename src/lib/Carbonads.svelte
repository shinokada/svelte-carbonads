<script lang="ts">
  import { navigating } from '$app/state';
  
  interface WindowWithCarbonAds extends Window {
    _carbonads?: {
      refresh: () => void;
    };
  }

  interface Props {
    carbonSrc: string;
    class?: string;
  }
  
  let { 
    carbonSrc, 
    class: className = 'fixed bottom-5 right-5 z-50 hidden sm:block' 
  }: Props = $props();

  function refreshCarbonAds() {
    const isCarbonAdsRendered = document.querySelector('#carbonads');
    const windowWithCarbon = window as WindowWithCarbonAds;

    if (isCarbonAdsRendered && windowWithCarbon._carbonads) {
      windowWithCarbon._carbonads.refresh();
    } else {
      const container = document.querySelector('#carbon-container');
      if (!container) return;

      // Remove any existing scripts first to avoid duplicates
      const existingScript = container.querySelector('#_carbonads_js');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.async = true;
      script.id = '_carbonads_js';
      script.src = carbonSrc;
      container.appendChild(script);
    }
  }

  // Initialize and refresh on navigation
  $effect(() => {
    // Refresh on mount and whenever navigation occurs
    refreshCarbonAds();
    
    // Watch for navigation changes
    if (navigating) {
      refreshCarbonAds();
    }
  });
</script>

<aside class={className}>
  <div id="carbon-container"></div>
</aside>

<!--
@component
[Go to docs](https://svelte-carbonads.codewithshin.com/)
## Props
@prop carbonSrc: string - The Carbon Ads script source URL
@prop class?: string - CSS classes for the aside container (default: 'fixed bottom-5 right-5 z-50 hidden sm:block')
-->
