import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDoctores } from '../../services/service.doctores';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-create-doctor-component',
  standalone: false,
  styleUrl: './create-doctor-component.css',
  templateUrl: './create-doctor-component.html',
})
export class CreateDoctorComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajaapellido") cajaapellido!: ElementRef
  @ViewChild("cajaespe") cajaespe!: ElementRef
  @ViewChild("cajasalario") cajasalario!: ElementRef
  @ViewChild("cajahospital") cajahospital!: ElementRef
  mensaje!: string

  constructor(
    private _service: ServiceDoctores,
    private _cdr: ChangeDetectorRef
  ) {}

  async insertarDoctor(): Promise<void>{
    let id = parseInt(this.cajaid.nativeElement.value)
    let apellido = this.cajaapellido.nativeElement.value
    let especialidad = this.cajaespe.nativeElement.value
    let salario = parseInt(this.cajasalario.nativeElement.value)
    let idhospital = parseInt(this.cajahospital.nativeElement.value)
    let doctor = new Doctor(id,apellido, especialidad, salario, idhospital)
    await this._service.insertDoctorAsync(doctor)
    this.mensaje = "Doctor insertado"
    this._cdr.detectChanges()
  }
}
