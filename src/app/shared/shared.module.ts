import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SnackBarComponent } from "./components/snack-bar/snack-bar.component";
import { ErrorLabelComponent } from "./components/error-label/error-label.component";
import { AppMaterialModule } from "./material.module";
import { SafePipe } from "./pipes/safe.pipe";
import { ErrorMessagesPipe } from "./pipes/error-messages.pipe";

const exportComponents = [ErrorLabelComponent];
const exportModel = [AppMaterialModule];
const exportPipes = [SafePipe, ErrorMessagesPipe];
@NgModule({
  declarations: [
    SnackBarComponent,
    ErrorLabelComponent,
    SafePipe,
    ErrorMessagesPipe
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [exportComponents, exportModel, exportPipes]
})
export class SharedModule {}
