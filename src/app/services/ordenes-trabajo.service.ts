import { Injectable } from '@angular/core';
import { OrdenTrabajo } from '../models/orden-trabajo';

@Injectable({
  providedIn: 'root'
})
export class OrdenesTrabajoService {
  getOrdenesTrabajo(): OrdenTrabajo[] {
    // Aquí puedes realizar una solicitud al servidor para obtener los datos reales de las órdenes de trabajo
    // En este ejemplo, simplemente se devuelve una lista simulada
    return [
      { numero: '001', descripcion: 'Orden de trabajo 1' },
      { numero: '002', descripcion: 'Orden de trabajo 2' },
      { numero: '003', descripcion: 'Orden de trabajo 3' }
    ];
  }
}
