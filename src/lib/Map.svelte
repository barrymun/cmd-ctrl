<script lang="ts">
  import mapRows from "../assets/map.json";
  import MapBlockPlayer from "./MapBlockPlayer.svelte";
  import MapBlockBlank from "./MapBlockBlank.svelte";
  import MapBlockCity from "./MapBlockCity.svelte";

  // console.log(mapRows);
  
  function scrollToTile(i: number, j: number) {
    let el = document.getElementById(i.toString() + j.toString())
    if (el == null) return
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' })
  }

</script>

<div class="container">
  {#each mapRows as mapCols, i}
    <div class="map-row">
      {#each mapCols as mapCol, j}
        <div class="map-col">
          <div id={i.toString() + j.toString()} on:click={() => scrollToTile(i, j)}>
            {#if mapCol.type === 1}
              <MapBlockPlayer />
            {:else if mapCol.type === 2}
              <MapBlockBlank />
            {:else if mapCol.type === 3}
              <MapBlockCity />
            {:else}
              {"..."}
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    /* overflow: scroll; */
    overflow: hidden;
    cursor: crosshair;
  }

  .map-row {
    display: flex;
  }

  .map-col {
  }
</style>
