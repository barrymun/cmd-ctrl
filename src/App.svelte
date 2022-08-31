<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";
  import WorldMap from "./lib/WorldMap.svelte";
  import Terminal from "./lib/Terminal.svelte";

  let worldMap: SvelteComponent;

  // TODO: localStorage to manage map layout if procedurally generated
  // or should the map layout be fixed & the data retrieved from a json file etc.?
  onMount(() => {
    console.log("MOUNTED");
  });

  function scrollToTile(x: number, y: number) {
    worldMap.scrollToTile(x, y);
  }
</script>

<main>
  <div class="world-map">
    <WorldMap bind:this={worldMap} />
  </div>

  <div class="terminal">
    <Terminal {scrollToTile} />
  </div>
</main>

<style>
  .world-map {
    position: fixed;
    top: 0;
    left: 0;
    height: 80vh;
    width: 50%;
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
