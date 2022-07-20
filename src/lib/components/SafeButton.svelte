<script>
  export let callback;
  export let disabled;
  export let timeout = 2000;
  let clickedOnce = false;
  let timeoutId;

  function handleClick() {
    if (!clickedOnce) {
      timeoutId = setTimeout(() => {
        clickedOnce = false;
      }, timeout);

      return (clickedOnce = true);
    }
    if (timeoutId) clearTimeout(timeoutId);
    clickedOnce = false;
    callback();
  }
</script>

<button {disabled} class={clickedOnce ? "active" : ""} on:click={handleClick}>
  <slot />
</button>
