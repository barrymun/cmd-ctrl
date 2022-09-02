<script lang="ts">
  import { playerResources } from "../stores.js";
  import Table from "../components/Table.svelte";

  let _playerResources: object;

  playerResources.subscribe((value) => {
    _playerResources = value;
  });

  console.log(_playerResources);
</script>

<main class="mt-10">
  <Table>
    {#each Object.entries(_playerResources) as [key, value], index (key)}
      <tr>
        <td
          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
        >
          {key}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {value}
        </td>
      </tr>
    {/each}
  </Table>
</main>
