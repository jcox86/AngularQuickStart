"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var app_routing_module_1 = require("./app-routing.module");
var devextreme_angular_1 = require("devextreme-angular");
var app_component_1 = require("./app.component");
var core_module_1 = require("./Infrastructure/Core/core.module");
var jake_component_1 = require("./Features/Jake/jake.component");
var ng2_toastr_1 = require("ng2-toastr");
var custom_toastr_1 = require("./custom-toastr");
var core_2 = require("@covalent/core");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            material_1.MaterialModule,
            devextreme_angular_1.DevExtremeModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            core_module_1.CoreModule,
            ng2_toastr_1.ToastModule.forRoot(),
            core_2.CovalentCoreModule
        ],
        entryComponents: [
            app_component_1.AppComponent,
            app_component_1.SettingsDialog
        ],
        declarations: [
            app_component_1.AppComponent,
            app_component_1.SettingsDialog,
            jake_component_1.JakeComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: ng2_toastr_1.ToastOptions, useClass: custom_toastr_1.CustomToastr }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map