import { Component } from '@angular/core';
import { HandleNavBarService } from '../../services/handle-nav-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrl: './user-logout.component.css'
})
export class UserLogoutComponent {

constructor(private handleNavBarService:HandleNavBarService,private router:Router) {

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("role");
  this.handleNavBarService.isLoggedSubject.next(false);
  router.navigate([""]);
}


}
