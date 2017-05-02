"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jake.cox on 4/28/2017.
 */
var core_1 = require("@angular/core");
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());
exports.Customer = Customer;
var customers = [{
        'ID': 1,
        "CompanyName": "Super Mart of the West",
        "Address": "702 SW 8th Street",
        "City": "Bentonville",
        "State": "Arkansas",
        "Zipcode": 72716,
        "Phone": "(800) 555-2797",
        "Fax": "(800) 555-2171",
        "Website": "http://www.nowebsitesupermart.com"
    }, {
        "ID": 2,
        "CompanyName": "Electronics Depot",
        "Address": "2455 Paces Ferry Road NW",
        "City": "Atlanta",
        "State": "Georgia",
        "Zipcode": 30339,
        "Phone": "(800) 595-3232",
        "Fax": "(800) 595-3231",
        "Website": "http://www.nowebsitedepot.com"
    }, {
        "ID": 3,
        "CompanyName": "K&S Music",
        "Address": "1000 Nicllet Mall",
        "City": "Minneapolis",
        "State": "Minnesota",
        "Zipcode": 55403,
        "Phone": "(612) 304-6073",
        "Fax": "(612) 304-6074",
        "Website": "http://www.nowebsitemusic.com"
    }, {
        "ID": 4,
        "CompanyName": "Tom's Club",
        "Address": "999 Lake Drive",
        "City": "Issaquah",
        "State": "Washington",
        "Zipcode": 98027,
        "Phone": "(800) 955-2292",
        "Fax": "(800) 955-2293",
        "Website": "http://www.nowebsitetomsclub.com"
    }, {
        "ID": 5,
        "CompanyName": "E-Mart",
        "Address": "3333 Beverly Rd",
        "City": "Hoffman Estates",
        "State": "Illinois",
        "Zipcode": 60179,
        "Phone": "(847) 286-2500",
        "Fax": "(847) 286-2501",
        "Website": "http://www.nowebsiteemart.com"
    }, {
        "ID": 6,
        "CompanyName": "Walters",
        "Address": "200 Wilmot Rd",
        "City": "Deerfield",
        "State": "Illinois",
        "Zipcode": 60015,
        "Phone": "(847) 940-2500",
        "Fax": "(847) 940-2501",
        "Website": "http://www.nowebsitewalters.com"
    }, {
        "ID": 7,
        "CompanyName": "StereoShack",
        "Address": "400 Commerce S",
        "City": "Fort Worth",
        "State": "Texas",
        "Zipcode": 76102,
        "Phone": "(817) 820-0741",
        "Fax": "(817) 820-0742",
        "Website": "http://www.nowebsiteshack.com"
    }, {
        "ID": 8,
        "CompanyName": "Circuit Town",
        "Address": "2200 Kensington Court",
        "City": "Oak Brook",
        "State": "Illinois",
        "Zipcode": 60523,
        "Phone": "(800) 955-2929",
        "Fax": "(800) 955-9392",
        "Website": "http://www.nowebsitecircuittown.com"
    }, {
        "ID": 9,
        "CompanyName": "Premier Buy",
        "Address": "7601 Penn Avenue South",
        "City": "Richfield",
        "State": "Minnesota",
        "Zipcode": 55423,
        "Phone": "(612) 291-1000",
        "Fax": "(612) 291-2001",
        "Website": "http://www.nowebsitepremierbuy.com"
    }, {
        "ID": 10,
        "CompanyName": "ElectrixMax",
        "Address": "263 Shuman Blvd",
        "City": "Naperville",
        "State": "Illinois",
        "Zipcode": 60563,
        "Phone": "(630) 438-7800",
        "Fax": "(630) 438-7801",
        "Website": "http://www.nowebsiteelectrixmax.com"
    }, {
        "ID": 11,
        "CompanyName": "Video Emporium",
        "Address": "1201 Elm Street",
        "City": "Dallas",
        "State": "Texas",
        "Zipcode": 75270,
        "Phone": "(214) 854-3000",
        "Fax": "(214) 854-3001",
        "Website": "http://www.nowebsitevideoemporium.com"
    }, {
        "ID": 12,
        "CompanyName": "Screen Shop",
        "Address": "1000 Lowes Blvd",
        "City": "Mooresville",
        "State": "North Carolina",
        "Zipcode": 28117,
        "Phone": "(800) 445-6937",
        "Fax": "(800) 445-6938",
        "Website": "http://www.nowebsitescreenshop.com"
    }];
