<script>
  import { fade } from "svelte/transition";

  function expand(node, { delay = 0, duration = 250 }) {
    const height = getComputedStyle(node).height;
    const heightNumber = Number(height.slice(0, -2));
    const opacity = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: t =>
        `height: ${t * heightNumber}px; transform: scale(${t}); opacity: ${
          t * opacity
        }`,
    };
  }
</script>

<div transition:expand class="accordion">
  <slot />
</div>

<style>
  .accordion {
    overflow: hidden;
    transform-origin: 50% 0%;
  }
</style>
