import { writable } from 'svelte/store';

export const playerResources = writable({
  stone: 0,
  copper: 0,  // for the wiring
  plastic: 0,
  steel: 0,
  aluminium: 0,
  carbonFibre: 0,
});

export const playerVehicles = writable({
  a1: 0,  // low offence + slow transport
  a2: 0,  // low-moderate offence
  b1: 0,  // fast defence
  b2: 0,  // very, very fast recon
  c1: 0,  // moderate defence
  c2: 0,  // moderate-high ranged offence
  d1: 0,  // very fast moderate offence, low-moderate defence
  d2: 0,  // fast moderate offence, moderate-high defence
  e1: 0,  // transport
  e2: 0,  // high ranged offence
  f1: 0,  // very high defence, slow
  f2: 0,  // very high ranged offence, slow
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