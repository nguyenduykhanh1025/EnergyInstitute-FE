export interface GreenhouseEmission {
  id: number;
  year_of_investigation: number;
  product: {
    id: number;
    name: string;
  };
  greenhouse_emission_details: GreenhouseEmissionDetails[];
}
export interface GreenhouseEmissionDetails {
  carbon_dioxide: number;
  methane: number;
  nitrous_dioxide: number;
  emission_reason: {
    description: string;
    id: number;
  };
}
