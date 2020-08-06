import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {CardComponent} from './components/card/card.component';
import {SharedModule} from '../shared/shared.module';
import { DialogTileInformationComponent } from './components/dialog-tile-information/dialog-tile-information.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    CardComponent,
    DialogTileInformationComponent,
    DetailPageComponent
  ],
  exports: [
    DashboardComponent,
    CardComponent
  ]
})
export class DashboardModule {
}
