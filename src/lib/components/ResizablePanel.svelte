<script>
  let width, height;
</script>

<div
  class="resizable-container"
  style={`width: ${width}px; height: ${height}px`}
>
  <div
    bind:clientWidth={width}
    bind:clientHeight={height}
    class="resizable-panel"
  >
    <slot bind />
  </div>
</div>

<style>
  .resizable-container {
    transition: height 0.25s ease;
  }
</style>
