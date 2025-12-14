interface Props {
  carbonSrc: string;
  class?: string;
}
/**
 * [Go to docs](https://svelte-carbonads.codewithshin.com/)
 * ## Props
 * @prop carbonSrc: string - The Carbon Ads script source URL
 * @prop class?: string - CSS classes for the aside container (default: 'fixed bottom-5 right-5 z-50 hidden sm:block')
 */
declare const Carbonads: import('svelte').Component<Props, {}, ''>;
type Carbonads = ReturnType<typeof Carbonads>;
export default Carbonads;
