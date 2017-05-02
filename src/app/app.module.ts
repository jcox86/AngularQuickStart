import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule }   from './app-routing.module';
import { DevExtremeModule } from 'devextreme-angular';

import { AppComponent, SettingsDialog }  from './app.component';
import { CoreModule }    from './Infrastructure/Core/core.module';
import { JakeComponent } from './Features/Jake/jake.component';
import {ToastModule, ToastOptions} from 'ng2-toastr';
import {CustomToastr} from "./custom-toastr";
import {CovalentCoreModule} from "@covalent/core";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    BrowserAnimationsModule,
    MaterialModule,
    DevExtremeModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    ToastModule.forRoot(),
    CovalentCoreModule
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog
  ],
  declarations: [
    AppComponent,
    SettingsDialog,
    JakeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ {provide: ToastOptions, useClass: CustomToastr} ],
})

export class AppModule { }
