<script lang="ts">
  import mapRows from "../assets/map.json";
  import MapBlockPlayer from "./MapBlockPlayer.svelte";
  import MapBlockBlank from "./MapBlockBlank.svelte";
  import MapBlockCity from "./MapBlockCity.svelte";

  // console.log(mapRows);

  export function scrollToTile(x: number, y: number) {
    console.log(x, y);
    let el = document.getElementById(x.toString() + y.toString());
    if (el == null) return;
    console.log(el);
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }
</script>

<div class="container">
  {#each mapRows as mapCols, x}
    <div class="map-row">
      {#each mapCols as mapCol, y}
        <div class="map-col">
          <div
            id={x.toString() + y.toString()}
            on:click={() => scrollToTile(x, y)}
          >
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
