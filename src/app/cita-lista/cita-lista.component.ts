import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { Cita } from '../cita.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita-lista',
  imports: [CommonModule],
  templateUrl: './cita-lista.component.html',
  styleUrl: './cita-lista.component.css'
})

export class CitaListaComponent implements OnInit{
  citas: Cita[] = [];

  constructor(private citaService: CitaService) {}

  ngOnInit() {
    this.getCitas();
  }

  getCitas() {
    this.citaService.getCitas().subscribe(data => {
      this.citas = data;
    });
  }

  cancelarCita(id: number) {
    if (confirm('¿Seguro que deseas cancelar esta cita?')) {
      this.citaService.cancelarCita(id).subscribe(() => {
        this.getCitas();  // Refrescar la lista de citas
      });
    }
  }
}

