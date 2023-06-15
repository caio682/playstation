import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

import { ColecoesComponent } from './header/colecoes/colecoes.component';
import { NavegarComponent } from './header/navegar/navegar.component';
import { NovidadesComponent } from './header/novidades/novidades.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '@coreui/angular';
import { CorouselComponent } from './header/corousel/corousel.component';
// import { CarouselModule } from './carousel/carousel.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    NovidadesComponent,
    ColecoesComponent,
    NavegarComponent,
    CorouselComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
