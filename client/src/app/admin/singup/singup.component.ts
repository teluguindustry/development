import { Component, OnInit } from '@angular/core';

import { UserService } from "../../shared/user.service";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [UserService]
})
export class SingupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
