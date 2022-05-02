/*
import { Component, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';

export interface SelectItem {
  value: string | number;
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: DropdownComponent,
    },
  ],
})
export class DropdownComponent implements SelectControlValueAccessor {
  @Input() options: SelectItem[] = [];
  @Input() selectedValue: any = null;

  @Output() selectionChanged: EventEmitter<string | number> = new EventEmitter<string | number>();

  value: string | number = '';
  disabled = false;
  touched = false;

  private onTouched!: () => void;
  private onChanged!: (val:any) => void;

  constructor() {
    this.writeValue(this.selectedValue);
  }

  compareWith: (o1: any, o2: any) => boolean;
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.key === c2.key : c1 === c2;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
*/
