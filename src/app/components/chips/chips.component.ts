import { Component, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';

const COMMA = 188;

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  @Input() title: string;  
  @Input() array: string[];

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add gear
    if ((value || '').trim()) {
      if(this.array) {
        this.array.push(value.trim());
      } else {
        this.array = [];
        this.array.push(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(item: string): void {
    let index = this.array.indexOf(item);

    if (index >= 0) {
      this.array.splice(index, 1);
    }
  }
  
  constructor() { }

}
