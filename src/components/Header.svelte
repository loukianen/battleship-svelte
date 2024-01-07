<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<header class="d-flex flex-column flex-md-row w-100" data-testid="header">
  <img class="rounded" id="logo" src="img/logo_356_x_200.jpg" alt={$_('ui.altLogo')} />
  <div class="d-flex flex-column align-content-end justify-content-around w-100">
    <div class="header-main text-center display-2" id="mainHeader">{$_('ui.mainHeader')}</div>
    <h2>A navigation will be here soon!</h2>
  </div>
</header>

<style lang="sass">
  @use './variables' as *
  @import "../node_modules/bootstrap/scss/bootstrap"

  .header
    &-main
      color: $main-color
</style>