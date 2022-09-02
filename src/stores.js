import { writable } from 'svelte/store';

export const playerResources = writable({
  copper: 0,  // for the wiring
  plastic: 0,
  steel: 0,
  aluminium: 0,
  carbonFibre: 0,
  superAlloy: 0,
});

export const playerVehicleArmorLevel = writable({
  topside: 1,
  underside: 1,
  empennage: 1,
  nose: 1,
  thrusters: 1,
  controls: 1,
  shields: 1,
});