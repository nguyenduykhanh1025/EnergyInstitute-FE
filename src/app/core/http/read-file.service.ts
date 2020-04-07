import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { params_get_enterprises } from "src/app/shared/modules/enterprise";
import { HttpParams } from "@angular/common/http";
import { params_get_energy_consumption } from "src/app/shared/modules/energy_consumption";

@Injectable({
  providedIn: "root",
})
export class ReadFile {
  readonly urlGetTTDN =
    "https://energy-institute.herokuapp.com/enterprises.json";

  readonly urlGetTDNL =
    "https://energy-institute.herokuapp.com/energy_consumptions.json";

  readonly urlGetSPSX = "https://energy-institute.herokuapp.com/products.json";

  readonly urlGetPTSP =
    "https://energy-institute.herokuapp.com/greenhouse_emission_products.json";

  readonly urlGetTPT =
    "https://energy-institute.herokuapp.com/greenhouse_emission_sum.json";

  readonly urlGetPTNL =
    "https://energy-institute.herokuapp.com/greenhouse_emission_consumptions.json";

  readonly urlTTDNV2 = "admin/enterprises";
  readonly urlTDNLV2 = "admin/energies";

  constructor(private apiService: ApiService) {}

  getTTDN(): Observable<TTDN[]> {
    return this.apiService
      .readJson(this.urlGetTTDN)
      .pipe(map((res) => res.enterprises));
  }

  getTDNL(): Observable<TDNL[]> {
    return this.apiService
      .readJson(this.urlGetTDNL)
      .pipe(map((res) => res.energy_consumptions));
  }

  getSPSX(): Observable<SPSX[]> {
    return this.apiService
      .readJson(this.urlGetSPSX)
      .pipe(map((res) => res.products));
  }

  getPTSP(): Observable<PTSP[]> {
    return this.apiService
      .readJson(this.urlGetPTSP)
      .pipe(map((res) => res.greenhouse_emission_products));
  }

  getTPT(): Observable<TPT[]> {
    return this.apiService
      .readJson(this.urlGetTPT)
      .pipe(map((res) => res.greenhouse_emission_sum));
  }

  getPTNL(): Observable<PTNL[]> {
    return this.apiService
      .readJson(this.urlGetPTNL)
      .pipe(map((res) => res.greenhouse_emission_consumptions));
  }

  getTTDNV2(data: params_get_enterprises): Observable<TTDN_V2[]> {
    const param = new HttpParams()
      .set("year", `${data.year}`)
      .set("province", data.province)
      .set("page", `${data.page}`)
      .set("amount", `${data.amount}`);

    return this.apiService
      .get(this.urlTTDNV2, param)
      .pipe(map((res) => res.enterprises));
  }

  getTDNLV2(data: params_get_energy_consumption): Observable<TDNL_V2[]> {
    const params = new HttpParams()
      .set("year", data.year)
      .set("page", data.page)
      .set("amount", data.amount);

    return this.apiService
      .get(this.urlTDNLV2, params)
      .pipe(map((res) => res.energies));
  }
}

export interface TDNL_V2 {
  id: number;
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  ma_cap: string;
  ten_nganh: number;
  dien: string;
  antracite_nltt: string;
  bitum_nltt: string;
  coc_nltt: string;
  ko_nltt: number;
  do_nltt: string;
  fo_nltt: string;
  lpg_nltt: string;
  ng_nltt: string;
  npk_pnl: number;
  hs_pnl: string;
  than_pnl: string;
  ng_pnl: string;
  dien_pnl: string;
  antracite_tj: number;
  bitum_tj: string;
  coc_tj: string;
  ko_tj: string;
  do_tj: string;
  fo_tj: number;
  lpg_tj: string;
  ng_tj: string;
  tong: string;
}

export interface TTDN_V2 {
  id: number;
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  tinh: string;
  huyen: string;
  xa: string;
  toa_do_x: string;
  toa_do_y: string;
  nganh_cap_1: string;
  ma_Cap: string;
  ten_nganh_cap_2: string;
  gtsx: string;
  so_lao_dong: string;
}

