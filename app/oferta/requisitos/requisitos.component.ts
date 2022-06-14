import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.css'],
  providers: [OfertasService]
})
export class RequisitosComponent implements OnInit {

  public requisitosSO!: string
  public ProcessadorSO!: string
  public MemoriaSO!: string
  public PlacadadeVideoSO!: string
  public ArmazenamentoSO!: string


  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getRequisitosOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((resposta:any)=>{
  this.requisitosSO = resposta[0].SO,
  this.ProcessadorSO = resposta[0].Processador,
  this.MemoriaSO = resposta[0].Memoria,
  this.PlacadadeVideoSO = resposta[0].PlacaVideo,
  this.ArmazenamentoSO = resposta[0].Armazenamento
    })
  }

}
