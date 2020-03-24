import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "errorMessages"
})
export class ErrorMessagesPipe implements PipeTransform {
  label: string;
  transform(value: Object, label:string): Array<string> {
    this.label = label;
    if (Array.isArray(value)) {
      return value;
    }
    return this.parseErrorObject(value);
  }

  private parseErrorObject(value: Object): string[] {
    let errors = [];
    for (const key in value) {
      if (this.knownErrors()[key]) {
        const error_messages = this.knownErrors()[key].call(this, value[key]);
        errors = errors.concat(error_messages);
      }
    }
    return errors;
  }

  private knownErrors(): Object {
    return {
      required: this.requiredError,
      email: this.emailError,
      formatEmail: this.emailError,
      minlength: this.minLength,
      maxlength: this.maxLength,
      phoneNumber: this.phoneNumber,
      duplicateName: this.duplicateName,
      pattern: this.patternError
    };
  }

  private requiredError(_error): string {
    return `${this.label} không được để trống`;
  }
  private emailError(error): string {
    return `${this.label} sai định dạng`;
  }
  private minLength(error): string {
    return `${this.label} tối thiểu ${error.requiredLength} ký tự`;
  }
  private maxLength(error): string {
    return `${this.label} không quá ${error.requiredLength} ký tự`;
  }
  private phoneNumber(error): string {
    return `${this.label} không đúng định dạng`;
  }

  private patternError(error): string {
    // /${error['requiredPattern']}/
    return `${this.label} không đúng định dạng`;
  }

  private duplicateName(_error): string {
    return `Đã trùng với giá trị ${_error.valueDuplicate}`;
  }
}
