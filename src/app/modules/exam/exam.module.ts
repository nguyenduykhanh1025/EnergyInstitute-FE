import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TTDNComponent } from './ttdn/ttdn.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {EXAM_ROUTES} from './exam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdnlComponent } from './tdnl/tdnl.component';
import { SpsxComponent } from './spsx/spsx.component';
import { PTSPComponent } from './ptsp/ptsp.component';
import { TPTComponent } from './tpt/tpt.component';
import { PTNLComponent } from './ptnl/ptnl.component';


@NgModule({
  declarations: [TTDNComponent, TdnlComponent, SpsxComponent, PTSPComponent, TPTComponent, PTNLComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(EXAM_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExamModule { }
