import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BackgroundComponent } from './static/background/background.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CorpusimagesComponent } from './components/corpusimages/corpusimages.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BackgroundComponent,
    HomepageComponent,
    CorpusimagesComponent,
    EmailFormComponent,
    OurWorkComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
