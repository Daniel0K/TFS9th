import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiErrorModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { SummaryFormComponent } from './store/summary-form/summary-form.component';
import { StoreProductsComponent } from './store/store-products/store-products.component';
import { StoreItemComponent } from './store/store-products/store-item/store-item.component';
import { SummaryItemComponent } from './store/summary-form/summary-item/summary-item.component';
import {
  TuiBadgeModule,
  TuiComboBoxModule, TuiDataListWrapperModule,
  TuiFieldErrorPipeModule, TuiFilterByInputPipeModule,
  TuiInputCountModule,
  TuiInputModule, TuiStringifyContentPipeModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeliveryFormComponent } from './store/delivery-form/delivery-form.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {IGoodsApiServiceToken} from "../shared/interfaces/IGoodsApiService";
import {GoodsApiService} from "../shared/services/goods-api.service";
import {HttpClientModule} from "@angular/common/http";
import {ICurrenciesListApiService, ICurrenciesListApiServiceToken} from "../shared/interfaces/ICurrenciesList";
import {ListCurrenciesApiService} from "../shared/services/list-currencies-api.service";
import {IExchangeApiServiceToken} from "../shared/interfaces/IExchange";
import {ExchangeRatesApiService} from "../shared/services/exchange-rates-api.service";

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    SummaryFormComponent,
    StoreProductsComponent,
    StoreItemComponent,
    SummaryItemComponent,
    DeliveryFormComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiBadgeModule,
    TuiInputCountModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    TuiLetModule,
    HttpClientModule,
    FormsModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: IGoodsApiServiceToken, useClass: GoodsApiService},
    {provide: ICurrenciesListApiServiceToken, useClass: ListCurrenciesApiService},
    {provide: IExchangeApiServiceToken, useClass: ExchangeRatesApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
