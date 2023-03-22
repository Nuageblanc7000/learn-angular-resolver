import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Fan } from '../interface/Fan.interface';

@Injectable({
  providedIn: 'root',
})
export class FanService {
  listFans: Fan[] = [];
  //CRUD

  getAllFan(): Fan[] {
    return this.listFans;
  }
  getOneFan(id: string): Fan | undefined {
    return this.listFans.find((f) => f.id == id);
  }
  createFan(fan: Fan): void {
    this.listFans.push({ ...fan, id: crypto.randomUUID() });
  }
  updateFan(fan: Fan): void {
    console.log(fan);
    this.listFans = this.listFans.map((f) => (f.id == fan.id ? fan : f));
  }

  deleteFan(id: string): void {
    this.listFans = this.listFans.filter((f) => f.id !== id);
  }

  constructor() {}
}