export interface TTDN {
  nam: string;
  ma: string;
  ten: string;
  tinh: string;
  huyen: string;
  xa: string;
  toa_do_x: string;
  toa_do_y: string;
  nganh_cap_1: string;
  ma_cap_2: string;
  ten_nganh_cap_2: string;
  gtsx: string;
  so_lao_dong: string;
}

export interface TDNL {
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  ma_cap: string;
  ten_nganh: string;
  dien_nltt: string;
  bitum_nltt: string;
  than_coc_nltt: string;
  ko_nltt: string;
  do_nltt: string;
  fo_nltt: string;
  lpg_nltt: string;
  ng_nltt: string;
  npk_pnl: string;
  hs_pnl: string;
  than_pnl: string;
  ng_pnl: string;
  dien_pnl: string;
  antracite_nltt_tj: string;
  bitum_nltt_tj: string;
  than_coc_nltt_tj: string;
  ko_nltt_tj: string;
  do_nltt_tj: string;
  fo_nltt_tj: string;
  lpg_nltt_tj: string;
  ng_nltt_tj: string;
  tong: string;
}

export interface SPSX {
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  stt: string;
  ten_san_pham: string;
  ma_cap_2: string;
  ten_nganh_cap_2: string;
  don_vi: string;
  so_luong: string;
  do_nltt: string;
  fo_nltt: string;
  lpg_nltt: string;
  ng_nltt: string;
  npk_pnl: string;
  hs_pnl: string;
  than_pnl: string;
  ng_pnl: string;
  dien_pnl: string;
  antracite_nltt_tj: string;
  bitum_nltt_tj: string;
  than_coc_nltt_tj: string;
  ko_nltt_tj: string;
  do_nltt_tj: string;
  fo_nltt_tj: string;
  lpg_nltt_tj: string;
  ng_nltt_tj: string;
  tong: string;
}

export interface PTSP {
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  ma_nganh_2: string;
  te_cap_2: string;
  ma_sp: string;
  ten_sp: string;
  don_vi: string;
  khoi_luong: string;
  hspt_co2: string;
  hspt_ch4: string;
  phat_thai_co2: string;
  phat_thai_ch4: string;
}

export interface TPT {
  nam: string;
  ten_doanh_nghiep: string;
  ma_so_doanh_nghiep: string;
  ma_cap_2: string;
  ten_nganh_cap_2: string;
  dien: string;
  qtnl_co2: string;
  qtnl_ch4: string;
  qtnl_n2o: string;
  pnl_co2: string;
  pnl_ch4: string;
  pnl_n2o: string;
  phat_tan_co2: string;

  phat_tan_ch4: string;
  phat_tan_n2o: string;
  qtcn_co2: string;
  qtcn_ch4: string;
  tong_tru_dien_co2: string;
  tong_tru_dien_ch4: string;
  tong_tru_dien_n2o: string;

  tong_co2: string;
  tong_ch4: string;
  tong_n2o: string;
  tong_quy_doi: string;
}

export interface PTNL {
  nam: string;
  ten_doanh_nghiep: string;
  ma_so_doanh_nghiep: string;
  ma_cap_2: string;
  ten_nganh_cap_2: string;
  he_so_su_dung_nang_luong: string;
  dien: string;
  antracite_co2: string;
  antracite_ch4: string;
  antracite_n2o: string;
  coke_co2: string;
  coke_ch4: string;
  coke_n2o: string;

  bitum_co2: string;
  bitum_ch4: string;
  bitum_n2o: string;
  do_co2: string;
  do_ch4: string;
  do_n2o: string;
  fo_co2: string;

  fo_ch4: string;
  fo_n2o: string;
  lpg_co2: string;
  lpg_ch4: string;

  lpg_n2o: string;
  khi_tu_nhien_co2: string;
  khi_tu_nhien_ch4: string;
  khi_tu_nhien_n2o: string;

  nang_luong_sinh_khoi_co2: string;
  nang_luong_sinh_khoi_ch4: string;
  nang_luong_sinh_khoi_n2o: string;
  tong_co2: string;

  tong_ch4: string;
  tong_n2o: string;
  tong: string;
}
