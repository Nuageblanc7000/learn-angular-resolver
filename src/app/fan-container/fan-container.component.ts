import { Component } from '@angular/core';
import { Fan } from '../interface/Fan.interface';
import { Link } from '../interface/Link';
import { FanService } from '../Services/fan.service';

@Component({
  selector: 'app-fan-container',
  templateUrl: './fan-container.component.html',
  styleUrls: ['./fan-container.component.scss'],
})
export class FanContainerComponent {
  fans!: Fan[];
  links: Link[] = [
    {
      label: 'fan-list',
      url: 'fan-list',
    },
    {
      label: 'fan-create',
      url: 'fan-create',
    },
  ];
  //injection
  constructor(private _service: FanService) {}
  ngOnInit(): void {
    this.fans = this._service.getAllFan();
  }
}
