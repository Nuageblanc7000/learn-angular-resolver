import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/interface/Fan.interface';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss'],
})
export class FanListComponent {
  fans!: Fan[];

  constructor(private _ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.fans = this._ac.snapshot.data['fans'];
  }
}
