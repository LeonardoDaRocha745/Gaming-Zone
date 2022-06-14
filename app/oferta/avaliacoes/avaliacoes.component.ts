import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css'],
  providers:[OfertasService]
})
export class AvaliacoesComponent implements OnInit {

  public descricao!: string
  public descricao1!: string
  public descricao2!: string
  

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getAvaliacoesOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((resposta:any)=>{
  this.descricao = resposta[0].descricao,
  this.descricao1 = resposta[0].descricao1,
  this.descricao2 = resposta[0].descricao2
 
  })

  }

}
