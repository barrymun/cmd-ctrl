<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Terminal from "./lib/Terminal.svelte";
</script>

<main>
  <div class="terminal">
    <Terminal />
  </div>
</main>

<style>
  .terminal {
    position: fixed;
    bottom: 0;
    background: black;
    color: aqua;
    width: 100%;
    height: 20vh;
  }
</style>
