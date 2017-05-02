"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jake.cox on 4/21/2017.
 */
var core_1 = require("@angular/core");
var jake_service_1 = require("./jake.service");
var devextreme_angular_1 = require("devextreme-angular");
var JakeComponent = (function () {
    function JakeComponent(service) {
        this.service = service;
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
    JakeComponent.prototype.ngOnChanges = function () { };
    JakeComponent.prototype.getOrderDay = function (rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    };
    JakeComponent.prototype.orderHeaderFilter = function (data) {
        var _this = this;
        data.dataSource.postProcess = function (results) {
            results.push({
                text: 'Weekends',
                value: [
                    [_this.getOrderDay, '=', 0],
                    'or', [_this.getOrderDay, '=', 6]
                ]
            });
            return results;
        };
    };
    JakeComponent.prototype.clearFilter = function () {
        this.dataGrid.instance.clearFilter();
    };
    return JakeComponent;
}());
__decorate([
    core_1.ViewChild(devextreme_angular_1.DxDataGridComponent),
    __metadata("design:type", devextreme_angular_1.DxDataGridComponent)
], JakeComponent.prototype, "dataGrid", void 0);
JakeComponent = __decorate([
    core_1.Component({
        selector: 'jake',
        templateUrl: './jake.component.html',
        styleUrls: ['./jake.component.css'],
        providers: [jake_service_1.Service]
    }),
    __metadata("design:paramtypes", [jake_service_1.Service])
], JakeComponent);
exports.JakeComponent = JakeComponent;
//# sourceMappingURL=jake.component.js.map