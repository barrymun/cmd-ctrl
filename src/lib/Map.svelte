<script lang="ts">
  import mapRows from "../assets/map.json";
  import MapBlockPlayer from "./MapBlockPlayer.svelte";
  import MapBlockBlank from "./MapBlockBlank.svelte";
  import MapBlockCity from "./MapBlockCity.svelte";

  // console.log(mapRows);
</script>

<div class="container">
  {#each mapRows as mapCols}
    <div class="map-row">
      {#each mapCols as mapCol}
        <div class="map-col">
          {#if mapCol.type === 1}
            <MapBlockPlayer/>
          {:else if mapCol.type === 2}
            <MapBlockBlank/>
          {:else if mapCol.type === 3}
            <MapBlockCity/>
          {:else}
            {"..."}
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    overflow: scroll;
  }

  .map-row {
  }

  .map-col {
  }
</style>
