import { Component, Input } from '@angular/core';
import { Link } from 'src/app/interface/Link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() links!: Link[];
}
