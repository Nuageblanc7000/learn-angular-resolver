import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/interface/Fan.interface';

@Component({
  selector: 'app-detail-fan',
  templateUrl: './detail-fan.component.html',
  styleUrls: ['./detail-fan.component.scss'],
})
export class DetailFanComponent {
  fan!: Fan;
  constructor(private _ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.fan = this._ac.snapshot.data['fan'];
  }
}
