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
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var SettingsDialog = (function () {
    function SettingsDialog() {
    }
    return SettingsDialog;
}());
SettingsDialog = __decorate([
    core_1.Component({
        selector: 'settings-dialog',
        template: "\n    <label>Would you like to see more?</label>\n    <md-slide-toggle></md-slide-toggle>\n  "
    })
], SettingsDialog);
exports.SettingsDialog = SettingsDialog;
var AppComponent = (function () {
    function AppComponent(toastr, dialog, vcr) {
        this.toastr = toastr;
        this.dialog = dialog;
        this.vcr = vcr;
        this.title = 'Hourglass - Hall of Heroes';
        this.isDarkTheme = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showCustom();
        }, 1000);
        setTimeout(function () {
            _this.showError();
        }, 2000);
        setTimeout(function () {
            _this.showWarning();
        }, 3000);
        setTimeout(function () {
            _this.showInfo();
        }, 4000);
        setTimeout(function () {
            _this.showSuccess();
        }, 5000);
    };
    AppComponent.prototype.openDialog = function () {
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = this.vcr;
        this.dialog.open(SettingsDialog, config);
    };
    AppComponent.prototype.showSuccess = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    AppComponent.prototype.showError = function () {
        this.toastr.error('Are you ready?', 'Get Ready');
    };
    AppComponent.prototype.showWarning = function () {
        this.toastr.warning('Total Zero (Ken)', 'To go from');
    };
    AppComponent.prototype.showInfo = function () {
        this.toastr.info('To something totally new?');
    };
    AppComponent.prototype.showCustom = function () {
        this.toastr.custom('<h3>Angular Playground</h3><br><p style="color: red">Welcome to the Hourglass Systems Angular Playground!</p><p>(I go away when you click me)</p>', null, { enableHTML: true, dismiss: 'click' });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div [class.dark-theme]=\"isDarkTheme\">\n    <md-toolbar color=\"primary\">\n      <span>\n        <md-icon class=\"icon-20\">whatshot&nbsp;</md-icon>\n        Hourglass Systems - Hall of Heroes\n      </span>\n      <button md-icon-button [md-menu-trigger-for]=\"menu\">\n        <md-icon>more_vert</md-icon>\n      </button>\n    </md-toolbar>\n    <md-menu x-position=\"before\" #menu=\"mdMenu\">\n      <button md-menu-item (click)=\"openDialog()\">Settings</button>\n      <button md-menu-item (click)=\"isDarkTheme=!isDarkTheme\">Toggle Theme</button>\n      <button md-menu-item>Help</button>\n    </md-menu>\n    <nav>\n      <button md-raised-button routerLinkActive=\"active\" routerLink=\"/bret\"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Bret</button>\n      <button md-raised-button routerLinkActive=\"active\" routerLink=\"/jake\"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Jake</button>\n      <button md-raised-button routerLinkActive=\"active\" routerLink=\"/jesus\"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Jesus</button>\n      <button md-raised-button routerLinkActive=\"active\" routerLink=\"/ken\"><md-icon>sentiment_very_dissatisfied</md-icon>&nbsp;Ken</button>\n      <button md-raised-button routerLinkActive=\"active\" routerLink=\"/kris\"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Kris</button>\n      <button md-raised-button routerLinkActive=\"active\" routerLink=\"/mark\"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Mark</button>\n    </nav>\n    <router-outlet></router-outlet>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [ng2_toastr_1.ToastsManager, material_1.MdDialog, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map