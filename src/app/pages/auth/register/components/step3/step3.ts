import { Component, inject } from '@angular/core';
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
