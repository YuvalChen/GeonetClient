import {Component, OnInit} from '@angular/core';
import { RoleService} from './../services/role.service';
import {Role} from '../models/role'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  private title : number;
  private roles: Role;

  ngOnInit () {
    this.getRoles();
  }

  constructor(private roleService: RoleService) {}

  getRoles(): void {
      this.roleService.getAllRoles().subscribe(
      roles => this.title = roles,
      err => {console.log(err);});
  }
}
