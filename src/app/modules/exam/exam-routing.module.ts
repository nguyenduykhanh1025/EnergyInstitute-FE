import { Routes } from "@angular/router";
import { TTDNComponent } from "./ttdn/ttdn.component";
import { TdnlComponent } from "./tdnl/tdnl.component";
import { SpsxComponent } from "./spsx/spsx.component";
import { PTSPComponent } from "./ptsp/ptsp.component";
import { TPTComponent } from "./tpt/tpt.component";
import { PTNLComponent } from "./ptnl/ptnl.component";

export const EXAM_ROUTES: Routes = [
  {
    path: "TTDN",
    component: TTDNComponent
  },
  {
    path: "TDNL",
    component: TdnlComponent
  },
  {
    path: "SPSX",
    component: SpsxComponent
  },
  {
    path: "PTSP",
    component: PTSPComponent
  },
  {
    path: "TPT",
    component: TPTComponent
  },
  {
    path: "PTNL",
    component: PTNLComponent
  }
];
