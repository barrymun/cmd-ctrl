<script lang="ts">
  import { onMount } from "svelte";

  let worldMap

  $: cmd = "";
  $: commands = [
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
    // 'test',
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

  // TODO: scroll to bottom on resize
</script>

<div class="wrapper">
  <div class="commands-wrapper">
    {#each commands as command}
      <div class="command-item">
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
</div>

<style>
  .wrapper {
    /* subtract 2 * margin */
    height: calc(100% - 16px);
    margin: 8px;
  }

  .commands-wrapper {
    /* takes into account height of the input and the padding */
    max-height: calc(100% - 32px);
    /* this fixes the scroll to bug */
    /* padding-bottom: 24px; */
    overflow-y: scroll;
    width: 100%;
    /* scroll-snap-type: y proximity; */
    /* display: flex; */
    /* flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-end; */
  }
  .commands-wrapper > div:last-child {
    /* scroll-snap-align: start; */
  }

  .command-item {
    /* display: inline-block;
    align-self: flex-end; */
  }

  .input-wrapper {
    /* position: fixed;
    bottom: 0;
    left: 0; */
    height: 32px;
    width: 100%;
  }
</style>
