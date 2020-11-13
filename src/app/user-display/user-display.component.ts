import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  users = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.findAll();
    this.registrationService.refreshUserDisplayEvent
      .subscribe((data: string) => {
        this.findAll();
      })
  };

  findAll() {
    this.registrationService.findAll().subscribe((ret: any[]) => {
      console.log(ret);
      this.users = ret;
    })
  }
}
