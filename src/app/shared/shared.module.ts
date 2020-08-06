import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {OrderByComponent} from './components/order-by/order-by.component';
import {SearchArtComponent} from './components/search-art/search-art.component';
import {MaterialModule} from '../material.module';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    OrderByComponent,
    SearchArtComponent,
    PaginationComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    OrderByComponent,
    SearchArtComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}
