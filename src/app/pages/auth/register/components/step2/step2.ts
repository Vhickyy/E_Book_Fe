import { Component, inject, input, model } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../register-service';

@Component({
  selector: 'app-step2',
  imports: [ReactiveFormsModule],
  templateUrl: './step2.html',
  styleUrl: './step2.css',
})
export class Step2 {
  interest = ['Finances', 'Romance', 'Sciences', 'Life', 'Ecology', 'Others'];
  regService = inject(RegisterService);
  // step = model(0);
  // registerForm = input.required<FormGroup>();

  // changeStep(value: number) {
  //   this.step.set(value);
  // }
}
