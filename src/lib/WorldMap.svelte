<script lang="ts">
  import mapRows from "../assets/map.json";
  import MapBlockPlayer from "./MapBlockPlayer.svelte";
  import MapBlockBlank from "./MapBlockBlank.svelte";
  import MapBlockCity from "./MapBlockCity.svelte";

  // console.log(mapRows);

  export function scrollToTile(x: number, y: number, smooth: boolean = false) {
    let el = document.getElementById(x.toString() + y.toString());
    if (el == null) return;
    el.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "center",
      inline: "center",
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
              class="tile"
              on:click={() => scrollToTile(x, y, true)}
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
              &nbsp;{x.toString() + y.toString()}
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
    overflow: hidden;
    cursor: crosshair;
  }

  .map-row {
    display: flex;
  }

  .map-col {
  }

  .tile {
    height: 100px;
    width: 100px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
