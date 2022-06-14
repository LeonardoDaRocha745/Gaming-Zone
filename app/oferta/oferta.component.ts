import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  private route!: ActivatedRoute
  //cm essa variavel a gente consegue fazer o data binding
  //recuperar o valor delas da API no template HTML
  public oferta!:Oferta

  constructor(route:ActivatedRoute,private ofertasService: OfertasService) { 
   this.route = route;
  }

  ngOnInit(): void {
    
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta : Oferta)=>{
      this.oferta = oferta
      console.log(this.oferta)
    })
  }

}
