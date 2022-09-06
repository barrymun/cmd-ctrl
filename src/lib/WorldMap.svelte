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
  <div class="absolute h-40 w-40 bottom-0 right-0">
    <div class="lg bg-white shadow h-full z-40">
    MINI MAP
    </div>
  </div>
  <div class="container-inner">
    {#each mapRows as mapCols, x}
      <div class="flex">
        {#each mapCols as mapCol, y}
          <div class="">
            <div
              id={x.toString() + y.toString()}
              class="h-24 w-24 flex justify-center items-center p-2"
              on:click={() => scrollToTile(x, y, true)}
            >
              <div
                class="rounded-lg bg-white shadow h-full overflow-hidden rounded-[50%]"
              >
                <div class="h-full w-full relative z-10">
                  {#if mapCol.type === 1}
                    <MapBlockPlayer />
                  {:else if mapCol.type === 2}
                    <MapBlockBlank />
                  {:else if mapCol.type === 3}
                    <MapBlockCity />
                  {:else}
                    {"..."}
                  {/if}

                  <div
                    class="absolute opacity-0 h-full w-full top-1 left-1 hover:opacity-100 hover:z-20"
                  >
                    <span
                      class="rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-12"
                    >
                      {"(" + x.toString() + ", " + y.toString() + ")"}
                    </span>
                  </div>
                </div>
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
</style>
