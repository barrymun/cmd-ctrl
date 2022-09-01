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
  <div class="container-inner">
    {#each mapRows as mapCols, x}
      <div class="map-row">
        {#each mapCols as mapCol, y}
          <div class="map-col">
            <div
              id={x.toString() + y.toString()}
              class="h-24 w-24 flex justify-center items-center p-2"
              on:click={() => scrollToTile(x, y, true)}
            >
              <div
                class="rounded-lg bg-white shadow h-full overflow-hidden rounded-[50%]"
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
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .container-inner {
    padding: 250px;
    /* account for 2x padding on the height and width */
    height: calc(100% + 500px);
    width: calc(100% + 500px);
  }

  .map-row {
    display: flex;
  }

  .map-col {
  }

  .tile {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tile:hover {
    background-color: lightblue;
  }
</style>
