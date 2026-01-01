import { Component, inject, model, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../../register-service';

@Component({
  selector: 'app-step3',
  imports: [],
  templateUrl: './step3.html',
  styleUrl: './step3.css',
})
export class Step3 {
  regService = inject(RegisterService);
}
