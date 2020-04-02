export interface GreenhouseEmissionCreate{
    year_of_investigation: number;
    carbon_dioxide: number;
    methane: number;
    nitrous_dioxide: number;
    emission_reason_id: number;
    product_id: number;
}