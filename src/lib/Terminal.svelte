<script lang="ts">
  import { onMount } from "svelte";

  $: cmd = "";
  $: commands = [
  ];

  let scrollBottom;

  function addCommand(newCommand: string) {
    commands = [...commands, newCommand];
    autoScroll();
  }

  function onEnter(event: KeyboardEvent) {
    if (event.key !== "Enter" || cmd === "") return false;
    addCommand(cmd);
    cmd = ""; // reset
  }

  function autoScroll() {
    // small delay seems to fix the scroll issue
    setTimeout(() => scrollBottom?.scrollIntoView({ behavior: "auto" }), 50);
  }

  onMount(() => {
    autoScroll();
  });
</script>

<main class="wrapper">
  <div id="commands-wrapper">
    {#each commands as command}
      <div>
        {command}
      </div>
    {/each}
    <div class="dummy" bind:this={scrollBottom} />
  </div>

  <div class="input-wrapper">
    <input
      autofocus
      placeholder=">&nbsp;"
      bind:value={cmd}
      on:keyup={onEnter}
    />
  </div>
</main>

<style>
  .wrapper {
    height: 100%;
  }

  #commands-wrapper {
    /* takes into account height of the input and the padding */
    height: calc(100% - 32px);
    /* this fixes the scroll to bug */
    /* padding-bottom: 24px; */
    overflow-y: scroll;
    width: 100%;
    /* scroll-snap-type: y proximity; */
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
  }
  #commands-wrapper > div:last-child {
    /* scroll-snap-align: start; */
  }

  .input-wrapper {
    /* position: fixed;
    bottom: 0;
    left: 0; */
    height: 32px;
    width: 100%;
  }
</style>
