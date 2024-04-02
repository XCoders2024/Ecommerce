import { Component } from '@angular/core';
import { IUser } from '../../models/iuser';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { ApiResponse } from '../../models/api-response';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  httpOption;
  user?: IUser;
  userImg;

  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    //very important : this is the correct way to send data in the header
    this.httpOption.headers = this.httpOption.headers.set(
      'useremail',
      sessionStorage.getItem('userEmail') as string
    );

    this.httpClient
      .get<ApiResponse>('http://localhost:3000/api/v1/profile', this.httpOption)
      .pipe(
        //we must do that to make him understand that the response is ApiResponse not HttpEvent<ApiResponse>
        map((event: HttpEvent<ApiResponse>) => {
          if (event instanceof HttpResponse) {
            return event.body as ApiResponse;
          }
        })
      )
      .subscribe(
        (response) => {
          console.log('Response:', response);
          if (response.message) {
            alert(response.message);
          }
          if (response) {
            this.user = response.user;
          }
        },
        (error) => {
          console.error('Error:', error);
          alert(error);
        }
      );
  }
}
