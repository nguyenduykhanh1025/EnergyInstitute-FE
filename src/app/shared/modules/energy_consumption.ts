export interface EnergyConsumption {
  id: number;
  enterprise_id: number;
  year_of_investigation: number;
  self_produced_electricity: number;
  consumption_electricity: number;
  coal: number;
  bitum_coal: number;
  coke_coal: number;
  dust_coal: number;
  ko: number;
  do: number;
  fo: number;
  lpg: number;
  ng: number;
  biomass_energy: number;
  renewable_energy: number;
}
