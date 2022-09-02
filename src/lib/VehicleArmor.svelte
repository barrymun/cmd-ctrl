<script lang="ts">
  import { playerVehicleArmorLevel } from '../stores.js';

  let _playerVehicleArmorLevel: object;

	playerVehicleArmorLevel.subscribe(value => {
		_playerVehicleArmorLevel = value;
	});

  console.log(_playerVehicleArmorLevel)
</script>

<main></main>