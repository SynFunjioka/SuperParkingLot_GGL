import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { regex, regexErrors, markFormGroupTouched } from '@app/shared';

import { ControlItem } from '@app/models/frontend';

import { NotificationService } from '@app/services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.sass']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  showSpinner: boolean = false;
  regexError = regexErrors;

  items!: ControlItem[];


  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.isInline = true;
    this.items = [
      { label: 'Uno', value: 1 },
      { label: 'Dos', value: 2 },
      { label: 'Tres', value: 3 },
      { label: 'Cuatro', value: 4 },
      { label: 'Cinco', value: 5 },
      { label: 'Seis', value: 6 },
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.number)
        ]
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  onPatchValue(): void {
    this.form.patchValue(
      {
        input: '967',
        password: 'AlanFlores123',
        autocomplete: 1,
        select: 2,
        checkboxes: [3],
        radios: 4,
        date: new Date().getTime(),
        dateRange: {
          from: new Date(2022, 5, 10).getTime(),
          to: new Date(2022, 11, 10).getTime(),
        }
      }
    );
  }

  organizarElemento() {
    this.isInline = !this.isInline;
  }

  onToggleDisabled(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onError(): void {
    this.notification.success("Succeful process!")
  }

  onSuccess(): void {
    this.notification.error("Ooops... Something went wrong");
  }

  onSubmit(): void {
    console.log("Submit");
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }
}
