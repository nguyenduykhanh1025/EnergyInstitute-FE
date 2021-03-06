import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { map } from "rxjs/operators";
import { params_get_enterprises } from "src/app/shared/modules/enterprise";
import { HttpParams } from "@angular/common/http";
import { params_get_energy_consumption } from "src/app/shared/modules/energy_consumption";
import { params_get_product } from "src/app/shared/modules/product";
import { params_get_emission_products } from "src/app/shared/modules/emission_products";
import { params_get_emission_energies } from "src/app/shared/modules/emission_energies";
import { params_get_emission_sum } from "src/app/shared/modules/emission_sum";

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
  readonly urlSPSXV2 = "admin/products";
  readonly urlPTSPV2 = "admin/emission_products";
  readonly urlPTNLV2 = "admin/emission_energies";
  readonly urlTPTV2 = "admin/emission_sum";

  constructor(private apiService: ApiService) {}

  getTTDNV2(data: params_get_enterprises) {
    const param = new HttpParams()
      .set("year", `${data.year}`)
      .set("province", data.province)
      .set("page", `${data.page}`)
      .set("amount", `${data.amount}`)
      .set("sector", data.sector);

    return this.apiService.get(this.urlTTDNV2, param).pipe(map((res) => res));
  }

  xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Combining Diacritical Marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, hỏi, ngã, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)

    return str;
  }

  getTDNLV2(data: params_get_energy_consumption) {
    const params = new HttpParams()
      .set("year", data.year)
      .set("page", data.page)
      .set("amount", data.amount)
      .set("sector", data.sector);

    return this.apiService.get(this.urlTDNLV2, params).pipe(map((res) => res));
  }

  getSPSXV2(data: params_get_product) {
    const params = new HttpParams()
      .set("year", data.year)
      .set("page", data.page)
      .set("amount", data.amount)
      .set("sector", data.sector);

    return this.apiService.get(this.urlSPSXV2, params).pipe(map((res) => res));
  }

  getPTSPV2(data: params_get_emission_products) {
    const params = new HttpParams()
      .set("year", data.year)
      .set("page", data.page)
      .set("amount", data.amount)
      .set("sector", data.sector);

    return this.apiService.get(this.urlPTSPV2, params).pipe(map((res) => res));
  }

  getPTNLV2(data: params_get_emission_energies) {
    const params = new HttpParams()
      .set("year", data.year)
      .set("page", data.page)
      .set("amount", data.amount);

    return this.apiService.get(this.urlPTNLV2, params).pipe(map((res) => res));
  }

  getTPTV2(data: params_get_emission_sum) {
    const params = new HttpParams()
      .set("year", data.year)
      .set("page", data.page)
      .set("amount", data.amount)
      .set("sector", data.sector);

    return this.apiService.get(this.urlTPTV2, params).pipe(map((res) => res));
  }
}

export interface TPT_V2 {
  id: number;
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

export interface PTNL_V2 {
  id: number;
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
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

export interface PTSP_V2 {
  id: number;
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  ma_nganh_2: number;
  te_cap_2: string;
  ma_sp: string;
  ten_sp: string;
  don_vi: number;
  khoi_luong: string;
  hspt_co2: string;
  hspt_ch4: string;
  phat_thai_co2: number;
  phat_thai_ch4: string;
}

export interface SPSX_V2 {
  id: number;
  nam: string;
  ma_so_doanh_nghiep: string;
  ten_doanh_nghiep: string;
  stt: number;
  ma_san_pham: string;
  ten_san_pham: string;
  ma_cap_2: string;
  ten_nganh_cap_2: number;
  don_vi: string;
  so_luong: string;
  gtsx: string;
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
