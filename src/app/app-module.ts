import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Listeproduit } from './listeproduit/listeproduit';
import { Ajouterproduit } from './ajouterproduit/ajouterproduit';
import { PagenotFound } from './pagenot-found/pagenot-found';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Navbar, Listeproduit, Ajouterproduit, PagenotFound],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
