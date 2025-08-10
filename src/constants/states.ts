export const STATES = {
  pir: 'Pinar del Río',
  art: 'Artemisa',
  hab: 'La Habana',
  myb: 'Mayabeque',
  mtz: 'Matanzas',
  cfg: 'Cienfuegos',
  vcl: 'Villa Clara',
  ssp: 'Sancti Spíritus',
  cav: 'Ciego de Ávila',
  cmg: 'Camagüey',
  ltu: 'Las Tunas',
  hgn: 'Holguín',
  grm: 'Granma',
  scu: 'Santiago de Cuba',
  gtm: 'Guantánamo',
  ijv: 'Isla de la Juventud',
} as const;

export const STATES_VALUES = Object.values(STATES);

export const STATES_CODES = Object.keys(STATES);

export const STATES_ENTRIES = Object.entries(STATES);

export type IStateCode = keyof typeof STATES;
