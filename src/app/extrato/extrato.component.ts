import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias!: any[];
  constructor(private service: TransferenciaService) {
    console.log('Passou no extrato')
    this.transferencias = this.service.transferencias
   }

  ngOnInit() {
    console.log('Passou no extrato')
    this.service.todas().subscribe((transferencias: Transferencia[]) =>{
      console.table(transferencias)
      this.transferencias = transferencias
    })
  }

}
