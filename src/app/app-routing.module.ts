import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NovidadesComponent } from './header/novidades/novidades.component';
import { ColecoesComponent } from './header/colecoes/colecoes.component';
import { NavegarComponent } from './header/navegar/navegar.component';



const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'novidades', component: NovidadesComponent },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'navegar', component: NavegarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

