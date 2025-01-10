import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  imports: [FormsModule, NgClass],
})
export class DataBindingComponent {
  public clickCounter: number = 0;
  public name: string = "";

  addClick(){
    this.clickCounter++;
  }

  resetCounter(){
    this.clickCounter = 0;
  }

}
