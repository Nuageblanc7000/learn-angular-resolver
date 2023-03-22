import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFanComponent } from './create-fan/create-fan.component';
import { DetailFanComponent } from './fan-container/detail-fan/detail-fan.component';
import { FanContainerComponent } from './fan-container/fan-container.component';
import { FanListComponent } from './fan-container/fan-list/fan-list.component';
import { FanResolver } from './Resolver/fan.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fan',
    pathMatch: 'full',
  },
  {
    path: 'fan',
    component: FanContainerComponent,
    children: [
      {
        path: 'fan-create',
        component: CreateFanComponent,
      },
      {
        path: 'fan-list',
        resolve: { fans: FanResolver },
        component: FanListComponent,
      },
      {
        path: 'fan-detail/:id',
        resolve: { fan: FanResolver },
        component: DetailFanComponent,
      },
      {
        path: 'fan-update/:id',
        resolve: { fan: FanResolver },
        component: CreateFanComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
