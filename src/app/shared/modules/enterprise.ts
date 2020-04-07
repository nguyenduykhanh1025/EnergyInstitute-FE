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

export interface params_get_enterprises {
  year: string;
  province: string;
  page: number;
  amount: string;
}
