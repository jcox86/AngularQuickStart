import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like to see more?</label>
    <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialog {}

@Component ({
  selector: 'my-app',
  template: `
    <div [class.dark-theme]="isDarkTheme">
    <md-toolbar color="primary">
      <span>
        <md-icon class="icon-20">whatshot&nbsp;</md-icon>
        Hourglass Systems - Hall of Heroes
      </span>
      <button md-icon-button [md-menu-trigger-for]="menu">
        <md-icon>more_vert</md-icon>
      </button>
    </md-toolbar>
    <md-menu x-position="before" #menu="mdMenu">
      <button md-menu-item (click)="openDialog()">Settings</button>
      <button md-menu-item (click)="isDarkTheme=!isDarkTheme">Toggle Theme</button>
      <button md-menu-item>Help</button>
    </md-menu>
    <nav>
      <button md-raised-button routerLinkActive="active" routerLink="/bret"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Bret</button>
      <button md-raised-button routerLinkActive="active" routerLink="/jake"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Jake</button>
      <button md-raised-button routerLinkActive="active" routerLink="/jesus"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Jesus</button>
      <button md-raised-button routerLinkActive="active" routerLink="/ken"><md-icon>sentiment_very_dissatisfied</md-icon>&nbsp;Ken</button>
      <button md-raised-button routerLinkActive="active" routerLink="/kris"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Kris</button>
      <button md-raised-button routerLinkActive="active" routerLink="/mark"><md-icon>sentiment_very_satisfied</md-icon>&nbsp;Mark</button>
    </nav>
    <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent implements OnInit {
  title = 'Hourglass - Hall of Heroes';
  isDarkTheme = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showCustom();
    }, 1000)

    setTimeout(() => {
      this.showError();
    }, 2000)

    setTimeout(() => {
      this.showWarning();
    }, 3000)

    setTimeout(() => {
      this.showInfo();
    }, 4000)

    setTimeout(() => {
      this.showSuccess();
    }, 5000)
  }

  constructor(public toastr: ToastsManager, public dialog: MdDialog, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('Are you ready?', 'Get Ready');
  }

  showWarning() {
    this.toastr.warning('Total Zero (Ken)', 'To go from');
  }

  showInfo() {
    this.toastr.info('To something totally new?');
  }

  showCustom() {
    this.toastr.custom('<h3>Angular Playground</h3><br><p style="color: red">Welcome to the Hourglass Systems Angular Playground!</p><p>(I go away when you click me)</p>', null, {enableHTML: true, dismiss: 'click'});
  }
}
