<script lang="ts">
  import { onMount } from "svelte";
  import Terminal from "./lib/Terminal.svelte";

  // TODO: localStorage to manage map layout if procedurally generated
  // or should the map layout be fixed & the data retrieved from a json file etc.?
  onMount(() => {
    console.log('MOUNTED')
  });
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
