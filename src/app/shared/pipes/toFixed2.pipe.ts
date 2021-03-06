import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toFixed2",
})
export class ToFixed2Pipe implements PipeTransform {
  constructor() {}
  transform(data: string) {
    return Number(data) == 0 ? 0 : Number(data).toFixed(2);
  }
}
