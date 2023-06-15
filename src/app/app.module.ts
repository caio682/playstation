import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ColecoesComponent } from './header/colecoes/colecoes.component';
import { NavegarComponent } from './header/navegar/navegar.component';
import { NovidadesComponent } from './header/novidades/novidades.component';
import { RouterModule } from '@angular/router';
import { CardComponent, CardModule, CarouselModule } from '@coreui/angular';
import { CorouselComponent } from './header/corousel/corousel.component';
import { PostListComponent } from './header/novidades/post-list/post-list.component';

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
    PostListComponent,
   


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule,
    CardComponent,
    CardModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
