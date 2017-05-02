/**
 * Created by jake.cox on 4/21/2017.
 */
import { Component, OnChanges, ViewChild } from '@angular/core';
import { Customer, Service, Order } from './jake.service';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
  selector: 'jake',
  templateUrl: './jake.component.html',
  styleUrls: ['./jake.component.css'],
  providers: [Service]
})
export class JakeComponent implements OnChanges {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  heroes: Customer[];
  orders: Order[];
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;

  constructor(private service: Service) {
    this.heroes = service.getCustomers();
    this.orders = service.getOrders();
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
      key: 'auto',
      name: 'Immediately'
    }, {
      key: 'onClick',
      name: 'On Button Click'
    }];
    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000]
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000]
      ]
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000]
      ]
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000]
      ]
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000]
    }];
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  }

  ngOnChanges(): void { }

  getOrderDay(rowData: any) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  orderHeaderFilter(data: any) {
    data.dataSource.postProcess = (results: any) => {
      results.push({
        text: 'Weekends',
        value: [
          [this.getOrderDay, '=', 0],
          'or', [this.getOrderDay, '=', 6]
        ]
      });

      return results;
    };
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}
