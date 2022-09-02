<script lang="ts">
  import { playerVehicles } from "../stores.js";
  import Table from "../components/Table.svelte";

  let _playerVehicles: object;

  playerVehicles.subscribe((value) => {
    _playerVehicles = value;
  });

  console.log(_playerVehicles);
</script>

<main class="mt-10">
  <Table>
    {#each Object.entries(_playerVehicles) as [key, value], index (key)}
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
