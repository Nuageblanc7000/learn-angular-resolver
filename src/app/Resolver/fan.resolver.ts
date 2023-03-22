import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FanService } from '../Services/fan.service';

@Injectable({
  providedIn: 'root',
})
export class FanResolver implements Resolve<any> {
  constructor(private _serviceFan: FanService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params['id'];
    return id ? this._serviceFan.getOneFan(id) : this._serviceFan.getAllFan();
  }
}
