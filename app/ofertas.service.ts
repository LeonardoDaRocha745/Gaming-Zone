import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {Oferta} from './shared/oferta.model'
import { URL_API } from './app.api';


@Injectable()
export class OfertasService{

    

    //serviço de consumo da API 

    constructor(private http:HttpClient){}
      public getOfertas(): Promise<Oferta[]> {
            return firstValueFrom(this.http.get(`${URL_API}/ofertas?destaque=true`))
            .then((resposta: any) => resposta)
        }

 public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
     //aqui ele pega
     return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
     .toPromise(

     )
     //aqui ele devolve a resposta da requisição
     .then((resposta: any) => resposta)

 }

 public getOfertasPorId(id: number):Promise<Oferta>{
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
    .toPromise()  .then((resposta: any) => resposta[0])

 }

 public getRequisitosOfertaPorId(id:number): Promise<string>{
    return this.http.get(`${URL_API}/requisitos?id=${id}`).toPromise()
    .then((resposta:any)=>{
        console.log(resposta)
        return resposta
     
    })
 }

 public getAvaliacoesOfertaPorId(id:number): Promise<string>{
    return this.http.get(`${URL_API}/avaliacoes?id=${id}`).toPromise()
    .then((resposta:any)=>{
        console.log(resposta)
        return resposta
     
    })
 }


        
    }

    

      


            
   

   
