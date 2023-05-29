import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../models/orden-trabajo';
import { OrdenesTrabajoService } from '../services/ordenes-trabajo.service';

@Component({
  selector: 'app-ordenes-trabajo',
  templateUrl: './ordenes-trabajo.component.html',
  styleUrls: ['./ordenes-trabajo.component.css']
})
export class OrdenesTrabajoComponent implements OnInit {
  ordenes!: OrdenTrabajo[];

  constructor(private ordenesService: OrdenesTrabajoService) { }

  ngOnInit() {
    this.cargarOrdenesTrabajo();
  }

  cargarOrdenesTrabajo() {
    this.ordenes = this.ordenesService.getOrdenesTrabajo();
  }
}
