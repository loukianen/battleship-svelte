<script>
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
</script>

<svelte:head>
  <title>Battleship</title>
  <meta name="description" content="Battleship game" />
</svelte:head>

<div class="container d-flex flex-column justify-content-between min-vh-100 mt-3">
  <Header />

  <slot />
  <h1>A new battleship game will be here soon!</h1>

  <Footer />
</div>

<style lang="sass">
  @import "../node_modules/bootstrap/scss/bootstrap"

  @media (min-width: 992px)
    .container
      max-width: 960px

  @media (min-width: 1200px)
    .container
      max-width: 960px

  @media (min-width: 1400px)
    .container
      max-width: 960px
</style>
