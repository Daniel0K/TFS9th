import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { SummaryFormComponent } from './store/summary-form/summary-form.component';
import { StoreProductsComponent } from './store/store-products/store-products.component';
import { StoreItemComponent } from './store/store-products/store-item/store-item.component';
import { SummaryItemComponent } from './store/summary-form/summary-item/summary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    SummaryFormComponent,
    StoreProductsComponent,
    StoreItemComponent,
    SummaryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
