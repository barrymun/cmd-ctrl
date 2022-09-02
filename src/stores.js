import { writable } from 'svelte/store';

export const playerVehicleArmorLevel = writable({
  topside: 1,
  underside: 1,
  empennage: 1,
  nose: 1,
  thrusters: 1,
  controls: 1,
  shields: 1,
});