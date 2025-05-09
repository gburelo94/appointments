import { Component } from '@angular/core';
import { CitaService } from '../cita.service';
import { Router } from '@angular/router';
import { Cita } from '../cita.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cita-form',
  imports: [FormsModule],
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent {
  cita: Cita = {
    id: 0,
    paciente: '',
    fecha: '',
    doctorId: 0,
    consultorioId: 0
  };

  constructor(private citaService: CitaService, private router: Router) {}

  onSubmit() {
    if (this.cita.paciente && this.cita.fecha && this.cita.doctorId && this.cita.consultorioId) {
      this.citaService.addCita(this.cita).subscribe(response => {
        alert('Cita agendada exitosamente');
        this.router.navigate(['/citas']);
      }, error => {
        alert('Hubo un error al agendar la cita');
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}

