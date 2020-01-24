import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  @ViewChild('passwordComponent', { static: true })
  passwordComponent: MatPasswordStrengthComponent;

  constructor() {}

  ngOnInit() {
    this.addUserForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      agreed: new FormControl('', Validators.requiredTrue)
    });
    this.addUserForm.controls.password.setErrors({ incorrect: true });

    this.passwordComponent.passwordFormControl.valueChanges.subscribe(() => {
      console.log(
        'passwordFormControl form control = ',
        this.passwordComponent.passwordFormControl
      );
    });

    this.passwordComponent.passwordConfirmationFormControl.valueChanges.subscribe(
      () => {
        console.log(
          'passwordFormControl form control = ',
          this.passwordComponent.passwordConfirmationFormControl
        );
      }
    );
  }

  get nome() {
    return this.addUserForm.get('nome');
  }

  get email() {
    return this.addUserForm.get('email');
  }

  get password() {
    return this.addUserForm.get('password');
  }

  onSubmit() {
    console.log(this.addUserForm.value);
  }

  // method to use password strength in validation
  onStrengthChanged(strength: number) {
    if (strength < 100) {
      this.addUserForm.controls.password.setErrors({ incorrect: true });
    } else {
      this.addUserForm.controls.password.setErrors(null);
    }
    console.log(this.addUserForm.controls.password.value);
  }
}
