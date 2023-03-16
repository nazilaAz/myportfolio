import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BothsideasideComponent } from './bothsideaside/bothsideaside.component';
import { RightasideComponent } from './rightaside/rightaside.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BothsideasideComponent,
    RightasideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
