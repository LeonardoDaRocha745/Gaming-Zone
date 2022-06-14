import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import{ROUTES} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IndieComponent } from './indie/indie.component';
import { RpgComponent } from './rpg/rpg.component';
import { OfertaComponent } from './oferta/oferta.component';
import { RequisitosComponent } from './oferta/requisitos/requisitos.component';
import { AvaliacoesComponent } from './oferta/avaliacoes/avaliacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    IndieComponent,
    RpgComponent,
    OfertaComponent,
    RequisitosComponent,
    AvaliacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
