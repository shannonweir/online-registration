import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  @Output() refreshUserDisplayEvent = new EventEmitter<string>();

  refreshUserDisplay(msg: string) {
    this.refreshUserDisplayEvent.emit(msg);
  }

  constructor(private httpClient: HttpClient) { }

  public create(user: User) {
    return this.httpClient.post("http://localhost:8080/online-registration/api/user", user);
  }

  public findAll() {
    return this.httpClient.get("http://localhost:8080/online-registration/api/users");
  }

}
