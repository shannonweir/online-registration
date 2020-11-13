import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '../user'
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  constructor(private registrationService: RegistrationService, private dialog: MatDialog) { }

  user: any = {};
  error: any = null;

  onSubmit(form: NgForm, ref: TemplateRef<any>) {
    this.registrationService.create(this.user).subscribe((user: User) => {
      this.error = null;
      console.log("User: " + user);
    },
      error => {
        console.log("error: " + JSON.stringify(error.error));
        this.error = error;
        this.error = error.error.message;
        console.log("error message: " + this.error);
      },
      () => {
        form.resetForm();
        this.registrationService.refreshUserDisplay("Refresh");
        this.openDialogWithRef(ref)
      }
    )
  }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }

}
