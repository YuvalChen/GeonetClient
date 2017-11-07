import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Role } from './../models/role';

@Injectable()
export class RoleService {

  constructor(private http: Http) {}

  private rolesUrl = 'http://localhost:49485/roles';

  getAllRoles(): Observable<number> {
    return this.http.get(this.rolesUrl).map((res:Response) => res.json());
  }
}

