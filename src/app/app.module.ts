import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BothsideasideComponent } from './bothsideaside/bothsideaside.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ParticleComponent } from './particle/particle.component';
import { SkillComponent } from './skill/skill.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BothsideasideComponent,
    HomepageComponent,
    FooterComponent,
    ParticleComponent,
    SkillComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
