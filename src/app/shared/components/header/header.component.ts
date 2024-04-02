import { Component, OnInit } from '@angular/core';
import { HandleNavBarService } from '../../../user/services/handle-nav-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isUserLogged:boolean=false;

  
  constructor(private handleNavBarService:HandleNavBarService) {
    
    
  }
  ngOnInit(): void {
    // this.isUserLogged=this.handleNavBarService.isUserLogged();          //not updated always due to the changes in the userLogin component

    this.handleNavBarService.getLoggedStatus().subscribe((status)=>{       //updated always due to the changes in the userLogin component
      this.isUserLogged=status;
     }); 
  }

}
