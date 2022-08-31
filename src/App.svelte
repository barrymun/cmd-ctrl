<script lang="ts">
  import { onMount } from "svelte";
  import Map from "./lib/Map.svelte";
  import Terminal from "./lib/Terminal.svelte";

  // TODO: localStorage to manage map layout if procedurally generated
  // or should the map layout be fixed & the data retrieved from a json file etc.?
  onMount(() => {
    console.log('MOUNTED')
  });
</script>

<main>
  <div class="map">
    <Map />
  </div>
  <div class="terminal">
    <Terminal />
  </div>
</main>

<style>
  .map {
    position: fixed;
    top: 0;
    left: 0;
    height: 80vh;
    width: 60%;
    border: 1px solid black;
  }
  
  .terminal {
    position: fixed;
    bottom: 0;
    height: 20vh;
    width: 100%;
    background: darkgray;
    color: aqua;
  }
</style>
