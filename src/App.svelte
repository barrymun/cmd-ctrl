<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";
  import WorldMap from "./lib/WorldMap.svelte";
  import Terminal from "./lib/Terminal.svelte";
  import DisplayVehicleArmor from "./lib/DisplayVehicleArmor.svelte";
  import DisplayResource from "./lib/DisplayResource.svelte";
  import DisplayVehicle from "./lib/DisplayVehicle.svelte";

  let worldMap: SvelteComponent;

  // TODO: localStorage to manage map layout if procedurally generated
  // or should the map layout be fixed & the data retrieved from a json file etc.?
  onMount(() => {
    // console.log("MOUNTED");
  });

  function scrollToTile(x: number, y: number) {
    worldMap.scrollToTile(x, y);
  }
</script>

<main>
  <div class="fixed top-0 left-0 h-[calc(80vh-12px)] w-[calc(60%-12px)] m-2">
    <div class="rounded-lg bg-white shadow h-full overflow-hidden">
      <WorldMap bind:this={worldMap} />
    </div>
  </div>

  <div class="fixed top-0 right-0 h-[calc(80vh-12px)] w-[calc(40%-12px)] m-2">
    <div class="rounded-lg bg-white shadow h-full overflow-hidden">
      <div class="h-full overflow-scroll">
        <DisplayVehicleArmor />
        <DisplayResource />
        <DisplayVehicle />
      </div>
    </div>
  </div>

  <div class="fixed bottom-0 h-[calc(20vh-12px)] w-[calc(100%-16px)] m-2">
    <div
      class="rounded-lg bg-white shadow p-1 bg-white text-blue-400 h-[calc(100%-0px)] w-full"
    >
      <Terminal {scrollToTile} />
    </div>
  </div>
</main>

<style>
</style>
