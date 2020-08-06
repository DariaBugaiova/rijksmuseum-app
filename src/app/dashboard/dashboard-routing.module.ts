import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {DetailPageComponent} from './components/detail-page/detail-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail-page/:id', component: DetailPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