var Order = (function () {
    function Order() {
    }
    return Order;
}());
exports.Order = Order;
var orders = [{
        "ID": 1,
        "OrderNumber": 35703,
        "OrderDate": "2014/04/10",
        "SaleAmount": 11800,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Los Angeles",
        "Employee": "Harv Mudd"
    }, {
        "ID": 4,
        "OrderNumber": 35711,
        "OrderDate": "2014/01/12",
        "SaleAmount": 16050,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "San Jose",
        "Employee": "Jim Packard"
    }, {
        "ID": 5,
        "OrderNumber": 35714,
        "OrderDate": "2014/01/22",
        "SaleAmount": 14750,
        "Terms": "15 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 7,
        "OrderNumber": 35983,
        "OrderDate": "2014/02/07",
        "SaleAmount": 3725,
        "Terms": "15 Days",
        "CustomerStoreState": "Colorado",
        "CustomerStoreCity": "Denver",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 9,
        "OrderNumber": 36987,
        "OrderDate": "2014/03/11",
        "SaleAmount": 14200,
        "Terms": "15 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 11,
        "OrderNumber": 38466,
        "OrderDate": "2014/03/01",
        "SaleAmount": 7800,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Los Angeles",
        "Employee": "Harv Mudd"
    }, {
        "ID": 14,
        "OrderNumber": 39420,
        "OrderDate": "2014/02/15",
        "SaleAmount": 20500,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "San Jose",
        "Employee": "Jim Packard"
    }, {
        "ID": 15,
        "OrderNumber": 39874,
        "OrderDate": "2014/02/04",
        "SaleAmount": 9050,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 18,
        "OrderNumber": 42847,
        "OrderDate": "2014/02/15",
        "SaleAmount": 20400,
        "Terms": "30 Days",
        "CustomerStoreState": "Wyoming",
        "CustomerStoreCity": "Casper",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 19,
        "OrderNumber": 43982,
        "OrderDate": "2014/05/29",
        "SaleAmount": 6050,
        "Terms": "30 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 29,
        "OrderNumber": 56272,
        "OrderDate": "2014/02/06",
        "SaleAmount": 15850,
        "Terms": "30 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 30,
        "OrderNumber": 57429,
        "OrderDate": "2014/05/16",
        "SaleAmount": 11050,
        "Terms": "30 Days",
        "CustomerStoreState": "Arizona",
        "CustomerStoreCity": "Phoenix",
        "Employee": "Clark Morgan"
    }, {
        "ID": 32,
        "OrderNumber": 58292,
        "OrderDate": "2014/05/13",
        "SaleAmount": 13500,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Los Angeles",
        "Employee": "Harv Mudd"
    }, {
        "ID": 36,
        "OrderNumber": 62427,
        "OrderDate": "2014/01/27",
        "SaleAmount": 23500,
        "Terms": "15 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 39,
        "OrderNumber": 65977,
        "OrderDate": "2014/02/05",
        "SaleAmount": 2550,
        "Terms": "15 Days",
        "CustomerStoreState": "Wyoming",
        "CustomerStoreCity": "Casper",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 40,
        "OrderNumber": 66947,
        "OrderDate": "2014/03/23",
        "SaleAmount": 3500,
        "Terms": "15 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 42,
        "OrderNumber": 68428,
        "OrderDate": "2014/04/10",
        "SaleAmount": 10500,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Los Angeles",
        "Employee": "Harv Mudd"
    }, {
        "ID": 43,
        "OrderNumber": 69477,
        "OrderDate": "2014/03/09",
        "SaleAmount": 14200,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Anaheim",
        "Employee": "Harv Mudd"
    }, {
        "ID": 46,
        "OrderNumber": 72947,
        "OrderDate": "2014/01/14",
        "SaleAmount": 13350,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 47,
        "OrderNumber": 73088,
        "OrderDate": "2014/03/25",
        "SaleAmount": 8600,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Reno",
        "Employee": "Clark Morgan"
    }, {
        "ID": 50,
        "OrderNumber": 76927,
        "OrderDate": "2014/04/27",
        "SaleAmount": 9800,
        "Terms": "30 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 51,
        "OrderNumber": 77297,
        "OrderDate": "2014/04/30",
        "SaleAmount": 10850,
        "Terms": "30 Days",
        "CustomerStoreState": "Arizona",
        "CustomerStoreCity": "Phoenix",
        "Employee": "Clark Morgan"
    }, {
        "ID": 56,
        "OrderNumber": 84744,
        "OrderDate": "2014/02/10",
        "SaleAmount": 4650,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 57,
        "OrderNumber": 85028,
        "OrderDate": "2014/05/17",
        "SaleAmount": 2575,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Reno",
        "Employee": "Clark Morgan"
    }, {
        "ID": 59,
        "OrderNumber": 87297,
        "OrderDate": "2014/04/21",
        "SaleAmount": 14200,
        "Terms": "30 Days",
        "CustomerStoreState": "Wyoming",
        "CustomerStoreCity": "Casper",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 60,
        "OrderNumber": 88027,
        "OrderDate": "2014/02/14",
        "SaleAmount": 13650,
        "Terms": "30 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 65,
        "OrderNumber": 94726,
        "OrderDate": "2014/05/22",
        "SaleAmount": 20500,
        "Terms": "15 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "San Jose",
        "Employee": "Jim Packard"
    }, {
        "ID": 66,
        "OrderNumber": 95266,
        "OrderDate": "2014/03/10",
        "SaleAmount": 9050,
        "Terms": "15 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 69,
        "OrderNumber": 98477,
        "OrderDate": "2014/01/01",
        "SaleAmount": 23500,
        "Terms": "15 Days",
        "CustomerStoreState": "Wyoming",
        "CustomerStoreCity": "Casper",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 70,
        "OrderNumber": 99247,
        "OrderDate": "2014/02/08",
        "SaleAmount": 2100,
        "Terms": "15 Days",
        "CustomerStoreState": "Utah",
        "CustomerStoreCity": "Salt Lake City",
        "Employee": "Clark Morgan"
    }, {
        "ID": 78,
        "OrderNumber": 174884,
        "OrderDate": "2014/04/10",
        "SaleAmount": 7200,
        "Terms": "30 Days",
        "CustomerStoreState": "Colorado",
        "CustomerStoreCity": "Denver",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 81,
        "OrderNumber": 188877,
        "OrderDate": "2014/02/11",
        "SaleAmount": 8750,
        "Terms": "30 Days",
        "CustomerStoreState": "Arizona",
        "CustomerStoreCity": "Phoenix",
        "Employee": "Clark Morgan"
    }, {
        "ID": 82,
        "OrderNumber": 191883,
        "OrderDate": "2014/02/05",
        "SaleAmount": 9900,
        "Terms": "30 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Los Angeles",
        "Employee": "Harv Mudd"
    }, {
        "ID": 83,
        "OrderNumber": 192474,
        "OrderDate": "2014/01/21",
        "SaleAmount": 12800,
        "Terms": "30 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "Anaheim",
        "Employee": "Harv Mudd"
    }, {
        "ID": 84,
        "OrderNumber": 193847,
        "OrderDate": "2014/03/21",
        "SaleAmount": 14100,
        "Terms": "30 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "San Diego",
        "Employee": "Harv Mudd"
    }, {
        "ID": 85,
        "OrderNumber": 194877,
        "OrderDate": "2014/03/06",
        "SaleAmount": 4750,
        "Terms": "30 Days",
        "CustomerStoreState": "California",
        "CustomerStoreCity": "San Jose",
        "Employee": "Jim Packard"
    }, {
        "ID": 86,
        "OrderNumber": 195746,
        "OrderDate": "2014/05/26",
        "SaleAmount": 9050,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Las Vegas",
        "Employee": "Harv Mudd"
    }, {
        "ID": 87,
        "OrderNumber": 197474,
        "OrderDate": "2014/03/02",
        "SaleAmount": 6400,
        "Terms": "30 Days",
        "CustomerStoreState": "Nevada",
        "CustomerStoreCity": "Reno",
        "Employee": "Clark Morgan"
    }, {
        "ID": 88,
        "OrderNumber": 198746,
        "OrderDate": "2014/05/09",
        "SaleAmount": 15700,
        "Terms": "30 Days",
        "CustomerStoreState": "Colorado",
        "CustomerStoreCity": "Denver",
        "Employee": "Todd Hoffman"
    }, {
        "ID": 91,
        "OrderNumber": 214222,
        "OrderDate": "2014/02/08",
        "SaleAmount": 11050,
        "Terms": "30 Days",
        "CustomerStoreState": "Arizona",
        "CustomerStoreCity": "Phoenix",
        "Employee": "Clark Morgan"
    }];
var Service = (function () {
    function Service() {
    }
    Service.prototype.getCustomers = function () {
        return customers;
    };
    Service.prototype.getOrders = function () {
        return orders;
    };
    return Service;
}());
Service = __decorate([
    core_1.Injectable()
], Service);
exports.Service = Service;
//# sourceMappingURL=jake.service.js.map