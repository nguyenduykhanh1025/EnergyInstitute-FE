export interface Enterprise {
  id: number;
  name: String;
  tax_code: String;
  sector: {
    id: number;
    name: String;
    subsector: {
      id: number;
      name: String;
    };
  };
}
