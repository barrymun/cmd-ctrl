<script lang="ts">
  $: cmd = "";

  $: commands = [
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
  ];
  function addCommand(newCommand) {
    commands = [...commands, newCommand];
  }

  function onEnter(event: KeyboardEvent) {
    if (event.key !== "Enter") return false;
    addCommand(cmd);
    cmd = ""; // reset
  }
</script>

<main class="wrapper">
  <div class="commands-wrapper">
    {#each commands as command}
      <div>
        {command}
      </div>
    {/each}
  </div>

  <div class="input-wrapper">
    <input placeholder=">&nbsp;" bind:value={cmd} on:keyup={onEnter} />
  </div>
</main>

<style>
  .wrapper {
    height: 100%;
  }
  
  .commands-wrapper {
    height: calc(100% - 32px);
    overflow-y: scroll;
  }

  .input-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 32px;
  }
</style>
