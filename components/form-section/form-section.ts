
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-section.html',
  styleUrl: './form-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSection {
  form: FormGroup;
  submitted = false;
  successMessage = '';

  formConfig = [
    { key: 'firstName', label: 'First name', type: 'text', validators: [Validators.required] },
    { key: 'lastName', label: 'Last name', type: 'text', validators: [Validators.required] },
    { key: 'email', label: 'Email', type: 'email', validators: [Validators.required, Validators.email] },
    { key: 'phone', label: 'Phone', type: 'text', validators: [Validators.required, Validators.pattern('^[0-9\-\+\s()]{7,20}$')] },
    { key: 'address', label: 'Address', type: 'text', validators: [Validators.required] },
    { key: 'city', label: 'City', type: 'text', validators: [Validators.required] },
    { key: 'postal', label: 'Postal code', type: 'text', validators: [Validators.required] },
    { key: 'product', label: 'Product', type: 'text', validators: [Validators.required] },
    { key: 'quantity', label: 'Quantity', type: 'number', validators: [Validators.required, Validators.min(1)] },
    { key: 'notes', label: 'Notes', type: 'textarea', validators: [] },
  ];

  constructor(private fb: FormBuilder) {
    const group: any = {};
    this.formConfig.forEach((f) => (group[f.key] = ['', f.validators]));
    this.form = this.fb.group(group);
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.successMessage = 'Order received (mock): ' + JSON.stringify(this.form.value);
      console.log('Form submit', this.form.value);
      this.form.reset();
      this.submitted = false;
    } else {
      this.successMessage = '';
    }
  }

  control(key: string) {
    return this.form.get(key);
  }
}
