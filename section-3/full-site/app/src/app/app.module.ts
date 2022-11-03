import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SearchBarComponent } from './child.components/search-bar/search.bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleBarComponent } from './child.components/title-bar/title-bar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CardTitleComponent } from './child.components/card-title/card-title.component';
import { CardComponent } from './components/card/card.component';
import { ResponsiveProfileComponent } from './components/responsive.profile/responsive.profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LoginComponent,
    HomePageComponent,
    ProfilComponent,
    SearchBarComponent,
    TitleBarComponent,
    HeaderComponent,
    NewsletterComponent,
    CardTitleComponent,
    CardComponent,
    ResponsiveProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }