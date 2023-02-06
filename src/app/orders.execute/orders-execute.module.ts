import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersExecuteComponent } from './orders.execute.component';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';
import { BillsDetailsComponent } from './components/bills-details/bills-details.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { OutstandingComponent } from './components/outstanding/outstanding.component';
import { ItemsCountComponent } from './components/bills-details/items-count/items-count.component';
import { TaxComponent } from './components/bills-details/tax/tax.component';
import { DeliveryAmountComponent } from './components/bills-details/delivery-amount/delivery-amount.component';
import { ClientInfoComponent } from './components/bills-details/client-info/client-info.component';
import { TotalAmountComponent } from './components/bills-details/total-amount/total-amount.component';
import { DiscountComponent } from './components/bills-details/discount/discount.component';
import { OrderItemsComponent } from './components/main/order-items/order-items.component';
import { SaveComponent } from './components/operators/save/save.component';
import { PrintComponent } from './components/operators/print/print.component';
import { NewOrderComponent } from './components/operators/new.order/new.order.component';
import { CancelOrderComponent } from './components/operators/cancel.order/cancel.order.component';
import { StackComponent } from './components/outstanding/stack/stack.component';
import { InputSearchComponent } from './components/search/input-search/input-search.component';



@NgModule({
  declarations: [
    OrdersExecuteComponent,
    SearchComponent,
    MainComponent,
    BillsDetailsComponent,
    OperatorsComponent,
    OutstandingComponent,
    ItemsCountComponent,
    TaxComponent,
    DeliveryAmountComponent,
    ClientInfoComponent,
    TotalAmountComponent,
    DiscountComponent,
    OrderItemsComponent,
    SaveComponent,
    PrintComponent,
    NewOrderComponent,
    CancelOrderComponent,
    StackComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersExecuteModule { }
