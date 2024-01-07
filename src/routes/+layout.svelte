<script lang="ts">
</script>

<div class="app">
  <slot />
</div>

<style lang="sass">
  @import "../node_modules/bootstrap/scss/bootstrap"

  button:active, button:focus
    outline: none !important

  button::-moz-focus-inner
    border: 0 !important

  :root
    --bs-position: end
</style>
