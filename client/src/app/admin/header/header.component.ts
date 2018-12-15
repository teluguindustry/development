import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails;
  profileUrl: string = "/assets/img/user.png";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
      }
    )
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/admin']); 
  }

}
